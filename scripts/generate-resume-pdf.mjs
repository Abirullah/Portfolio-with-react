import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_PATH = path.resolve(__dirname, "../src/assets/files/MyResume2025.pdf");

function pad10(value) {
  return String(value).padStart(10, "0");
}

function pdfEscapeText(text) {
  return String(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function fillRect(commands, { x, y, w, h, color }) {
  const [r, g, b] = color;
  commands.push(`${r} ${g} ${b} rg`);
  commands.push(`${x} ${y} ${w} ${h} re f`);
}

function strokeRect(commands, { x, y, w, h, color, width = 1 }) {
  const [r, g, b] = color;
  commands.push(`${r} ${g} ${b} RG`);
  commands.push(`${width} w`);
  commands.push(`${x} ${y} ${w} ${h} re S`);
}

function strokeLine(commands, { x1, y1, x2, y2, color, width = 1 }) {
  const [r, g, b] = color;
  commands.push(`${r} ${g} ${b} RG`);
  commands.push(`${width} w`);
  commands.push(`${x1} ${y1} m ${x2} ${y2} l S`);
}

function addText(commands, { font, size, x, y, color, text }) {
  const [r, g, b] = color;
  commands.push(`${r} ${g} ${b} rg`);
  commands.push("BT");
  commands.push(`/${font} ${size} Tf`);
  commands.push(`1 0 0 1 ${x} ${y} Tm`);
  commands.push(`(${pdfEscapeText(text)}) Tj`);
  commands.push("ET");
}

function addTextLines(commands, { font, size, x, y, leading, color, lines }) {
  for (let i = 0; i < lines.length; i += 1) {
    addText(commands, {
      font,
      size,
      x,
      y: y - i * leading,
      color,
      text: lines[i],
    });
  }
}

function toUtf8Bytes(text) {
  return Buffer.from(String(text), "utf8");
}

function buildQrV3LBytes(payloadBytes) {
  const version = 3;
  const dataCodewords = 55;
  const ecCodewords = 15;

  const bits = [];

  function pushBits(value, bitCount) {
    for (let i = bitCount - 1; i >= 0; i -= 1) bits.push((value >>> i) & 1);
  }

  // Mode: Byte (0100)
  pushBits(0b0100, 4);
  // Char count (Version 1-9 -> 8 bits)
  pushBits(payloadBytes.length, 8);
  for (const byte of payloadBytes) pushBits(byte, 8);

  // Terminator
  pushBits(0, 4);

  // Pad to byte boundary
  while (bits.length % 8 !== 0) bits.push(0);

  const codewords = [];
  for (let i = 0; i < bits.length; i += 8) {
    let b = 0;
    for (let j = 0; j < 8; j += 1) b = (b << 1) | bits[i + j];
    codewords.push(b);
  }

  // Pad to capacity
  const pad = [0xec, 0x11];
  let padIndex = 0;
  while (codewords.length < dataCodewords) {
    codewords.push(pad[padIndex]);
    padIndex = (padIndex + 1) % 2;
  }

  // Reed-Solomon (GF(256), poly 0x11d)
  const gfExp = new Array(512).fill(0);
  const gfLog = new Array(256).fill(0);
  let x = 1;
  for (let i = 0; i < 255; i += 1) {
    gfExp[i] = x;
    gfLog[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i += 1) gfExp[i] = gfExp[i - 255];

  function gfMul(a, b) {
    if (a === 0 || b === 0) return 0;
    return gfExp[gfLog[a] + gfLog[b]];
  }

  function rsGeneratorPoly(degree) {
    let poly = [1];
    for (let i = 0; i < degree; i += 1) {
      const next = new Array(poly.length + 1).fill(0);
      for (let j = 0; j < poly.length; j += 1) {
        next[j] ^= poly[j];
        next[j + 1] ^= gfMul(poly[j], gfExp[i]);
      }
      poly = next;
    }
    return poly;
  }

  const gen = rsGeneratorPoly(ecCodewords);
  const msg = codewords.concat(new Array(ecCodewords).fill(0));
  for (let i = 0; i < codewords.length; i += 1) {
    const factor = msg[i];
    if (factor === 0) continue;
    for (let j = 0; j < gen.length; j += 1) {
      msg[i + j] ^= gfMul(gen[j], factor);
    }
  }

  const ec = msg.slice(msg.length - ecCodewords);
  return { version, data: codewords, ec, codewords: codewords.concat(ec) };
}

function qrFormatBits({ ecLevel, mask }) {
  const ecBits = { L: 0b01, M: 0b00, Q: 0b11, H: 0b10 }[ecLevel];
  const data = (ecBits << 3) | (mask & 0b111);

  function bchDigit(v) {
    let digit = 0;
    while (v !== 0) {
      digit += 1;
      v >>>= 1;
    }
    return digit;
  }

  let v = data << 10;
  const g = 0x537; // 10100110111
  while (bchDigit(v) - bchDigit(g) >= 0) v ^= g << (bchDigit(v) - bchDigit(g));
  const bits = ((data << 10) | v) ^ 0x5412;
  return bits & 0x7fff;
}

function buildQrMatrixV3L({ text, ecLevel = "L", mask = 0 }) {
  const payloadBytes = toUtf8Bytes(text);
  const { version, codewords } = buildQrV3LBytes(payloadBytes);
  const size = 17 + 4 * version;

  const modules = Array.from({ length: size }, () => Array.from({ length: size }, () => null));
  const reserved = Array.from({ length: size }, () => Array.from({ length: size }, () => false));

  function set(x, y, value, isReserved = true) {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    modules[y][x] = value ? 1 : 0;
    if (isReserved) reserved[y][x] = true;
  }

  function drawFinder(x, y) {
    for (let dy = -1; dy <= 7; dy += 1) {
      for (let dx = -1; dx <= 7; dx += 1) {
        const xx = x + dx;
        const yy = y + dy;
        if (xx < 0 || yy < 0 || xx >= size || yy >= size) continue;
        const sep = dx === -1 || dx === 7 || dy === -1 || dy === 7;
        if (sep) {
          set(xx, yy, 0);
          continue;
        }
        const onBorder = dx === 0 || dx === 6 || dy === 0 || dy === 6;
        const inCenter = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
        set(xx, yy, onBorder || inCenter ? 1 : 0);
      }
    }
  }

  function drawAlignment(cx, cy) {
    for (let dy = -2; dy <= 2; dy += 1) {
      for (let dx = -2; dx <= 2; dx += 1) {
        const xx = cx + dx;
        const yy = cy + dy;
        const m = Math.max(Math.abs(dx), Math.abs(dy));
        set(xx, yy, m === 2 || (dx === 0 && dy === 0) ? 1 : 0);
      }
    }
  }

  drawFinder(0, 0);
  drawFinder(size - 7, 0);
  drawFinder(0, size - 7);

  // timing
  for (let i = 8; i <= size - 9; i += 1) {
    const bit = i % 2 === 0 ? 1 : 0;
    set(i, 6, bit);
    set(6, i, bit);
  }

  // alignment patterns (version 3 -> centers at 6 and 22, only (22,22) doesn't overlap finders)
  drawAlignment(22, 22);

  // dark module
  set(8, 4 * version + 9, 1);

  // reserve format info
  const formatCoords1 = [
    [8, 0],
    [8, 1],
    [8, 2],
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 7],
    [8, 8],
    [7, 8],
    [5, 8],
    [4, 8],
    [3, 8],
    [2, 8],
    [1, 8],
    [0, 8],
  ];
  const formatCoords2 = [
    [size - 1, 8],
    [size - 2, 8],
    [size - 3, 8],
    [size - 4, 8],
    [size - 5, 8],
    [size - 6, 8],
    [size - 7, 8],
    [size - 8, 8],
    [8, size - 7],
    [8, size - 6],
    [8, size - 5],
    [8, size - 4],
    [8, size - 3],
    [8, size - 2],
    [8, size - 1],
  ];
  for (const [x1, y1] of formatCoords1) reserved[y1][x1] = true;
  for (const [x2, y2] of formatCoords2) reserved[y2][x2] = true;

  // data placement
  const dataBits = [];
  for (const cw of codewords) {
    for (let i = 7; i >= 0; i -= 1) dataBits.push((cw >>> i) & 1);
  }

  function maskFn(r, c) {
    switch (mask) {
      case 0:
        return (r + c) % 2 === 0;
      case 1:
        return r % 2 === 0;
      case 2:
        return c % 3 === 0;
      case 3:
        return (r + c) % 3 === 0;
      case 4:
        return ((Math.floor(r / 2) + Math.floor(c / 3)) % 2) === 0;
      case 5:
        return ((r * c) % 2 + (r * c) % 3) === 0;
      case 6:
        return (((r * c) % 2 + (r * c) % 3) % 2) === 0;
      case 7:
        return (((r + c) % 2 + (r * c) % 3) % 2) === 0;
      default:
        return false;
    }
  }

  let bitIndex = 0;
  let dir = -1;
  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col -= 1;
    for (let row = dir === -1 ? size - 1 : 0; dir === -1 ? row >= 0 : row < size; row += dir) {
      for (let off = 0; off < 2; off += 1) {
        const x = col - off;
        const y = row;
        if (reserved[y][x]) continue;
        const bit = bitIndex < dataBits.length ? dataBits[bitIndex] : 0;
        bitIndex += 1;
        const masked = bit ^ (maskFn(y, x) ? 1 : 0);
        set(x, y, masked, false);
      }
    }
    dir *= -1;
  }

  // format info bits
  const formatBits = qrFormatBits({ ecLevel, mask });
  for (let i = 0; i < 15; i += 1) {
    const bit = (formatBits >>> i) & 1;
    const [x1, y1] = formatCoords1[i];
    const [x2, y2] = formatCoords2[i];
    set(x1, y1, bit, true);
    set(x2, y2, bit, true);
  }

  // Any remaining nulls should be light
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (modules[y][x] === null) modules[y][x] = 0;
    }
  }

  return modules;
}

function drawQrCode(commands, { x, y, size, text }) {
  const matrix = buildQrMatrixV3L({ text, ecLevel: "L", mask: 0 });
  const quiet = 4;
  const count = matrix.length;
  const total = count + quiet * 2;
  const moduleSize = size / total;

  // white background (includes quiet zone)
  fillRect(commands, { x, y, w: size, h: size, color: [1, 1, 1] });

  for (let r = 0; r < count; r += 1) {
    for (let c = 0; c < count; c += 1) {
      if (!matrix[r][c]) continue;
      const xx = x + (quiet + c) * moduleSize;
      const yy = y + (quiet + (count - 1 - r)) * moduleSize;
      fillRect(commands, { x: xx, y: yy, w: moduleSize, h: moduleSize, color: [0, 0, 0] });
    }
  }
}

function buildPdf({ contentStream }) {
  const header = Buffer.from("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n", "binary");
  const objects = [];
  const offsets = [0];

  let bytes = header.length;

  function addObject(objectNumber, body) {
    offsets[objectNumber] = bytes;
    const chunk = Buffer.from(`${objectNumber} 0 obj\n${body}\nendobj\n`, "binary");
    objects.push(chunk);
    bytes += chunk.length;
  }

  const contentBytes = Buffer.from(contentStream, "binary");

  // 1: Catalog
  addObject(1, "<< /Type /Catalog /Pages 2 0 R >>");
  // 2: Pages
  addObject(2, "<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  // 3: Page
  addObject(
    3,
    [
      "<< /Type /Page",
      "/Parent 2 0 R",
      "/MediaBox [0 0 595.28 841.89]",
      "/Resources << /Font << /F1 4 0 R /F2 6 0 R >> >>",
      "/Contents 5 0 R",
      ">>",
    ].join("\n")
  );
  // 4: Font Helvetica
  addObject(4, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  // 5: Content stream
  addObject(5, `<< /Length ${contentBytes.length} >>\nstream\n${contentStream}\nendstream`);
  // 6: Font Helvetica-Bold
  addObject(6, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  const xrefOffset = bytes;
  const xrefParts = [];
  const size = 7;
  xrefParts.push(`xref\n0 ${size}\n`);
  xrefParts.push("0000000000 65535 f \n");
  for (let i = 1; i < size; i += 1) {
    xrefParts.push(`${pad10(offsets[i])} 00000 n \n`);
  }
  xrefParts.push(`trailer\n<< /Size ${size} /Root 1 0 R >>\n`);
  xrefParts.push(`startxref\n${xrefOffset}\n%%EOF\n`);
  const xref = Buffer.from(xrefParts.join(""), "binary");

  return Buffer.concat([header, ...objects, xref]);
}

function main() {
  const page = { w: 595.28, h: 841.89 };
  const margin = 48;
  const colGap = 24;
  const colW = (page.w - margin * 2 - colGap) / 2;
  const rightX = Math.round((margin + colW + colGap) * 100) / 100;

  const colors = {
    header: [0.02, 0.07, 0.12],
    white: [1, 1, 1],
    ink: [0.06, 0.08, 0.10],
    muted: [0.22, 0.26, 0.30],
    accent: [0.16, 0.62, 0.86],
    rule: [0.85, 0.88, 0.90],
  };

  const resume = {
    name: "Abirullah",
    title1: "MEAN Stack Developer",
    title2: "React • Node/Express • MongoDB",
    contact: ["Email: abirafridi87@gmail.com", "GitHub: github.com/Abirullah", "LinkedIn: abir-afridi-2856a02b0"],
    portfolioUrl: "https://abirullah.vercel.app/",
    summary: [
      "Full-stack JavaScript developer focused on clean UI and reliable APIs.",
      "I build responsive React front-ends and Node/Express back-ends with MongoDB.",
      "Open to freelance and full-time roles.",
    ],
    skills: [
      "JavaScript, TypeScript, React",
      "Node.js, Express, REST APIs",
      "MongoDB, CRUD, Auth basics",
      "Tailwind CSS, Bootstrap, Responsive UI",
      "Git/GitHub, Deployments",
      "Performance + UX polish",
      "React Query, API integration",
      "Problem solving",
    ],
    experience: {
      role: "Encova Solutions - MEAN Stack Developer",
      bullets: [
        "Build responsive React interfaces for web products",
        "Create Node/Express APIs and integrate 3rd-party services",
        "Work with MongoDB models and end-to-end CRUD flows",
        "Improve performance, accessibility, and UI consistency",
      ],
    },
    projects: [
      "Country Information Explorer - API-driven UI",
      "Todo List - simple productivity app",
      "Weather App - live city forecasts",
    ],
    services: ["Landing pages + portfolios", "Dashboards + admin panels", "Bug fixes + UI improvements", "API integration"],
    tools: [
      "Vite, npm, ESLint",
      "Git & GitHub",
      "REST APIs + 3rd-party integrations",
      "Responsive design",
      "UI polish + performance",
      "Reusable components",
      "Deployment (Vercel / GitHub Pages)",
    ],
    highlights: [
      "Build modern, mobile-first UIs",
      "Write clean, maintainable code",
      "Focus on UX + performance",
      "Ship features end-to-end",
      "Communicate clearly and work in a team",
      "Quick learner, consistent delivery",
    ],
    workflow: ["Plan → Design → Build", "API integration + CRUD flows", "Review + polish UI", "Deploy + iterate"],
  };

  const commands = [];
  const headerH = 156;
  const headerBottom = page.h - headerH;

  // Header block
  fillRect(commands, { x: 0, y: headerBottom, w: page.w, h: headerH, color: colors.header });

  const qrBox = 104;
  const qrPad = 8;
  const qrBoxX = page.w - margin - qrBox;
  const qrBoxY = headerBottom + 22;

  // QR (portfolio)
  fillRect(commands, { x: qrBoxX, y: qrBoxY, w: qrBox, h: qrBox, color: colors.white });
  strokeRect(commands, { x: qrBoxX, y: qrBoxY, w: qrBox, h: qrBox, color: [0, 0, 0], width: 1 });
  drawQrCode(commands, {
    x: qrBoxX + qrPad,
    y: qrBoxY + qrPad,
    size: qrBox - qrPad * 2,
    text: resume.portfolioUrl,
  });
  addText(commands, {
    font: "F1",
    size: 9.4,
    x: qrBoxX,
    y: headerBottom + 10,
    color: colors.white,
    text: "Scan → abirullah.vercel.app",
  });

  // Left header text
  addText(commands, { font: "F2", size: 30, x: margin, y: page.h - 58, color: colors.white, text: resume.name });
  addText(commands, { font: "F2", size: 12.6, x: margin, y: page.h - 90, color: colors.white, text: resume.title1 });
  addText(commands, { font: "F1", size: 11.2, x: margin, y: page.h - 108, color: colors.white, text: resume.title2 });
  addTextLines(commands, {
    font: "F1",
    size: 10.2,
    x: margin,
    y: page.h - 128,
    leading: 14,
    color: [0.92, 0.96, 1],
    lines: resume.contact,
  });

  // Summary
  const summaryHeadY = headerBottom - 26;
  addText(commands, { font: "F2", size: 11, x: margin, y: summaryHeadY, color: colors.accent, text: "SUMMARY" });
  addTextLines(commands, {
    font: "F1",
    size: 10.6,
    x: margin,
    y: summaryHeadY - 18,
    leading: 14.5,
    color: colors.muted,
    lines: resume.summary,
  });
  const summaryRuleY = summaryHeadY - 18 - resume.summary.length * 14.5 - 10;
  strokeLine(commands, {
    x1: margin,
    y1: summaryRuleY,
    x2: page.w - margin,
    y2: summaryRuleY,
    color: colors.rule,
    width: 1,
  });

  // Left column: Skills + Projects
  const colTop = summaryRuleY - 26;
  addText(commands, { font: "F2", size: 11, x: margin, y: colTop, color: colors.accent, text: "SKILLS" });
  addTextLines(commands, {
    font: "F1",
    size: 10.2,
    x: margin,
    y: colTop - 18,
    leading: 14.2,
    color: colors.ink,
    lines: resume.skills.map((s) => `- ${s}`),
  });

  const projectsHeadY = colTop - 18 - resume.skills.length * 14.2 - 20;
  addText(commands, { font: "F2", size: 11, x: margin, y: projectsHeadY, color: colors.accent, text: "PROJECTS" });
  addTextLines(commands, {
    font: "F1",
    size: 10.2,
    x: margin,
    y: projectsHeadY - 18,
    leading: 14.2,
    color: colors.ink,
    lines: resume.projects.map((p) => `- ${p}`),
  });

  // Right column: Experience + Services
  addText(commands, { font: "F2", size: 11, x: rightX, y: colTop, color: colors.accent, text: "EXPERIENCE" });
  addText(commands, {
    font: "F2",
    size: 10.6,
    x: rightX,
    y: colTop - 18,
    color: colors.ink,
    text: resume.experience.role,
  });
  addTextLines(commands, {
    font: "F1",
    size: 10.2,
    x: rightX,
    y: colTop - 36,
    leading: 14.2,
    color: colors.ink,
    lines: resume.experience.bullets.map((b) => `- ${b}`),
  });

  const servicesHeadY = colTop - 36 - resume.experience.bullets.length * 14.2 - 20;
  addText(commands, { font: "F2", size: 11, x: rightX, y: servicesHeadY, color: colors.accent, text: "SERVICES" });
  addTextLines(commands, {
    font: "F1",
    size: 10.2,
    x: rightX,
    y: servicesHeadY - 18,
    leading: 14.2,
    color: colors.ink,
    lines: resume.services.map((s) => `- ${s}`),
  });

  // Extra sections to avoid empty space
  const toolsHeadY = projectsHeadY - 18 - resume.projects.length * 14.2 - 24;
  addText(commands, { font: "F2", size: 11, x: margin, y: toolsHeadY, color: colors.accent, text: "TOOLS & PRACTICES" });
  addTextLines(commands, {
    font: "F1",
    size: 10.2,
    x: margin,
    y: toolsHeadY - 18,
    leading: 14.2,
    color: colors.ink,
    lines: resume.tools.map((s) => `- ${s}`),
  });

  const workflowHeadY = toolsHeadY - 18 - resume.tools.length * 14.2 - 24;
  addText(commands, { font: "F2", size: 11, x: margin, y: workflowHeadY, color: colors.accent, text: "WORKFLOW" });
  addTextLines(commands, {
    font: "F1",
    size: 10.2,
    x: margin,
    y: workflowHeadY - 18,
    leading: 14.2,
    color: colors.ink,
    lines: resume.workflow.map((s) => `- ${s}`),
  });

  const highlightsHeadY = servicesHeadY - 18 - resume.services.length * 14.2 - 24;
  addText(commands, { font: "F2", size: 11, x: rightX, y: highlightsHeadY, color: colors.accent, text: "HIGHLIGHTS" });
  addTextLines(commands, {
    font: "F1",
    size: 10.2,
    x: rightX,
    y: highlightsHeadY - 18,
    leading: 14.2,
    color: colors.ink,
    lines: resume.highlights.map((s) => `- ${s}`),
  });

  const contactHeadY = highlightsHeadY - 18 - resume.highlights.length * 14.2 - 24;
  addText(commands, { font: "F2", size: 11, x: rightX, y: contactHeadY, color: colors.accent, text: "CONTACT" });
  addTextLines(commands, {
    font: "F1",
    size: 10.2,
    x: rightX,
    y: contactHeadY - 18,
    leading: 14.2,
    color: colors.ink,
    lines: [...resume.contact, `Portfolio: ${resume.portfolioUrl}`].map((s) => `- ${s}`),
  });

  // Footer
  const footerY = 54;
  strokeLine(commands, { x1: margin, y1: footerY + 18, x2: page.w - margin, y2: footerY + 18, color: colors.rule, width: 1 });
  addText(commands, { font: "F1", size: 9.6, x: margin, y: footerY, color: colors.muted, text: resume.portfolioUrl });

  const contentStream = `${commands.join("\n")}\n`;
  const pdf = buildPdf({ contentStream });

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, pdf);

  // eslint-disable-next-line no-console
  console.log(`Wrote: ${OUT_PATH} (${pdf.length} bytes)`);
}

main();
