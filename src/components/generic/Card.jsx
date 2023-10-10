import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link
      className={styles.card + " " + props.className}
      to={props.to}>
      {props.children}
    </Link>
  );
}

export default Card;
