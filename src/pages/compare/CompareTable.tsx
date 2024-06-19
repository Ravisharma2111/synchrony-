import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import useStyles from "./styles"; 
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import {DeleteOutline} from '@material-ui/icons';
import {comparecolumns} from '../../models/compare';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { muiltpleinitialGraphData } from "../../models/compare";
import { apiServices } from "../../api/apiServices";
import { format } from 'date-fns';
import { convertTZ } from "../../utils";
const CompareTable = ({setChartData,setDataRow,graphArray}) => {
   const classes = useStyles();
   let oldColumn = comparecolumns;
   
   const[,setColumns] = useState(comparecolumns);
   const[editColumn,setEditColumns] = useState(false);
   const[walletAddr,setWalletAddr] = useState('');
   
   const[dataRows,setDataRows] = useState([]);
   const setEditColumn = (status) =>{
	   if(status === true){
	   let newColumn = ['','blank'];
		oldColumn.push(newColumn);
		setColumns(oldColumn);
	   }else{
		   oldColumn.pop();
		 }
	   setEditColumns(status);
	   setColumns(oldColumn);
	   
   }
   const handleAction = (e,index)=>{
      e.preventDefault();
      let array:any = [...dataRows];
      if(array.length < 0){ return false;}
      array.splice(index,1);
      setDataRows(array);
      setDataRow(array);
      array.forEach(async function(element,index){
        let data = await getGraphData(element.address,index);
        if(array.length === (index+1)){
            setChartData(data);
            //console.log("data",data);
        }
      });
      if(array.length === 0){
        for(let i = 0; i<3; i++){
            graphArray.datasets[i].data = [];
        } 
        setChartData(graphArray);
      }
   }
   const addWallet = async ()=>{
      if(dataRows.length >= 3){ alert("Already added maximum limit"); return false;}
      if(walletAddr.trim() === ""){ return false;}
      let array:any = [];   
      for(let i = 0; i < dataRows.length; i++){
         array.push({address:dataRows[i]['address'],total:dataRows[i]['total']});      
      }
      array.push({address:walletAddr,total:0});
      
      setDataRows(array);
      setDataRow(array);
      
      array.forEach(async function(element,index){
            let data = await getGraphData(element.address,index);
            if(array.length === (index+1)){
                setChartData(data);
                //console.log("data",data);
            }
            
      });
      setWalletAddr('');  
   }
   const getGraphData = async(address,index)=>{
   
        let res = await apiServices.get_graph_data(address);
        let dataArray = {...muiltpleinitialGraphData};
        
        if(res !== false && res.status !== false){
            let dataResponse = res.results.reverse();
            if(dataResponse.length === 0){ alert("Please check token "+ address); return dataArray;}
            let graphDataSet = [] as any;
            let graphLabels = [] as any;
            for(let i =0; i<dataResponse.length;i++){
                   let updatedAt = new Date(dataResponse[i].label); 
                   let tokensValue = dataResponse[i].amount.toFixed(2);
                   graphDataSet.push({ x: updatedAt.getTime(), y: tokensValue});
                   graphLabels.push(format(convertTZ(new Date(updatedAt.getTime())), 'MMM dd yyyy'))
                  }
                  if(dataArray['labels'].length < graphLabels.length){
                    dataArray['labels'] = graphLabels;
                  }
                  
                  dataArray.datasets[index].labels = graphLabels;
                  dataArray.datasets[index].data = graphDataSet;
                  return dataArray;
          }else{
              return dataArray;
          }
   
       
      
    } 
  
   return (
     <>
        <Typography className={classes.subtitle} variant="h2">
        My basket
        </Typography>
         <div className={classes.tabinnercontent}>
          <div className={classes.compareTable}>
            <Grid container>
              <Grid item xs={6}>
               <Typography>
                  List
               </Typography>
              </Grid>
              <Grid  item xs={6} className={classes.compareBtnGroup}>
			 {editColumn === false ? 
			   <div className={classes.btnEditTB}>
				<Button variant="contained" onClick={()=>{setEditColumn(true)}}><EditIcon/>Add Wallet</Button>
               </div>
			   :
               <div className={classes.btnsBuilders}>
                          <input type="text" onChange={(e)=>{setWalletAddr(e.target.value)}} className={classes.walletAddr} value={walletAddr}/>
                          <Button className="transparent_buil_btn" variant="contained" color="primary" onClick={()=>{setEditColumn(false)}}>Cancel</Button>
                          <Button className="buil_btn" variant="contained" color="primary" onClick={()=>{addWallet()}}>Save</Button>
                      </div>
			 }
              </Grid>
            </Grid>
          </div>
          </div>


        <div className={classes.compareTabledata}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className={classes.comparelist_table}>
                <TableHead>
                <TableRow>
                    <TableCell>Wallet Address</TableCell>
                    <TableCell >Total</TableCell>
                    <TableCell >Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {dataRows.map((obj,index) => (
                    <TableRow  key={index}      
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">{obj['address']}</TableCell>
                    <TableCell>{obj['total']}</TableCell>
                    <TableCell><DeleteOutline onClick={(e)=>{handleAction(e,index)}} /></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </div>
      </>
  );
};

export default CompareTable;
