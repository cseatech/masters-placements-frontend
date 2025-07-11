import React from "react";
import styles from "./Loading.module.css";

const Loading = ({color}) => {
  return (
    <div className={styles.clock_loader} style={{ border: `6px solid ${color}`}}>
      <div className={styles.hour}></div>
      <div className={styles.minute}></div>
    </div>
  );
};

export default Loading;
