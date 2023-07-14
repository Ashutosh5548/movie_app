import React from "react";

import styles from "./InputControl.module.css";

function PassControl(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input type="password" {...props} />
    </div>
  );
}

export default PassControl;