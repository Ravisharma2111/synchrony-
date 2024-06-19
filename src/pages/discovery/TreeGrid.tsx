import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import TableGrid from "../../components/Grid/Table";
import useStyles from "../dashboard/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PoolName from "../../utils/PoolName";
import CopyToken from "./CopyToken";
import TokenAddressGraph from "./TokenAddressGraph";

function TreeGrid({ label, icon, resRow, dataKey = 'assets', amntKey = 'assetsTotal', columns, accordion = false }) {
    const classes = useStyles();
    const [tableToggle, setTableToggle] = useState(true);
    const [rows,]: any = useState([]);
    
    if (resRow && resRow.hasOwnProperty('assets')) {
        (resRow[dataKey]).forEach((element, index) => {
            element.mint = <CopyToken githubuserName={element.name && element.name['name']} token={element.pubkey} />;
            element.logoURL = <PoolName image={element.logo} />;
            if (accordion === true) {
                element.accordionData = <TokenAddressGraph row={element.name && element.name} />;
            }
            element.price = (parseFloat(element.price)).toFixed(2);
            element.uiAmount = (parseFloat(element.uiAmount)).toFixed(2);
            element.usdAmount = (parseFloat(element.usdAmount)).toFixed(2);
            rows[index] = (element);
        })
    }

    return (
        <>  {(resRow && resRow.hasOwnProperty(dataKey)) &&
            <Grid container className={classes.TableIndexSearchBox}>
                <div className={classes.headingBox}>
                    <div className="leftsidedata">
                        {icon}
                        <Typography className="subtitle" style={{ marginTop: 0, }}>
                            {label}
                        </Typography>
                    </div>
                    <div className="rightsidedata">
                        <Typography className="totalValue" style={{ marginTop: 0, }}>
                            Total Amount: ${resRow[amntKey].toFixed(2)}
                        </Typography>
                        <ExpandMoreIcon 
                            onClick={() => { setTableToggle(!tableToggle) }} 
                            className={tableToggle === false ? "arrow--toggle" : "arrow--toggle open"} 
                        />
                    </div>
                </div>
                <Grid item xs={12} className={classes.assetsTable}>
                    <Grid className={tableToggle === false ? classes.toggleTable : classes.TableAnimate}>
                        <TableGrid
                            columns={columns}
                            rows={rows}
                            tablePagination={true}
                            accordion={accordion}
                        />
                    </Grid>
                </Grid>
            </Grid>
        } </>
    );
};

export default TreeGrid; 
