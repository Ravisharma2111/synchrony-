import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import useStyles from "./styles"; 
import CompareData from '../../components/CompareData';
const CompareList = (props: RouteComponentProps) => {
   const classes = useStyles();
  
  
  
   return (
      <div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         < CompareData />
         {/* <Container fixed>
          <CompareTable setChartData={setChartData} setDataRow={setDataRows} graphArray={graphArray}/>   
        <div className={classes.graphPrice}>
         <div className={classes.tabinnercontent}>
          <div className={classes.compareTable}>
            <Grid container>
              <Grid item xs={6}>
               <Typography className={classes.pricehead}>
                  Price <ArrowDropDownIcon/>
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
         </Container> */}
         <Footer {...props}/>
      </div>
  );
};

export default CompareList;
