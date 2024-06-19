import { useState, useEffect } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from "../dashboard/styles";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { optionsLine } from '../../models/connected';
import DoughnutGraphs from '../../components/Grid/DoughnutGraphs';
import { useWallet } from "@solana/wallet-adapter-react";
import SearchForm from "./SearchForm";
import ProfileSection from "./ProfileSection";
import DiscoveryTables from "./DiscoveryTables";
import { apiServices } from "../../api/apiServices";
import Graphs from "../../components/Grid/graphs";
import { initialGraphData } from "../../models/compare";
import { format } from 'date-fns';
import { convertTZ } from "../../utils";
import LoaderIcon from "../Gallery/Loader";

function Discovery({ setCurrentTab: any, sarchTrigger, inputText, setInputText }) {
   const classes = useStyles();
   const [resRows, setResRows] = useState({ data: {}, graphData: {}, netWorth: 0 });
   const { connected, publicKey } = useWallet();
   const [transaction,] = useState([]);
   const [loaderOpen, setLoaderOpen] = useState(false);
   const [perLoaded, setPageLoaded] = useState(false);

   const getTokenAccountsByOwner = async (tokenKey) => {
      setLoaderOpen(true);
      let res = await apiServices.getTokenAccountsByOwner(tokenKey);

      if (res !== false && res.status !== false) {
         let dataResponse = res.results;
         const graphDataSet = [] as any;
         const graphLabels = [] as any;
         let data = dataResponse.graphData;

         for (let i = 0; i < data.length; i++) {
            let updatedAt = new Date(data[i].updatedAt); let tokensValue = data[i].tokensValue.toFixed(2);
            graphDataSet.push({ x: updatedAt.getTime(), y: tokensValue });
            graphLabels.push(format(convertTZ(new Date(updatedAt.getTime())), 'MMM dd'))
         }

         initialGraphData['labels'] = graphLabels;
         initialGraphData.datasets[0].data = graphDataSet;

         dataResponse.graphData = initialGraphData;
         dataResponse.netWorth = (res.results.data.assetsTotal).toFixed(2);
         setResRows(dataResponse);

         setTimeout(function () {
            setPageLoaded(true);
         }, 100);
      }
      setLoaderOpen(false);
   }

   useEffect(() => {
      let tokenkey = "";
      if (connected) { tokenkey = publicKey + ""; }
      if (inputText.trim() !== '') { tokenkey = inputText.trim(); }
      getTokenAccountsByOwner(tokenkey);
      setPageLoaded(false);
   }, [connected]);

   const setChartData = async (data) => {

   }

   return (
      <Container fixed>
         <LoaderIcon loaderOpen={loaderOpen} />
         {/* <ProfileSection transaction={transaction}  totalGraphBalance={resRows && resRows.netWorth} setLoaderOpen={setLoaderOpen}/> */}
         <SearchForm inputText={inputText} setInputText={setInputText} handleAction={getTokenAccountsByOwner} />
         <Grid className={classes.secondBox} container>
            <div className={classes.subtitleTopBar}>
               <Typography className="subtitle1" style={{ marginTop: 0, }}>
                  Wallet Analytics
               </Typography>
               {/* <SearchForm inputText={inputText} setInputText={setInputText} handleAction ={getTokenAccountsByOwner} /> */}
            </div>
            <Grid container>
               <Grid item xs={12} sm={8} className={classes.graphtitle}>
                  <Paper className={classes.boxgrid}>
                     <div className={classes.discoverypullLeft}>
                        <Typography className={classes.bttitle}>
                           History
                        </Typography>
                        <Typography className={classes.valuefolio} variant="h2">
                           ${resRows && resRows.netWorth}
                        </Typography>
                     </div>
                     <div className={classes.egraph}>
                        {(resRows && resRows['graphData'] && Object.keys(resRows['graphData']).length > 0) &&
                           <Graphs 
                              type={'Line'} 
                              data={resRows['graphData']} 
                              height={150} 
                              options={optionsLine} 
                              setChartData={setChartData} 
                              hideOption={true} 
                           />
                        }
                     </div>
                  </Paper>
               </Grid>
               <Grid item xs={12} sm={4} className={classes.portfolio}>
                  <Paper className={classes.boxgrid_portfolio1}>
                     <Typography className={classes.prottitle} variant="h3">
                        Portfolio Allocation
                     </Typography>
                     {(perLoaded && resRows && resRows['data'] && resRows['data'].hasOwnProperty("assets")) &&
                        <DoughnutGraphs
                           resRows={resRows['data']}
                        />
                     }
                  </Paper>
                  {/* <PortfolioAllocation inputText={inputText}  setInputText={setInputText}/> */}
               </Grid>
            </Grid>
         </Grid>
         <div className={classes.clearfix}></div>
         {resRows && resRows['data'] &&
            <DiscoveryTables resRows={resRows['data']} />
         }
      </Container>
   );
};

export default Discovery;
