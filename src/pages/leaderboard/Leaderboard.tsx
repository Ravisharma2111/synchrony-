import React, { useState, useEffect, useMemo } from "react";
import { RouteComponentProps } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import useStyles from "../dashboard/styles";
import Typography from '@material-ui/core/Typography';
import TableGrid from '../../components/Grid/Table';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { toppoolscolumns, toppoolsrows, allColumnPool, columnDataFn, syncColumnDataFn, leaderboardcolumns, leaderboardrows } from '../../models/toppools';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import WalletModal from '../dashboard/walletModal';
//import profile from '../../assets/img/Profile.png';
import { raydiumAPI, orcaAPI, API_PATH } from '../../api/api';
import { PoolData } from './details';

export const numberFormat = (value) =>
   new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD'
   }).format(value);

const Leaderboard = (props: RouteComponentProps) => {
   const classes = useStyles();
   const [filterType, setFilterType] = useState('Wallet');
   const top100Films = [
      { title: 'Suggestions', },
      { title: 'Raydium', },
      { title: 'xxxx', },
      { title: 'xxxx', },
      { title: 'xxxx', },
      { title: 'xxxx', },
   ];
   const handleChange = (filterName) => {
      setFilterType(filterName);
   };
   //const history = useHistory()
   const [openModal, setOpenModal] = useState(false);
   const [rows, setRowList] = useState([]);
   const [filter] = useState('Orca');
   const [, setNftGalleries] = useState([]);
   const columnData: any = useMemo(() => columnDataFn(), []);
   const syncColumnData: any = useMemo(() => syncColumnDataFn(), []);
   const [tableColumn, setTableColumn] = useState(columnData);

   useEffect(() => {
      fetch('https://galaxy.production.run.staratlas.one/nfts')
         .then(response => response.json())
         .then(data => { setNftGalleries(data); console.log("data", data); })
         .catch(err => { });
      if (filter === 'Raydium') {
         fetch(raydiumAPI + 'pairs')
            .then(response => response.json())
            .then(data => {
               if (data !== "undefined") {
                  setRowList(data);
                  setTableColumn(columnData);
               }
            });
      } else if (filter === 'Synchrony') {
         fetch(API_PATH + 'poolapi.php')
            .then(response => response.json())
            .then(data => {
               if (data !== "undefined") {
                  setRowList(data);
                  setTableColumn(syncColumnData);
               }
            });
      } else if (filter === 'All') {
         let commonRowsData: any = [];
         fetch(API_PATH + 'poolapi.php')
            .then(response => response.json())
            .then(data => {
               if (data !== "undefined") {
                  for (var i = 0; i < data.length; i++) {
                     commonRowsData.push({ name: data[i].pool_name, liquidity: data[i].liquidity, fee_24h: data[i].estfees, accordionData: <PoolData /> });
                  }
                  //
               }
               fetch(raydiumAPI + 'pairs')
                  .then(response => response.json())
                  .then(data => {
                     if (data !== "undefined") {
                        for (var i = 0; i < data.length; i++) {
                           commonRowsData.push({ name: data[i].name, liquidity: data[i].liquidity, fee_24h: data[i].fee_24h, accordionData: <PoolData /> });
                        }
                     }
                     fetch(raydiumAPI + `coin/price`)
                        .then(response => response.json())
                        .then(data => {
                           let priceArray: any = [];
                           priceArray = data;


                           fetch(orcaAPI + 'allPools')
                              .then(response => response.json())
                              .then(data => {
                                 if (data !== "undefined") {
                                    let liquidValue: any = "";
                                    let currencyPrice: any = "";
                                    let calCoinPrice: any = "";
                                    let calCoinPrice_scd: any = "";
                                    for (let obj in data) {

                                       currencyPrice = obj.split('/')

                                       for (let data in priceArray) {

                                          if (currencyPrice[0] === data) {

                                             calCoinPrice = priceArray[currencyPrice[0]]
                                             calCoinPrice_scd = priceArray[currencyPrice[1]]
                                          }
                                       }

                                       if (calCoinPrice !== "") {
                                          if (currencyPrice[0] === "USDT" || currencyPrice[1] === "USDC") {
                                             liquidValue = Math.round((calCoinPrice * (data[obj].tokenAAmount / 1000000)) + (data[obj].tokenBAmount / 1000000)).toLocaleString()
                                          }
                                          else {
                                             liquidValue = Math.round((calCoinPrice * (data[obj].tokenAAmount / 1000000)) + (data[obj].tokenBAmount / 1000000) * calCoinPrice_scd).toLocaleString()

                                          }
                                          if (liquidValue === "NaN") { liquidValue = 0; }
                                          commonRowsData.push({ name: data[obj].poolId, liquidity: liquidValue, fee_24h: `${Math.round((data[obj].apy.day) * 100).toFixed(1)} %`, accordionData: <PoolData /> });
                                       }
                                    }
                                    setRowList(commonRowsData);
                                    setTableColumn(allColumnPool);
                                 }
                              });
                        })
                  });
            });

      } else if (filter === 'Orca') {
         fetch(raydiumAPI + `coin/price`)
            .then(response => response.json())
            .then(data => {
               let priceArray: any = [];
               priceArray = data;


               fetch(orcaAPI + 'allPools')
                  .then(response => response.json())
                  .then(data => {
                     if (data !== "undefined") {
                        let dataArray: any = [];
                        let liquidValue: any = "";
                        let currencyPrice: any = "";
                        let calCoinPrice: any = "";
                        let calCoinPrice_scd: any = "";
                        for (let obj in data) {

                           currencyPrice = obj.split('/')

                           for (let data in priceArray) {

                              if (currencyPrice[0] === data) {

                                 calCoinPrice = priceArray[currencyPrice[0]]
                                 calCoinPrice_scd = priceArray[currencyPrice[1]]
                              }
                           }


                           if (calCoinPrice !== "") {

                              if (currencyPrice[0] === "USDT" || currencyPrice[1] === "USDC") {
                                 liquidValue = Math.round((calCoinPrice * (data[obj].tokenAAmount / 1000000)) + (data[obj].tokenBAmount / 1000000)).toLocaleString()
                              }
                              else {
                                 liquidValue = Math.round((calCoinPrice * (data[obj].tokenAAmount / 1000000)) + (data[obj].tokenBAmount / 1000000) * calCoinPrice_scd).toLocaleString()

                              }






                              if (liquidValue === "NaN") { liquidValue = 0; }
                              dataArray.push({ name: data[obj].poolId, liquidity: liquidValue, volume_24h: `${data[obj].apy.day}`, volume_7d: `${Math.round((data[obj].apy.week) * 100).toFixed(1)} %`, fee_24h: `${Math.round((data[obj].apy.day) * 100).toFixed(1)} %`, accordionData: <PoolData /> });
                           }
                        }
                        const columnsOrca: any = [
                           ['Name', 'name'],
                           ['Liquidity', 'liquidity'],
                           ['Est. Fees', 'volume_24h', {
                              options: {
                                 order: true,
                                 number: true,
                                 hideZero: true,
                              }

                           }],
                           ['24h', 'fee_24h', {
                              options: {
                                 order: true,
                                 number: true,
                                 hideZero: true,
                              }

                           }],
                           ['7D', 'volume_7d', {
                              options: {
                                 order: true,
                                 number: true,
                                 hideZero: true,
                              }

                           }
                           ],

                        ];
                        //console.log("dataArray",dataArray);
                        setRowList(dataArray);
                        setTableColumn(columnsOrca);
                     }
                  });
            })
      }

   }, [filter, columnData, syncColumnData]);
   //const setCurrentTab = ()=>{}
   return (
      <div className={classes.root} >
         <Header {...props} />

         {/* First Section*/}
         <Container fixed>
            {/*Profile Section*/}
            {/* <Paper className={classes.profileSection}>
                <div className={classes.dashboardwelcome}>
                 <div className={classes.profilePic}>
                     <img src={profile} alt="" />
                 </div>
                <div className={classes.profileContent} style={{paddingLeft:20, paddingRight:40,}}>
                      <Typography className={classes.title} variant="h1">
                          Med Amine
                          <span className="profileLable">#longTermHold</span> 
                          <img src={twitter} alt="" />
                       </Typography>
                       <Typography className={classes.typograph} >
                       Med is a full stack dev, and he specializes in app integration and quality assurance. Born and raised in Morocco, he earned his software engineering degree in France before getting Masters degree in data analytics in Poland.
having worked on multiple blockchain projects, Med brings a wealth of block-specific experience to Synchrony.
                       </Typography>
                       <div className="profileachiment">
                          <span>Net worth <b>$256</b></span>
                          <span>Achievements <b><img src={Icon1} alt=""/>
                          <img src={Icon2} alt=""/><img src={Icon3} alt=""/><img src={Icon4} alt=""/></b></span>
                          <span>Last TXR time <b>2 Hours</b></span>
                       </div>
                   </div>
                   <NftGallery setCurrentTab={setCurrentTab}/>   
            
                </div>
            </Paper> */}
            {/* Second Section*/}
            <Grid className={classes.poolsParent} container>
               <Grid item xs={3} className={classes.sideBarPool}>
                  <Typography className={classes.subtitle} variant="h2">
                     Browser
                  </Typography>
                  <Paper>
                     <Typography className={classes.headfilter}>
                        <span>
                           Filter
                        </span>
                     </Typography>
                     <div className={classes.filterbox}>
                        <Typography>
                           Type
                        </Typography>
                        <FormGroup row>
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filterType === "Wallet" ? true : false}
                                    onChange={(e) => { handleChange('Wallet') }}
                                    name="checkedD"
                                 />
                              }
                              label="Wallet"
                           />
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filterType === "Saved Wallets" ? true : false}
                                    onChange={(e) => { handleChange('Saved Wallets') }}
                                    name="checkedD"
                                 />
                              }
                              label="Saved Wallets"
                           />
                        </FormGroup>
                     </div>

                  </Paper>
               </Grid>
               <Grid item xs={9} className={classes.PoolsSec}>
                  <div className={classes.browserPools}>

                     <Typography component="h1" className="synHead">Leaderboard</Typography>
                     <div className={classes.searchPools}>

                        <Autocomplete
                           freeSolo
                           id="free-solo-2-demo"
                           disableClearable
                           options={top100Films.map((option) => option.title)}
                           renderInput={(params) => (
                              <TextField
                                 {...params}
                                 label="Search"
                                 margin="normal"
                                 variant="outlined"
                                 InputProps={{ ...params.InputProps, type: 'Search' }}
                              />
                           )}
                        />
                        <SearchSharpIcon />
                     </div>

                  </div>
                  {/*<Typography className={classes.subtitle} variant="h2">
        Featured Pools
        </Typography>
        <Grid className={classes.secondBox}>
            <Grid item xs={4}>
            <Paper className={classes.boxgrid}>
                   <Typography className={classes.typograph}>
                           Highest volume (24h)
                           <span className={classes.topprice}>
                               12.27%
                           </span>
                   </Typography>
                   <Typography className={classes.tname} >
                   <img src={comIcon} alt=""/>Token name
                   </Typography>
                   <Typography className={classes.total} >
                            $368,262.78 <img src={chartIcon} alt=""/>
                   </Typography>
                   </Paper>     
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.boxgrid}>
                    <Typography className={classes.typograph}>
                         Most visited (24h)
                         <span className={classes.topprice}>
                               12.27%
                           </span>
                   </Typography>
                   <Typography className={classes.tname}>
                    <img src={waxtIcon} alt=""/>Token name
                   </Typography>
                   <Typography className={classes.total} >
                          $238,212.05 <img src={chartredIcon} alt=""/>
                   </Typography>
                   </Paper>     
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.commingsec}>
                  <div className={classes.commingcontent}>
                    <Typography className={classes.commingtitle}>
                    Learn with Muon, Coming soon
                   </Typography>
                   <Typography className={classes.typograph} >
                         Amet minim mollit non deserunt est sit aliqua dolor do amet sint. 
                   </Typography>
                   </div>
                   <img src={learnIcon} alt=""/>
             </Paper>    
            </Grid>
         </Grid>*/}
                  {/* Pool Table data*/}

                  {/*<SearchToolBar title={'Pools'} filter={filter} setFilter={setFilter}/>*/}



                  {filterType === "Wallet" ?
                     <div className="leaderTable">
                        <TableGrid
                           columns={leaderboardcolumns}
                           rows={leaderboardrows}
                           tablePagination={false}
                           accordion={true}

                        />
                     </div>

                     :

                     <>{filterType === "SynchronyIndex" ?

                        <TableGrid
                           columns={toppoolscolumns}
                           rows={toppoolsrows}
                           tablePagination={false}
                        />
                        :
                        <TableGrid
                           columns={tableColumn}
                           rows={rows}
                           accordion={true}
                        />
                     }</>
                  }
               </Grid>
               <WalletModal
                  open={openModal}
                  setOpen={setOpenModal}
               />
            </Grid>
         </Container>

         <Footer {...props} />
      </div>
   );
};

export default Leaderboard;

