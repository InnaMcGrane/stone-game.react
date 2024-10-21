import cn from "classnames";
import styles from "./stone.module.css";

function Stone({ id, hide, color, disabled, img, setStatePairHandler }) {
  return (
    <button
      className={cn(styles["stone"], hide ? styles["stone--hide"] : "")}
      disabled={disabled}
      onClick={() =>
        setStatePairHandler({
          id: id,
          color: color,
        })
      }
    >
      <img className={cn(styles["stone__img"])} src={img} alt="" />
    </button>
  );
}

export default Stone;
