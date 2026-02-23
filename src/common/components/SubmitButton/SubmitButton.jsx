import style from './SubmitButton.module.css';

function SubmitButton({ width , height , icon , children , color , backgroundColor, disabled }) {
    return (
        <div className={style["submit-button"]} style={{width: width , height: height}}>
            <button
                type="submit"
                className={style.button}
                style={{
                    width: width,
                    height: height,
                    backgroundColor: backgroundColor,
                    color: color
                }}
                disabled={disabled}
            >
                <span className={style.label}>{children}</span>
                <span className={style.icon} aria-hidden="true">{icon}</span>
            </button>
        </div>
    );
}

export default SubmitButton;
