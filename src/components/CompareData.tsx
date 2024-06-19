import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import useStyles from "../pages/compare/styles"; 
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { optionsLine } from "../models/connected";
import Graphs from "./Grid/graphs";
import { muiltpleinitialGraphData } from "../models/compare";
import CompareTable from "../pages/compare/CompareTable";

const CompareData = () => {
   const classes = useStyles();
   const colors = ['#4A4DE6','#FF7B43','#4CAF50'];
   const [dataRows, setDataRows] = useState([]);
   const [chartData, setChartData] = useState(muiltpleinitialGraphData);
   const [graphArray] = useState(muiltpleinitialGraphData);
  
   return (
      <>
         {/* First Section*/}
         <Container fixed>
          <CompareTable setChartData={setChartData} setDataRow={setDataRows} graphArray={graphArray}/>   
        <div className={classes.graphPrice}>
         <div className={classes.tabinnercontent}>
          <div className={classes.compareTable}>
            <Grid container>
              <Grid item xs={6}>
               <Typography className={classes.pricehead}>
                  Balance 
               </Typography>
              </Grid>
              <Grid  item xs={6} className={classes.compareBtnGroup}>
               
              </Grid>
            </Grid>
          </div>
        
          <Graphs type={'Line'} data={chartData} height ={150} options={optionsLine} hideOption={true} graphArray/>
		   
         <div className={classes.chartFt}>
         {dataRows.map((obj,index) => (
             <span key={index}><i style={{background:colors[index]}}></i> {obj['address']}</span>
         ))}
            
            
          </div>
          </div>
          </div>
         </Container>
    </>
  );
};

export default CompareData;
