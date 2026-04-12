import styles from "./SeaJourney.module.css";
import { THEME_WORLDS } from "./themeWorlds";

const ORBIT_STEP = 360 / THEME_WORLDS.length;

function ColorThemePicker({
  worlds = THEME_WORLDS,
  activeWorld,
  activePalette,
  onWorldChange,
  onPaletteChange,
}) {
  return (
    <aside className={styles.colorPickerContainer}>
      <div
        className={styles.themePickerShell}
        style={{
          "--picker-primary": activePalette.primary,
          "--picker-secondary": activePalette.secondary,
          "--picker-tertiary": activePalette.tertiary,
          "--picker-accent": activePalette.accent,
          "--picker-shell": activePalette.pickerShell,
        }}
      >
        <div className={styles.themePickerMeta}>
          <span className={styles.themePickerEyebrow}>World Circle</span>
          <strong>{activeWorld.title}</strong>
          <span>{activePalette.name} palette</span>
        </div>

        <div className={styles.themeOrbit}>
          <div className={styles.themeOrbitGlow} aria-hidden="true" />

          <div className={styles.themeCore}>
            <span className={styles.themeCoreCode}>{activeWorld.shortLabel}</span>
            <strong className={styles.themeCoreTitle}>{activeWorld.name}</strong>
            <span className={styles.themeCorePalette}>{activePalette.name}</span>
          </div>

          {worlds.map((world, index) => {
            const active = world.id === activeWorld.id;
            const palette = world.palettes[0];

            return (
              <button
                key={world.id}
                type="button"
                className={`${styles.themeOrbitNode} ${active ? styles.themeOrbitNodeActive : ""}`}
                style={{
                  "--orbit-angle": `${index * ORBIT_STEP}deg`,
                  "--node-primary": palette.primary,
                  "--node-secondary": palette.secondary,
                  "--node-accent": palette.accent,
                }}
                onClick={() => onWorldChange(world)}
                aria-pressed={active}
                title={`Switch to ${world.title}`}
              >
                <span className={styles.themeOrbitNodeInner}>{world.icon}</span>
                <span className={styles.themeOrbitNodeLabel}>{world.name}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.palettePicker}>
          <div className={styles.palettePickerHeader}>
            <span className={styles.palettePickerTitle}>Theme Colors</span>
            <span className={styles.palettePickerHint}>Each world has its own preset look</span>
          </div>

          <div className={styles.palettePickerGrid}>
            {activeWorld.palettes.map((palette) => {
              const active = palette.id === activePalette.id;

              return (
                <button
                  key={palette.id}
                  type="button"
                  className={`${styles.colorOption} ${active ? styles.active : ""}`}
                  onClick={() => onPaletteChange(palette)}
                  aria-pressed={active}
                  title={`${activeWorld.name} - ${palette.name}`}
                  style={{
                    "--swatch-a": palette.swatches[0],
                    "--swatch-b": palette.swatches[1],
                    "--swatch-c": palette.swatches[2],
                    "--swatch-d": palette.swatches[3],
                  }}
                >
                  <span className={styles.colorOptionCore} />
                  <span className={styles.colorOptionLabel}>{palette.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ColorThemePicker;
export { THEME_WORLDS };
