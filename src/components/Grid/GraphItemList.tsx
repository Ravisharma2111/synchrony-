import React, { useState } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyles from "../../pages/dashboard/styles";
import { graphdata } from "../../models/connected";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const GraphItemList = ({ resRows }) => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
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
      <div className={toggle === false ? classes.portfolioList : classes.portfolioListOpen}>
        <List>
          {(graphdata.labels.length <= 3) ? graphdata.labels.map((key: any, index: any) => (
            <ListItem key={index}>
              <small className={classes.redbg} style={{ background: graphdata.datasets[0].backgroundColor[index] }}></small>{key}
            </ListItem>
          ))
            :
            graphdata.labels.map((key: any, index: number) => (
              <>{(index <= 2) &&
                <ListItem key={index}>
                  <small className={classes.redbg} style={{ background: graphdata.datasets[0].backgroundColor[index] }}></small>{key}
                </ListItem>
              }
              </>
            ))
          }
        </List>
        <List className="extra--item">
          <ListItem className={classes.arrowToggle} onClick={(e) => { setToggle(!toggle); }} key={`arrow`}><ExpandMoreIcon /> </ListItem>
          {(graphdata.labels.length > 3) && graphdata.labels.map((key: any, index: any) => (
            <>{(index > 2) &&
              <ListItem className={toggle === true ? classes.addtionalList : classes.addtionalListOpen} key={index}>
                <small className={classes.redbg} style={{ background: graphdata.datasets[0].backgroundColor[index] }}></small>{key}
              </ListItem>
            }</>
          ))}
        </List>
      </div>
    </>
  );
};

export default GraphItemList;
