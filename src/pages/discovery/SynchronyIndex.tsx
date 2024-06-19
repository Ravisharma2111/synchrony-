import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import TableGrid from "../../components/Grid/Table";
import useStyles from "../dashboard/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EqualizerIcon from '@mui/icons-material/Equalizer';

function SynchronyIndex({ toppoolscolumns, toppoolsrows }) {
    const classes = useStyles();
    const [tableToggle, setTableToggle] = useState(true);

    return (
        <Grid container className={classes.synTableIndex}>
            {/* <Typography className={classes.subtitle} style={{ marginTop:0, }}>
        <EqualizerIcon className="discoveryiconn"/> Synchrony Index <ExpandMoreIcon onClick={()=>{setTableToggle(!tableToggle)}} className={tableToggle === false ?  "arrow--toggle" : "arrow--toggle open"}/>
        </Typography> */}
            <div className={classes.headingBox}>
                <div className="leftsidedata">
                    <EqualizerIcon className="discoveryiconn" />
                    <Typography className="subtitle" style={{ marginTop: 0, }}>
                        Synchrony Index
                    </Typography>
                </div>
                <div className="rightsidedata">
                    <Typography className="totalValue" style={{ marginTop: 0, }}>
                        Total Amount: 0.0
                    </Typography>
                    <ExpandMoreIcon 
                        onClick={() => setTableToggle(!tableToggle)} 
                        className={tableToggle === false ? "arrow--toggle" : "arrow--toggle open"} 
                    />
                </div>
            </div>
            <Grid item xs={12} className={tableToggle === false ? classes.toggleTable : classes.TableAnimate}>
                <TableGrid
                    columns={toppoolscolumns}
                    rows={toppoolsrows}
                    tablePagination={true}
                />
            </Grid>
        </Grid>
    );
};

export default SynchronyIndex;
