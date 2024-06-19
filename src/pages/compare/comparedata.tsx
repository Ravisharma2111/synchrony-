import React, { useEffect, useState } from 'react';
// import ReactECharts from 'echarts-for-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function CartGraphData({data=[]}) { 
   const[graphData,setGraphData]=useState([]);
   useEffect(()=>{
    setGraphData(data);
   },[data]);
    return (
      <div>
      <ResponsiveContainer width="100%" height={400}>
       <LineChart  
          data={graphData}
          
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
          <CartesianGrid horizontal={false} vertical={false}/>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />          
          <Line
            type="monotone"
            dataKey="address1"
            stroke="#DD425A"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="address2"
            stroke="#FF7B43"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="address3"
            stroke="#4CAF50"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
        </ResponsiveContainer>
      </div>
    )
}
