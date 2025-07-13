import React from "react";
import styles from "./FullScreenLoading.module.scss";

const FullScreenLoading = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default FullScreenLoading;
