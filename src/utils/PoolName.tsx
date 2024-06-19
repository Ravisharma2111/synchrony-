import React from "react";
import useStyles from "../pages/compare/styles";

export default function PoolName({
  image = '',
  name = ''
}) {
  const classes = useStyles();

  return (
    <div className={classes.poolname}><img src={image} className="coinIcons" alt="" /> {name}</div>
  );
};


