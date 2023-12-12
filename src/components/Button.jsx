// Button.jsx
import React from "react";
import styles from "./Button.module.css"; // Import the module style

const CustomButton = ({ onClick, children }) => {
  return (
    <a href="" className={styles.button} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </a>
  );
};

export default CustomButton;