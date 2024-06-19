import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { graphdata } from "../../models/connected";
import GraphItemList from "./GraphItemList";
const DoughnutGraphs = ({ resRows }) => {
  graphdata['labels'] = [];
  graphdata['datasets'][0]['data'] = [];
  resRows && resRows['assets'].forEach(function (obj, index) {
    if (obj['name']) {
      graphdata['labels'].push(obj['name']['name']);
      graphdata['datasets'][0]['data'].push(obj['usdAmount']);
    }
  });

  return (
    <>
      <Doughnut
        data={graphdata}
        type={"doughnut"}
        options={
          {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
                display: false,
              },
              title: {
                display: true,
              }
            }
          }
        }
      />
      <GraphItemList resRows={resRows} />
    </>
  );
};

export default DoughnutGraphs;
