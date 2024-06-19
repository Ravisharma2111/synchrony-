import React from 'react';
import useStyles from "../pages/dashboard/styles";
// import ReactECharts from 'echarts-for-react';
import {
  AreaChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function LineEGraph({ graphData = [], defaultHeight = 400 }) {
  const classes = useStyles();
  const data = [
    {
      amount: 2400,
    },

  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={defaultHeight}>
        <AreaChart
          data={graphData}

          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5
          }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4c4981" stopOpacity={0.5} />
              <stop offset="70%" stopColor="#4c4981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip wrapperStyle={{ color: 'black' }}
            labelStyle={{ color: "black", fontSize: '12px' }}
            itemStyle={{ color: "#ccc", fontSize: '12px' }}
          />
          <CartesianGrid horizontal={false} vertical={false} />
          <XAxis style={{ fontSize: '10px', fill: 'rgba(255, 255, 255, 0.42)' }} dataKey="name" className={classes.lineChartXaxis} />
          <YAxis style={{ fontSize: '10px', fill: 'rgba(255, 255, 255, 0.42)' }} />
          <Area type="monotone" dataKey="amount" stroke="#4a4de6" fill="url(#colorUv)" />
          {/* <Line
            type="monotone"
            dataKey="amount"
            stroke="#4a4de6"
            fill="#4a4de6"
            strokeWidth={2}
            dot={false}
          /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
