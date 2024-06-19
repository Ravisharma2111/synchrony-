import React, { useState } from "react";
import useStyles from "./styles";
import { Button, Grid } from "@material-ui/core";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import TextField from '@material-ui/core/TextField';
import Autocomplete from "@material-ui/lab/Autocomplete";

const FilterTabs = ({
  get_latest_pools,
  filterSearch,
  setSearchText,
  dataRows
}) => {
  const classes = useStyles();
  const [searchFilter, setSearchFilterdata] = useState('All');
  const setSearchFilter = (val) => {
    get_latest_pools(val);
    setSearchFilterdata(val);
  }

  return (
    <>
      <div className={classes.btnGroupWithserach}>
        <Grid container>
          {/* <Grid item xs={12} sm={8}>
            <div className={classes.btnGroupLeft}>
				<Button className={searchFilter === 'All' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('All')}}>All</Button>
                <Button className={searchFilter === 'Lending' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('Lending')}}>Lending</Button>
                <Button className={searchFilter === 'Dexes' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('Dexes')}}>Dexes</Button> 
                <Button className={searchFilter === 'Derivatives' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('Derivatives')}}>Derivatives</Button> 
                <Button className={searchFilter === 'Payments' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('Payments')}}>Payments</Button> 
                <Button className={searchFilter === 'Assets' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('Assets')}}>Assets</Button>
            </div>
            </Grid> */}
          <Grid item xs={12} sm={4}>
            <div className={classes.btnSearch}>
              <div className={classes.PoolsSec}>
                <div className={classes.searchPools}>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    onChange={filterSearch}
                    options={dataRows.map((option: any) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search"
                        margin="normal"
                        variant="outlined"
                        onChange={e => setSearchText(e.target.value)}
                        InputProps={{ ...params.InputProps, type: 'Search' }}
                      />
                    )}
                  />
                  <SearchSharpIcon />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FilterTabs;

