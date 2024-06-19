import React, { useState, useEffect, useMemo } from "react";
import { RouteComponentProps } from "react-router-dom";
import chartIcon from '../../assets/icon/Chart.svg';
import ethereumIcon from '../../assets/icon/ethereum.svg';
import zcashIcon from '../../assets/icon/zcash.svg';
import dashDashIcon from '../../assets/icon/dash-dash.svg';
import vertcoinIcon from '../../assets/icon/vertcoin.svg';
import digibyteIcon from '../../assets/icon/digibyte.svg';
import litecoinIcon from '../../assets/icon/litecoin.svg';
import ethereumClassicIcon from '../../assets/icon/ethereum-classic.svg';
import bitcoinIcon from '../../assets/icon/bitcoin.svg';
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
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { toppoolscolumns, toppoolsrows, walletcolumns, walletrows, allColumnPool, syncColumnDataFn, columnDataFn, solfarmcolumns, mercurialcolumns } from '../../models/toppools';
import Select from '@material-ui/core/Select';
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import WalletModal from '../dashboard/walletModal';
import { raydiumAPI, orcaAPI, API_PATH } from '../../api/api';
import { PoolData } from './pooldata';
//import ComingSoon from '../../components/ComingSoon';

export const numberFormat = (value) =>
   new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD'
   }).format(value);

const PoolList = (props: RouteComponentProps) => {
   const classes = useStyles();
   const [filterType, setFilterType] = useState('SynchronyIndex');
   let defaultType = !localStorage.getItem("fromFollow") ? 'Orca' : 'UserGenerated';
   const [filter, setFilter] = useState(defaultType);
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
      if (filterName === "UserGenerated") {
         setFilter(filterName);
      } else { setFilter('Orca'); }
   };

   const [state2, setState2] = React.useState<{ age: string | number; name: string }>({
      age: '',
      name: 'hai',
   });

   const handleChange2 = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const name = event.target.name as keyof typeof state2;
      setState2({
         ...state2,
         [name]: event.target.value,
      });
   };

   const [openModal, setOpenModal] = useState(false);
   const [rows, setRowList] = useState([]);
   const columnData: any = useMemo(() => columnDataFn(), []);
   const syncColumnData: any = useMemo(() => syncColumnDataFn(), []);
   const [tableColumn, setTableColumn] = useState(columnData);
   // const [comingsoon, ] = useState(true);
   useEffect(() => {
      if (localStorage.getItem("fromFollow") === "Yes") {
         setFilterType("UserGenerated");
         setFilter("UserGenerated");
         localStorage.removeItem("fromFollow");
      }
      if (filter === 'Raydium') {
         fetch(raydiumAPI + 'pairs')
            .then(response => response.json())
            .then(data => {
               if (data !== "undefined") {
                  for (var i = 0; i < data.length; i++) {
                     data[i].volume_24h = data[i].volume_24h.toFixed(2);
                     data[i].fee_24h = data[i].fee_24h.toFixed(2);
                     data[i].volume_7d = data[i].volume_7d.toFixed(2);
                     data[i].liquidity = data[i].liquidity.toFixed(2);
                     data[i].accordionData = <PoolData />;
                  }
                  setRowList(data);
                  setTableColumn(columnData);
               }
            });
      } else if (filter === 'UserGenerated') {
         fetch(API_PATH + 'poolapi.php?pool_type=synchrony')
            .then(response => response.json())
            .then(data => {
               if (data !== "undefined") {
                  let commonRowsData: any = [];
                  for (var i = 0; i < data.length; i++) {
                     commonRowsData.push({
                        name: data[i].pool_name,
                        "volume": '$5,425,960.21',
                        "topassets":
                           <>
                              <img src={ethereumIcon} className="coinIcons" alt="" />
                              <img src={zcashIcon} className="coinIcons" alt="" />
                              <img src={dashDashIcon} className="coinIcons" alt="" />
                              <img src={vertcoinIcon} className="coinIcons" alt="" />
                              <img src={digibyteIcon} className="coinIcons" alt="" />
                              <img src={litecoinIcon} className="coinIcons" alt="" />
                              <img src={ethereumClassicIcon} className="coinIcons" alt="" />
                              <img src={bitcoinIcon} className="coinIcons" alt="" />
                              <span className="moreValue">+3</span>
                           </>,
                        "alltime": '12.27',
                        "hours": 2.65,
                        "lastdays": <img src={chartIcon} alt="" />,
                        "accordionData": <PoolData />
                     });
                  }
                  setRowList(commonRowsData);
                  //setTableColumn(syncColumnData); mercurial
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
      } else if (filter === 'mercurial') {
         fetch('https://mercurial.finance/api/pools')
            .then(response => response.json())
            .then(data => {
               //console.log("data",data);	
               let commonRowsData: any = [];
               for (let i in data) {
                  data[i]['tvl'] = parseFloat(`${data[i].tvl}`).toFixed(2);
                  data[i]['virtualPrice'] = parseFloat(`${data[i].virtualPrice}`).toFixed(2);
                  data[i]['apy'] = parseFloat(`${data[i]['apy']['total']}`).toFixed(2);
                  data[i]['accordionData'] = <PoolData />;
                  commonRowsData.push(data[i]);
               }
               setRowList(commonRowsData);
               setTableColumn(mercurialcolumns);
            });
      } else if (filter === 'solfarm') {
         fetch('https://api.solfarm.io/pairs?pair=WOOF-RAY,SYP-USDC,SYP-RAY,SYP-SOL,LIQ-USDC,LIQ-RAY,MNDE-mSOL,mSOL-USDC,mSOL-USDT,mSOL-RAY,ETH-mSOL,BTC-mSOL,LARIX-RAY,LARIX-USDC,GRAPE-USDC,ATLAS-USDC,POLIS-USDC,ATLAS-RAY,POLIS-RAY,TULIP-USDC,RAY-USDT,RAY-USDC,RAY-SRM,RAY-SOL,RAY-ETH,MEDIA-USDC,SAMO-RAY,COPE-USDC,MER-USDC,ALEPH-USDC,LIKE-USDC,BOP-RAY,ROPE-USDC,SNY-USDC,SLRS-USDC,MNGO-USDC,RAY-SRM-DUAL,STEP-USDC,KIN-RAY,FIDA-RAY,OXY-RAY,MAPS-RAY,FRKT-SOL,whETH-SOL,whETH-USDC,weUNI-USDC,weSUSHI-USDC,SRM-USDC,STARS-USDC,weAXS-USDC,weDYDX-USDC,weSHIB-USDC,weSAND-USDC,weMANA-USDC,CAVE-USDC,GENE-USDC,GENE-RAY,SONAR-USDC,CWAR-USDC,DFL-USDC,APT-USDC,SHILL-USDC')
            .then(response => response.json())
            .then(data => {
               let commonRowsData: any = [];
               for (let i in data) {
                  data[i]['liquidity'] = parseFloat(`${data[i].liquidity}`).toFixed(2);
                  data[i]['price'] = parseFloat(`${data[i].price}`).toFixed(2);
                  data[i]['accordionData'] = <PoolData />;
                  commonRowsData.push(data[i]);
               }
               setRowList(commonRowsData);
               setTableColumn(solfarmcolumns);
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


                              //dataArray.push({name:data[obj].poolId,liquidity:liquidValue,volume_24h:`${data[obj].apy.day}`,volume_7d:`${Math.round((data[obj].apy.week) * 100).toFixed(1)} %`,fee_24h:`${Math.round((data[obj].apy.day) * 100).toFixed(1)} %`,accordionData: <PoolData/>});
                              dataArray.push({ name: data[obj].poolId, liquidity: liquidValue, volume_24h: parseFloat(`${data[obj].apy.day}`).toFixed(2), volume_7d: `${Math.round((data[obj].apy.week) * 100).toFixed(1)} %`, fee_24h: `${Math.round((data[obj].apy.day) * 100).toFixed(1)} %`, accordionData: <PoolData /> });
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

   return (
      <div className={classes.root} >
         <Header {...props} />


         {/* First Section*/}
         <Container fixed>

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
                                    checked={filterType === "SynchronyIndex" ? true : false}
                                    onChange={(e) => { handleChange('SynchronyIndex') }}
                                    name="checkedC"
                                 />
                              }
                              label="Synchrony Index"
                           />
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filterType === "LiquidityPool" ? true : false}
                                    onChange={(e) => { handleChange('LiquidityPool') }}
                                    name="checkedE"
                                 />
                              }
                              label="Liquidity Pool"
                           />

                           {/* <FormControlLabel
                  control={
                  <Checkbox
                  checked={filterType === "Wallet" ? true: false}
                  onChange={(e)=>{handleChange('Wallet')}}
                  name="checkedD"
                  />
                  }
                  label="Wallet"
               /> */}
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filterType === "UserGenerated" ? true : false}
                                    onChange={(e) => { handleChange('UserGenerated') }}
                                    name="checkedH"
                                 />
                              }
                              label="User Generated"
                           />
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filterType === "Lending" ? true : false}
                                    onChange={(e) => { handleChange('Lending') }}
                                    className={'disabled'}
                                    disabled={true}
                                    name="checkedF"
                                 />
                              }
                              label="Lending"
                           />

                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filterType === "Tokens" ? true : false}
                                    onChange={(e) => { handleChange('Tokens') }}
                                    className={'disabled'}
                                    disabled={true}
                                    name="checkedG"
                                 />
                              }
                              label="Tokens"
                           />



                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filterType === "MyDrafts" ? true : false}
                                    onChange={(e) => { handleChange('MyDrafts') }}
                                    className={'disabled'}
                                    disabled={true}
                                    name="checkedI"
                                 />
                              }
                              label="My Drafts"
                           />
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filterType === "MyPublishedProducts" ? true : false}
                                    onChange={(e) => { handleChange('MyPublishedProducts') }}
                                    className={'disabled'}
                                    disabled={true}
                                    name="checkedJ"
                                 />
                              }
                              label="My Published Products"
                           />
                        </FormGroup>
                     </div>
                     <div className={classes.filterbox}>
                        <Typography>
                           Performance
                        </Typography>
                        <FormControl className={classes.selectSidebar}>
                           <InputLabel >Highest return</InputLabel>
                           <Select
                              native
                              value={state2.age}
                              onChange={handleChange2}
                              inputProps={{
                                 name: 'age',
                              }}
                           >
                              <option value={10}>Highest return</option>
                           </Select>
                        </FormControl>

                        <FormControl className={classes.selectSidebar}>
                           <InputLabel>in the last 7 days</InputLabel>
                           <Select
                              native
                              value={state2.age}
                              onChange={handleChange2}
                              inputProps={{
                                 name: 'age',
                              }}
                           >
                              <option value={10}>Highest return</option>
                           </Select>
                        </FormControl>
                     </div>

                     <div className={classes.filterbox}>
                        <Typography>
                           Platform
                        </Typography>
                        <FormGroup row>
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filter === "All" ? true : false}
                                    onChange={() => { setFilter('All'); }}
                                    disabled={filterType === "LiquidityPool" ? false : true}
                                    name="All"
                                 />
                              }
                              label="All"
                           />

                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filter === "Orca" ? true : false}
                                    onChange={() => { setFilter('Orca'); }}
                                    disabled={filterType === "LiquidityPool" ? false : true}
                                    name="Orca"
                                 />
                              }
                              label="Orca"
                           />
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filter === "Raydium" ? true : false}
                                    disabled={filterType === "LiquidityPool" ? false : true}
                                    onChange={() => { setFilter('Raydium'); }}
                                    name="checkedC"
                                 />
                              }
                              label="Raydium"
                           />

                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filter === "Synchrony" ? true : false}
                                    disabled={filterType === "LiquidityPool" ? false : true}
                                    onChange={() => { setFilter('Synchrony'); }}
                                    name="Synchrony"
                                 />
                              }
                              label="Synchrony"
                           />
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filter === "solfarm" ? true : false}
                                    disabled={filterType === "LiquidityPool" ? false : true}
                                    onChange={() => { setFilter('solfarm'); }}
                                    name="solfarm"
                                 />
                              }
                              label="Solfarm"
                           />
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={filter === "mercurial" ? true : false}
                                    disabled={filterType === "LiquidityPool" ? false : true}
                                    onChange={() => { setFilter('mercurial'); }}
                                    name="mercurial"
                                 />
                              }
                              label="Mercurial"
                           />

                        </FormGroup>
                     </div>

                     <div className={classes.filterbox}>
                        <Typography>
                           Advanced Performance
                        </Typography>
                        <Grid container>
                           <Grid item xs={12}>
                              <FormControl className={classes.selectSidebar}>
                                 <InputLabel>Up</InputLabel>
                                 <Select
                                    native
                                    value={state2.age}
                                    onChange={handleChange2}
                                    inputProps={{
                                       name: 'age',
                                    }}
                                 >
                                    <option value={10}>Highest return</option>
                                 </Select>
                              </FormControl>
                           </Grid>
                           <Grid item xs={12} className={classes.calcSidebar} style={{ marginBottom: 10, }}>
                              <TextField id="" label="" defaultValue="14" />
                              <span>%</span>
                           </Grid>
                        </Grid>
                        <FormControl className={classes.selectSidebar}>
                           <InputLabel >in the last 7 days</InputLabel>
                           <Select
                              native
                              value={state2.age}
                              onChange={handleChange2}
                              inputProps={{
                                 name: 'age',
                              }}
                           >
                              <option value={10}>in the last 7 days</option>
                           </Select>
                        </FormControl>
                     </div>

                     <div className={classes.filterbox}>
                        <Typography>
                           Community Ranking
                        </Typography>
                        <div className={classes.ratingStar}>
                           <StarRateSharpIcon />
                           <StarRateSharpIcon />
                           <StarRateSharpIcon />
                           <StarRateSharpIcon />
                           <StarRateSharpIcon className={classes.unactive} />
                           <span>4+</span>
                        </div>
                     </div>
                  </Paper>
               </Grid>
               <Grid item xs={9} className={classes.PoolsSec}>
                  <div className={classes.browserPools}>
                     {filterType === "Wallet" ? <Typography component="h1" className="synHead">Wallet Profile</Typography> : <>{(filterType === "SynchronyIndex" || filterType === "UserGenerated") ? <Typography component="h1" className="synHead">Synchrony Index</Typography> : <Typography component="h1" className="synHead">{filter} Pools</Typography>}</>}

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

                     <TableGrid
                        columns={walletcolumns}
                        rows={walletrows}
                        tablePagination={false}
                        accordion={true}
                     />


                     :

                     <>{(filterType === "SynchronyIndex" || filterType === "UserGenerated") ?

                        <TableGrid
                           columns={toppoolscolumns}
                           rows={filterType === "SynchronyIndex" ? toppoolsrows : rows}
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

export default PoolList;
