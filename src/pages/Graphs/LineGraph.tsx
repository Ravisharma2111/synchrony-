import React from "react";
import useStyles from "../dashboard/styles";
import { Line } from 'react-chartjs-2';
import GraphTabs from "./GraphTabs";
import { Height } from "@material-ui/icons";

const LineGraphs = ({ data, activeTab, setActiveTab }) => {
  const classes = useStyles();

  const optionsLine = {
    scales: {
      y: {
        ticks: {
          maxTicksLimit: 5
        }
      },
      x: {
        ticks: {
          maxTicksLimit: ((activeTab === "chart24" || activeTab === "chart") ? 7 : 9)
        }
      },

    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        display: false,
      },
      title: {
        display: true,
      }
    },
  };

  return (
    <>
      <div className={classes.pullRight}>
        <GraphTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className={classes.clearfix}></div>
      <Line
        data={data}
        options={optionsLine}
        type={"line"}
      />
    </>
  );
};

export default LineGraphs;
