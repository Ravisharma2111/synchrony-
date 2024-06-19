import React from "react";
import useStyles from "./styles";
import { Breadcrumbs } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const DashboardTabs = ({ currentTab, setCurrentTab }) => {
   const classes = useStyles();

   return (
      <div className={classes.breadcrumbsBar}>
         <div className={classes.breadcrumbsinner}>
            <Breadcrumbs separator={''} className={"tabingSwitch"} aria-label="breadcrumb">
               <Typography color="textPrimary" className={currentTab === "MyInvestment" ? 'active' : ''} onClick={() => { setCurrentTab('MyInvestment') }}>Ecosystem Overview</Typography>
               <Typography color="textPrimary" className={currentTab === "Discovery" ? 'active' :''} onClick={()=>{setCurrentTab('Discovery')}}>Wallet Analytics</Typography>
               <Typography color="textPrimary" className={currentTab === "Transaction" ? 'active' : ''} onClick={() => { setCurrentTab('Transaction') }}>Transaction History</Typography>
               {/* <Typography color="textPrimary" className={currentTab === "Gallery" ? 'active' :''} onClick={()=>{setCurrentTab('Gallery')}}>NFT Gallery</Typography> */}
               <Typography color="textPrimary" className={currentTab === "Compare" ? 'active' : ''} onClick={() => { setCurrentTab('Compare') }}>Compare Wallets</Typography>
            </Breadcrumbs>
         </div>
      </div>
   );
};

export default DashboardTabs;
