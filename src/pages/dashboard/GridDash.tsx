import React from "react";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";

const GridDash = ({
  title,
  percentAmount,
  arrow,
  icon,
  iconName,
  amount,
  chartIcon,
}) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.typograph}>
        {title}
        <span className={classes.topprice}>
          {arrow} {percentAmount}
        </span>
      </Typography>
      <Typography className={classes.tname}>
        <img src={icon} alt="" />
        {iconName}
      </Typography>
      <Typography className={classes.total}>
        {amount} <img src={chartIcon} alt="" />
      </Typography>
    </>
  );
};

export default GridDash;

