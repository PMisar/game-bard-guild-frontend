// Button.jsx

import React from "react";
import styles from "./Button.module.css"; 

const CustomButton = ({ onClick, children }) => {
  const handleClick = (event) => {
    event.preventDefault(); 
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <a href="" className={styles.button} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </a>
  );
};

export default CustomButton;

// import React from "react";
// import styles from "./Button.module.css"; // Import the module style

// const CustomButton = ({ onClick, children }) => {
//   return (
//     <a href="" className={styles.button} onClick={onClick}>
//       <span></span>
//       <span></span>
//       <span></span>
//       <span></span>
//       {children}
//     </a>
//   );
// };

// export default CustomButton;