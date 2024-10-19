import cn from "classnames";
import styles from "./game.module.css"
import Button from "../Button/Button";
import data from "../../data";
import Stone from "../Stone/Stone";

function Game () {
    return <div className={cn(styles["game"])}>
        <div className={cn(styles["game__btn"])}> 
            <Button type="start" text="Start Game" handler={() => {}}/>
        </div>
        <span className={cn(styles["game__found"])}>found parts: 0</span>
        <span className={cn(styles["game__total"])}>total parts: 0</span>
        <div className={cn(styles["game__wrapper"])}>
          {
            data.map((el) => {
                return <Stone id={el.id} hide={false} disabled={true} img={el.img} key={el.id} />
            })
          }
        </div>
        </div>;
  }

export default Game;