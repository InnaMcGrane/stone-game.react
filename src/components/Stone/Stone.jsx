function Stone({hide, disabled, img}) {
    return (
      <button className={`stone ${hide ? "stone--hide" : ""}`} disabled={disabled}>
        <img className="stone__img" src={`./image/${img}.png`} alt="" />
      </button>
    );
}

export default Stone;