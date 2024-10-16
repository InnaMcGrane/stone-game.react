import cn from "classnames";
import styles from "./game.module.css"

function Game () {
    return <div className={cn(styles["game"])}>
        <div className={cn(styles["game__btn"])}></div>
        <span className={cn(styles["game__found"])}>found parts: 0</span>
        <span className={cn(styles["game__total"])}>total parts: 0</span>
        <div className={cn(styles["game__wrapper"])}></div>
        </div>;
  }

export default Game;