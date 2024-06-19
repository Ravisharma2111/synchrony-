import { Container, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import TableGrid from "../../components/Grid/Table";
import useStyles from "../dashboard/styles";
import { transactionColumn } from '../../models/toppools';
import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "antd";
import LoaderIcon from "../Gallery/Loader";
import TokenLogo from "./TokenLogo";
import SearchForm from "../discovery/SearchForm";
import { apiServices } from "../../api/apiServices";
import TransactionHistoryToken from "./TransactionHistoryToken"

function TransactionHistory({ sarchTrigger, inputText, setInputText }) {
    const classes = useStyles();
    const { connected, publicKey } = useWallet();
    const [rows, setRows] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loaderOpen, setLoaderOpen] = useState(false);

    const searchTransaction = (key) => {
        setRows([]);
        setTimeout(function () { handleTransaction([]); }, 1000);

    }

    const handleTransaction = async (lastRecord) => {
        setLoaderOpen(true);
        let token = publicKey + "";
        if (inputText.trim() !== '') { token = inputText.trim(); }
        let data: any = lastRecord;
        let offset = data.length;
        if (token === "") { return false; }
        let res = await apiServices.getTransactionHistory(token, offset);
        if (res !== false) {
            setTotalRecords(res.results.total);
            let dataArray = res.results.data;
            for (var i = 0; i < dataArray.length; i++) {
                let decimal = dataArray[i].change['decimals'];
                let total = Math.pow(10, decimal);;
                let amt = dataArray[i].change.changeAmount;
                if (parseInt(amt) !== 0) {
                    let type = '';
                    if (dataArray[i].parsedInstruction.length > 0) {
                        for (var j = 0; j < dataArray[i].parsedInstruction.length; j++) {
                            if ((dataArray[i].parsedInstruction[j].type).includes('swap') || (dataArray[i].parsedInstruction[j].type).includes('ssSwap')) {
                                type = 'Swap';
                                break;
                            }
                        }
                        if (type === '') {
                            type = dataArray[i].signer[0] === dataArray[i].change.owner ? 'Send' : 'Receive';
                        }

                    } else {
                        type = dataArray[i].signer[0] === dataArray[i].change.owner ? 'Send' : 'Receive';
                    }

                    data.push({
                        txHash: <TokenLogo takenAddress={dataArray[i].change.tokenIcon} amount={amt} name={dataArray[i].change.symbol} />,
                        symbol: dataArray[i].change.symbol,
                        slot: dataArray[i].slot,
                        blockTime: apiServices.convertDate(dataArray[i].blockTime * 1000),
                        address: dataArray[i].change.address,
                        type: type,
                        changeamount: apiServices.numberWithCommas((amt / total).toFixed(2)),
                        //token: <TransactionHistoryToken token1 = {} token2={} />
                        token: <TransactionHistoryToken token1={dataArray[i].change.owner} token2={dataArray[i].signer[0]} txHash={dataArray[i].txHash} />
                    });
                }
            }
        }
        setRows(data);
        setLoaderOpen(false);
    }

    useEffect(() => {
        setRows([]);
        setTimeout(function () {
            handleTransaction([]);

        }, 500)
    }, [connected]);
    //console.log(rows);

    return (
        <div >
            <Container fixed>
                <LoaderIcon loaderOpen={loaderOpen} />
                <SearchForm inputText={inputText} setInputText={setInputText} handleAction={searchTransaction} />
                {/* First Section*/}
                {/* address */}
                <Typography className={classes.subtitleTrans} component={"h2"}>Transaction History</Typography>
                <Grid container className="TableIndex SearchBox">

                    <Grid item xs={12} >
                        <TableGrid
                            columns={transactionColumn}
                            rows={rows}
                            tablePagination={false}

                        />
                    </Grid>
                    {totalRecords > rows.length &&
                        <Button onClick={(e) => { handleTransaction([...rows]) }} className={classes.loadMore}>Load More</Button>
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default TransactionHistory;