import cn from "classnames";
import styles from "./game.module.css";
import Button from "../Button/Button";
import data from "../../data";
import Stone from "../Stone/Stone";
import { useState, useEffect } from "react";

function Game() {
  const [gameActive, setGameActive] = useState(false);
  const [stonesStatus, setStonesStatus] = useState(
    data
      .map((el) => {
        return {
          ...el,
          disabled: true,
          hide: false,
        };
      })
      .sort((a, b) => 0.5 - Math.random())
  );

  const [pair, setStatePair] = useState([]);

  useEffect(() => {
    // проверка на dblclick
    // if (pair.length === 1 && pair[0].id === obj.id) {
    //   return;
    // }

    if (isEqualPair()) {
      const idsStonesInPair = [pair[0].id, pair[1].id];
      const newStateStonesArray = stonesStatus.map((el) => {
        if (idsStonesInPair.includes(el.id)) {
          // камень найден по id
          el.disabled = true;
          el.hide = false;
          return el;
        }
        return el;
      });
      setStonesStatus(newStateStonesArray);
    }
    // console.log(pair);
  }, [pair]);

  const setStatePairHandler = (obj) => {
    if (pair.length === 2) {
      setStatePair([obj]);
    } else {
      setStatePair([...pair, obj]);
    }
  };

  const isEqualPair = () => {
    if (pair.length < 2) {
      return false;
    }

    if (pair[0].color === pair[1].color) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    // игра активна
    if (gameActive === true) {
      setStonesStatus(
        stonesStatus.map((el) => {
          return {
            ...el,
            disabled: false,
            hide: gameActive === true ? true : false,
          };
        })
      );
    }

    if (gameActive === false) {
      setStonesStatus(
        stonesStatus.map((el) => {
          return {
            ...el,
            disabled: true,
            hide: false,
          };
        })
      );
    }
  }, [gameActive]);

  const setGameActiveHandler = () => {
    setGameActive(!gameActive);
  };

  return (
    <div className={cn(styles["game"])}>
      <div className={cn(styles["game__btn"])}>
        <Button type="start" text={gameActive === true ? "finish game" : "start game"} handler={setGameActiveHandler} />
      </div>
      <span className={cn(styles["game__found"])}>found parts: 0</span>
      <span className={cn(styles["game__total"])}>total parts: 0</span>
      <div className={cn(styles["game__wrapper"])}>
        {stonesStatus.map((el) => {
          return <Stone id={el.id} color={el.color} hide={el.hide} disabled={el.disabled} img={el.img} key={el.id} setStatePairHandler={setStatePairHandler} />;
        })}
      </div>
    </div>
  );
}

export default Game;
