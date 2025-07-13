import React from "react";
import styles from "./Spinner.module.scss";
import classNames from "classnames";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "white" | "black";
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "primary",
  className = "",
}) => {
  return (
    <div
      className={classNames(
        styles.spinner,
        styles[`spinner--${size}`],
        styles[`spinner--${color}`],
        className
      )}
    ></div>
  );
};

export default Spinner;
