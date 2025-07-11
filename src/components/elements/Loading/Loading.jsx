import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.clock_loader}>
      <div className={styles.hour}></div>
      <div className={styles.minute}></div>
    </div>
  );
};

export default Loading;
