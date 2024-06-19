import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import useStyles from "./styles";
import { apiServices } from "../../api/apiServices";

export function TwitterFollowers({ followers
}) {
  const classes = useStyles();
  return (
    <><div className={classes.twitterTable}><h3>{apiServices.numberWithCommas(followers)}</h3><TwitterIcon /></div></>
  );
};


