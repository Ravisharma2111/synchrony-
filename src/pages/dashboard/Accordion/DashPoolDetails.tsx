import React, { useEffect, useState } from "react";
import useStyles from "../styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Graphs from "../../../components/Grid/graphs";
import { optionsLine } from '../../../models/connected';
import { initialGraphData } from '../../../models/compare';
import KeyValue from "./KeyValue";
import { format } from 'date-fns';
import { convertTZ } from "../../../utils";
import { apiServices } from "../../../api/apiServices";
import Loader from "../../../assets/icon/spinnerr.svg";

export const DashPoolDetails = ({ row, isOpen = false }) => {
  const classes = useStyles();
  const [activeTab] = useState("chart24");
  const [graphData, setGraphData]: any = useState(initialGraphData)
  const [one, setOne] = useState(true);
  const [isLoading, setLoading] = useState(true)

  if (row.chart24 !== null && graphData['activeLabel'] === "chart24") {
    graphData['activeLabel'] = 'chart24';
    (row.chart24 || []).forEach(o => {
      const [timestamp, price] = o
      graphData['datasets'][0]['data'].push(price);
      graphData['labels'].push(timestamp);
    })
  }

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
    //console.log("newGraphData",newGraphData);
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
    let res = await apiServices.getChartHistory(row.gecko_id, chartPair[key]);

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
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <div className={classes.rigthside_indexbox}><h5>Key Stats</h5></div>
                    <KeyValue label={'Total Value'} value={`${row.total_value_locked} USD`} />
                    <KeyValue label={'Locked'} value={`Locked`} />
                    <KeyValue label={'24H'} value={`${row.price_24_h} %`} />
                  </Paper>
                  <Paper className={classes.paper} style={{ marginTop: 20, borderRadius: 4, }}>
                    <div className={classes.rigthside_indexbox}>
                      <h5>Ecosystem Links</h5>
                    </div>
                    <div className={classes.divederTwobox}>
                      {row && row.ecosystem && row.ecosystem.map((obj, key) => (
                        <Link href={obj.links} key={key}>{obj.name}</Link>
                      ))}
                    </div>
                  </Paper>
                  <Paper className={classes.paper} style={{ marginTop: 20, borderRadius: 4, }}>
                    <div className={classes.rigthside_indexbox}>
                      <h5>Smart Contracts</h5>
                    </div>
                    <div className={classes.divederTwobox} style={{ width: '100%', }}>
                      {row.contract_address}
                    </div>
                  </Paper>
                  <Paper className={classes.paper} style={{ marginTop: 20, borderRadius: 4, }}>
                    <div className={classes.rigthside_indexbox}>
                      <h5>White Papper</h5>
                    </div>
                    <div className={classes.divederTwobox} style={{ width: '100%', }}>
                      {row.white_paper}
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={9} className={classes.tableDetailToggle}>
                  <Paper>
                    <div className={classes.valuetogglehead}>{row.name} &nbsp; Price Chart </div>
                    <div className={classes.graphImg}>
                      <div className={activeTab === 'chart24' ? 'hidegraph' : 'showgraph'}>
                        {isLoading ? <img className={classes.spinclass} src={Loader}></img> :
                          <Graphs type={'Line'} data={graphData} options={optionsLine} setChartData={setChartData} chartData={activeTab} />
                        }
                      </div>
                    </div>
                  </Paper>
                  <div className={classes.stateKey}>
                    <h2>Description</h2>
                    <div dangerouslySetInnerHTML={{ __html: row.overview }} />
                  </div>
                  <div className={classes.stateKey}>
                    <h2>It's Like</h2>
                    <div dangerouslySetInnerHTML={{ __html: row.itslike }} />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    }</>
  );
};
