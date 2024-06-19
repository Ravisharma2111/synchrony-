import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import TableGrid from '../../components/Grid/Table';
import comIcon from '../../assets/icon/Combined.svg';
import chartIcon from '../../assets/icon/Chart.svg';
import chartredIcon from '../../assets/icon/Vector.svg';
import waxtIcon from '../../assets/icon/WAX.svg';
import learnIcon from '../../assets/icon/illustration_learn.svg';
import Container from '@material-ui/core/Container';
import { dataColumn } from '../../models/toppools';
import WalletModal from './walletModal';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { walletStatus } from '../../components/Header/walletStatus';
import Discovery from '../discovery/Discovery';
import { TwitterFollowers } from '../pool/TwitterFollowers';
import TransactionHistory from "../transaction/TransactionHistory";
import Gallery from "../Gallery/Gallery";
import { apiServices } from "../../api/apiServices";
import Layout from "../Layout/Layout";
import { DashPoolDetails } from "./Accordion/DashPoolDetails";
import PoolName from "../../utils/PoolName";
import DashboardTabs from "./Tabs";
import DashboardWelcome from "./Welcome";
import GridDash from "./GridDash";
import FilterTabs from "./FilterTabs";
import CompareData from "../../components/CompareData";
import { useWallet } from "@solana/wallet-adapter-react";

const Dashboard = (props: RouteComponentProps) => {
   const classes = useStyles();
   const [openModal, setOpenModal] = useState(false);
   const [currentTab, setCurrentTab] = useState('MyInvestment');
   const [walletConnect, setWalletConnected] = useState(walletStatus);
   const [setSearchText] = useState('');
   const wallet = useWallet();
   const [dataRows, setDataRows] = useState([]);
   const [sarchTrigger,] = useState('0');
   const [inputText, setInputText] = useState('');
   const [loaderOpen, setLoaderOpen] = useState(false);
   const [disabled, setDisabled] = useState(false);
   const filterSearch = (value, item) => {
      get_latest_pools(value, true);

   }

   const get_latest_pools = async (filter = "", type = false) => {
      setLoaderOpen(true);
      let data = await apiServices.get_latest_pools(filter, type);
      if (data !== false) {
         for (var i = 0; i < data.length; i++) 
         { 
            data[i].price_24_h = parseFloat(data[i].price_24_h).toFixed(2); 
            data[i].market_cap = apiServices.numberWithCommas(parseFloat(data[i].market_cap).toFixed(2)); 
            data[i].twitter_followers = <TwitterFollowers followers={data[i].twitter_followers} />; 
            data[i].title = data[i].name; data[i].accordionData = <DashPoolDetails row={data[i]} />; 
            data[i].name = <PoolName name={data[i].name} image={data[i].logo} />; 
         }
         setDataRows(data);
      }
      setLoaderOpen(false);
   }

   useEffect(() => {
      get_latest_pools();
      if (localStorage.getItem("fromFollow") === "Yes") {
         setCurrentTab("Discovery");
         localStorage.removeItem("fromFollow");
      }
      if (wallet && wallet.connected === true) {
         const getData = async () => {
            if (disabled === true) { return; }
            setDisabled(true);

            setDisabled(false);
         }
         getData();

      }

   }, [wallet])

   return (
      <Layout loaderOpen={loaderOpen}>
         <DashboardTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
         {currentTab === "MyInvestment" ?
            <Container fixed>
               {walletConnect === false && <DashboardWelcome />}
               {/* Second Section*/}
               {/* <Typography className={classes.subtitle1} variant="h2">
         Market Overview
        </Typography> */}
               {/* <Grid className={classes.secondBox} container>
            <Grid item xs={4} className={classes.highestvol}>
              <Paper className={classes.boxgridLeft}>
                <GridDash title={"Highest volume (24h)"} percentAmount={"12.27%"} arrow={<ArrowDropUpIcon/>} icon={comIcon} iconName={"Token name"} amount={"$368,262.78"} chartIcon={chartIcon}/>  
              </Paper>     
            </Grid>
            <Grid item xs={4}>
               <Paper className={classes.boxgridMid}>
               <GridDash title={" Most visited (24h)"} percentAmount={"-0.56%"} arrow={<ArrowDropDownIcon/>} icon={waxtIcon} iconName={"Token name"} amount={"$238,212.05"} chartIcon={chartredIcon}/>  
               </Paper>     
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.commingsec}>
                  <div className={classes.commingcontent}>
                    <Typography className={classes.commingtitle}>
                    Synchrony Classroom Coming Soon
                   </Typography>
                   <Typography className={classes.typograph} >
                         Learn more about analytics and blockchain
                   </Typography>
                   </div>
                   <img src={learnIcon} alt=""/>
             </Paper>    
            </Grid>
         </Grid> */}
               {/* Pool Table data*/}
               <FilterTabs get_latest_pools={get_latest_pools} filterSearch={filterSearch} setSearchText={setSearchText} dataRows={dataRows} />
               <TableGrid
                  columns={dataColumn}
                  rows={dataRows}
                  tablePagination={true}
                  accordion={true}
                  rowCollapse={true}
               />
               <WalletModal
                  open={openModal}
                  setOpen={setOpenModal}
                  setWalletConnected={setWalletConnected}
               />
            </Container>
            :
            <>
               {currentTab === "Transaction" ?
                  <TransactionHistory sarchTrigger={sarchTrigger} inputText={inputText} setInputText={setInputText} />
                  :
                  currentTab === "Discovery" ?
                     <Discovery setCurrentTab={setCurrentTab} sarchTrigger={sarchTrigger} inputText={inputText} setInputText={setInputText} />
                     :
                     currentTab === "Gallery" ?
                        <Gallery sarchTrigger={sarchTrigger} inputText={inputText} setInputText={setInputText} />
                        :
                        <CompareData />
               }
            </>
         }
      </Layout>
   );
};

export default Dashboard;
