import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div
      className={styles.card + " " + props.className}
      id={props.id}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default Card;
