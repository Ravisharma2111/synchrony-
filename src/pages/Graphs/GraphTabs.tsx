import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyles from "../dashboard/styles";

const GraphTabs = ({ activeTab, setActiveTab }) => {
  const classes = useStyles();
  const graphData = { "chart24": '24h', "chart": '7d', "chart30": '30d' };
  
  return (
    <>
      <List className={classes.graphBtn}>
        {Object.keys(graphData).map((key: any, index: any) => (
          <ListItem className={activeTab === key ? 'active' : ''} key={index} onClick={() => { setActiveTab(key) }}>
            {graphData[key]}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GraphTabs;
