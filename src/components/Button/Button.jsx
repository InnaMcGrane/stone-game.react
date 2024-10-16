import cn from "classnames";
import styles from './button.module.css'

function Button({type, text, disabled, handler}){
    return <button className={cn(styles["btn"], styles[`btn--${type}`])} disabled={disabled} onClick={() => handler()}>{text}</button>
}

export default Button;