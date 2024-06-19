import React, { useState } from "react";
import useStyles from "../dashboard/styles";
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import { Grid } from "@material-ui/core";
import TableGrid from '../../components/Grid/Table';
import SynchronyIndex from "./SynchronyIndex";
import BusinessIcon from '@mui/icons-material/Business';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BookIcon from '@mui/icons-material/Book';
import { tokenaccountscoinscolumns, tokenaccountscolumns, toppoolscolumns, toppoolsrows, walletcolumns, walletrows } from '../../models/toppools';
import TreeGrid from "./TreeGrid";

function DiscoveryTables({ resRows }) {
    const classes = useStyles();
    const [toggleactive, setToogleActive] = useState(false);

    return (
        <>
            <FormGroup className={classes.checkeddata}>
                <Switch onClick={() => setToogleActive(!toggleactive)} />
            </FormGroup>
            <Grid container className="anoytableMain">
                <Grid item xs={12} className={classes.anoyTable}>
                    <TableGrid
                        columns={walletcolumns}
                        rows={walletrows}
                        tablePagination={false}
                        accordion={true}
                    />
                </Grid>
            </Grid>
            {/* <SynchronyIndex toppoolscolumns={toppoolscolumns} toppoolsrows={toppoolsrows}/> */}
            <TreeGrid 
                label={"Assets"} 
                icon={<BusinessIcon className="discoveryiconn" />} 
                resRow={resRows} 
                columns={tokenaccountscoinscolumns} 
                accordion={true} 
            />
            {toggleactive === true &&
                <>
                    <TreeGrid 
                        label={"NFT"} 
                        icon={<ColorLensIcon 
                        className="discoveryiconn" />} 
                        dataKey={'nfts'} 
                        amntKey={'nftTotal'} 
                        resRow={resRows} 
                        columns={tokenaccountscolumns} 
                    />
                    <TreeGrid 
                        label={"Addresses"} 
                        icon={<BookIcon className="discoveryiconn" />} 
                        dataKey={'address'} 
                        amntKey={'addressTotal'} 
                        resRow={resRows} 
                        columns={tokenaccountscolumns} 
                    />
                </>
            }
        </>
    );
};

export default DiscoveryTables;
