import cn from "classnames";
import styles from "./stone.module.css";

function Stone({ id, hide, disabled, img }) {
  return (
    <button className={cn(styles["stone"], hide ? styles["stone-hide"] : "")} disabled={disabled}>
      <img className={cn(styles["stone__img"])} src={img} alt="" />
    </button>
  );
}

export default Stone;
