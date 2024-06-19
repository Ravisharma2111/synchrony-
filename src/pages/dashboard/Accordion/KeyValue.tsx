import React from "react";
import useStyles from "../styles";

const KeyValue = ({ label, value }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.divederTwobox}>
      <h5>{label}</h5>
      <p>{value}</p>
    </div>
  );
};

export default KeyValue;