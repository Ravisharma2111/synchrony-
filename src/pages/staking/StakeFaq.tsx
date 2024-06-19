import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from "./Style";
//import { TramRounded } from "@material-ui/icons";

const StakeFaq = ({ title, data }) => {
  const classes = useStyles();
  const [tableToggle, setTableToggle] = useState(false);

  return (
    <>
      <Grid className={classes.stakeFaq} >
        <Typography className={tableToggle === true ? "faqtitle active" : "faqtitle "} style={{ marginTop: 0, }}>
          {title} <ExpandMoreIcon onClick={() => { setTableToggle(!tableToggle) }} className={tableToggle === true ? "arrow--toggle" : "arrow--toggle open"} />
        </Typography>
        <Grid item xs={12} className={tableToggle === false ? classes.toggleTable : classes.TableAnimate}>
          <Typography className={classes.faqdata} style={{ marginTop: 0, }}>
            {data}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default StakeFaq;
