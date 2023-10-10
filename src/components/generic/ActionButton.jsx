import React from "react";
import styles from "./ActionButton.module.scss";

function ActionButton(props) {
  return (
    <div
      className={styles.action + " " + props.className}
      title="Create project"
      onClick={props.onClick}>
      <img
        className={styles.action__image}
        src={props.img}
        alt=""
      />
    </div>
  );
}

export default ActionButton;
