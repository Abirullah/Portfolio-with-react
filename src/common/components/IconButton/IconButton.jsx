import style from './IconButton.module.css'

function IconButton({ width , height , icon , children , color , backgroundColor , link, onClick }){
    const buttonElement = (
        <button className={style.button}
            style={{
                width: width,
                height: height,
                backgroundColor: backgroundColor,
                color: color
            }}
            onClick={onClick}
        >
            <div className={style.text}>{children}</div>
            <div className={style.icon}>{icon}</div>
        </button>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noreferrer">
                {buttonElement}
            </a>
        );
    }

    return buttonElement;
}

export default IconButton;
