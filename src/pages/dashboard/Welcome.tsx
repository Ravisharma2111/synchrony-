import React from "react";
import useStyles from "./styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import blIcon from '../../assets/icon/Bitcoin-illustration.svg';

const DashboardWelcome = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.welcomeContent}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div className={classes.dashboardwelcome}>
            <div className={classes.dashboardcontetn}>
              <Typography className={classes.title} variant="h1">
                Welcome to the Synchrony App
              </Typography>
              <Typography className={classes.typograph} >
                Synchrony is an on-chain copy-trading and composable indexing protocol with a friendly Solana marketplace providing in-depth analytics to enable users to research other users’ wallets and their strategies.
              </Typography>
            </div>
            <div className={classes.blicon}>
              <img src={blIcon} alt="" />
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardWelcome;
