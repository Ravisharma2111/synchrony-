import React, { useEffect, useState } from "react";
import useStyles from "../dashboard/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Graphs from "../../components/Grid/graphs";
import { optionsLine } from '../../models/connected';
import { initialGraphData } from '../../models/compare';
import { format } from 'date-fns';
import { convertTZ } from "../../utils";
import { apiServices } from "../../api/apiServices";
import Loader from "../../assets/icon/spinnerr.svg";

const TokenAddressGraph = ({ row, isOpen = false }) => {
  const classes = useStyles();
  const [activeTab] = useState("chart24");
  const [graphData, setGraphData]: any = useState(initialGraphData)
  const [one, setOne] = useState(true);
  const [isLoading, setLoading] = useState(true)

  const updateChartData = (dataset: any, timeFrame?: string | null | undefined) => {
    const graphDataSet = [] as any
    const graphLabels = [] as any
    const $dataset = (dataset || []);
    const activeKey = timeFrame;

    $dataset.forEach(o => {
      const [timestamp, price] = o
      graphDataSet.push({ x: parseInt(timestamp), y: price });
      graphLabels.push(format(convertTZ(new Date(parseInt(timestamp))), timeFrame === 'chart24' ? 'haaa' : 'MMM dd'))
    })

    const newGraphData = { ...graphData }
    newGraphData['activeLabel'] = activeKey === "" ? "chart24" : activeKey;
    newGraphData.labels = graphLabels
    newGraphData.datasets[0].data = graphDataSet
    setGraphData(newGraphData);
  }

  const chartPair = {
    chart24: '24h',
    chart: '7d',
    chart30: '30d',
  }

  useEffect(() => {
    if (!isOpen) return; // do nothing, only fetch when opened
    one && setChartData(activeTab);
    setOne(false)
  }, [isOpen]);

  const setChartData = async (key) => {
    let res = await apiServices.getChartHistory(row.coingeckoId, chartPair[key]);
    if (res !== false) {
      updateChartData(res || [], key)
      setLoading(false);
    }
  }

  return (
    <>{row &&
      <div className="TableAcrodSec">
        <div className={classes.root} style={{ paddingTop: 0, }}>
          <div className={classes.firstBuilderbox}>
            <div className='tabinnercontent tabTableInner' style={{ marginTop: 0, }}>
              <Grid container>
                <Grid item xs={12} className={classes.tableDetailToggle} >
                  <Paper>
                    <div className={classes.valuetogglehead}>{row.name} &nbsp; Price Chart </div>
                    <div className={classes.graphImg}>
                      <div className={activeTab === 'chart24' ? 'hidegraph' : 'showgraph'}>
                        {isLoading ? <img className={classes.spinclass} src={Loader}></img> :
                          <Graphs 
                            type={'Line'} 
                            data={graphData} 
                            height={80} 
                            options={optionsLine} 
                            setChartData={setChartData} 
                            chartData={activeTab} 
                          />
                        }
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    }</>
  );
};


export default TokenAddressGraph;
