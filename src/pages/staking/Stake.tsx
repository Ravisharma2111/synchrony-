import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import useStyles from "./Style";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StakeFaq from './StakeFaq';
import StakeConnect from './StakeConnect';
import { Connection, PublicKey } from '@solana/web3.js';
import { getStakeData, Numberu64 } from '../../staking';
import stakingIcon from "../../assets/img/castorr-stake.png";
import { useWallet } from "@solana/wallet-adapter-react";
import { apiServices } from "../../api/apiServices";

const Stake = (props: RouteComponentProps) => {
    const classes = useStyles();
    const [inputVal, setInputVal] = useState('');
    const [inputValNoDecimals, setInputValNoDecimals] = useState('');
    const [stakeActive, setStakeActive] = useState(false);
    const [stakingData, setStakingData] = useState({ amount: 0, date: '' });
    const { connected, publicKey } = useWallet();
    const [scyBalance, setScyBalance] = useState(0);

    const handleStakeDataAction = async (type = 0) => {
        if (!publicKey) { return false; }
        if (type === 0) {
            setInputVal('');
            setStakingData({ amount: 0, date: '' });
            return false;
        }
        let connection = new Connection("https://api.mainnet-beta.solana.com");
        let pk = new PublicKey(publicKey + "");
        try {
            let stakeData = await getStakeData(connection, pk);
            setStakingData({ amount: stakeData.amount, date: stakeData.date });
            setInputVal(stakeData.amount);
            // props.setStakingData(stakeData);
        } catch (e) {
            // setLoaderOpen(false);
            console.log("error coming", e)
            // setshowError(e.message);
        }

    }
    useEffect(() => {
        const setBalance = async () => {
            if (connected === true) {
                let symbolKey = "SCY";
                let data = await apiServices.getTokenAccountsByOwner(publicKey + "");
                (data.results.data.assets).forEach(element => {
                    if (element.hasOwnProperty("name") && element.name.hasOwnProperty("symbol") && element.name.symbol === symbolKey) {
                        setScyBalance(element.usdAmount2);
                    }
                });
            }
        }
        
        setBalance();
    }, [connected, publicKey]);

    function handleSetInputValNoDecimals(input) {
        var result = parseFloat(input);
        result = result * (10 ** 9);
        setInputValNoDecimals(result.toString());
    }
    return (
        <div className={classes.root} >
            <Header {...props} />
            <Container>
                <Grid item xs={12}>
                    <div className={classes.stakeBox}>
                        <div >
                            <Typography className={classes.staketitle} >Stake Synchrony </Typography>
                            <Typography className={classes.staketypograph} >
                                Stake SCY to get access to our community and features
                            </Typography>
                        </div>
                        <div className={classes.stakeTab}>
                            <Button className={stakeActive === false ? "tabConnectBtn active" : "tabConnectBtn"} onClick={() => { setStakeActive(false); handleStakeDataAction(0); }}>Stake</Button>
                            <Button className={stakeActive === true ? "tabConnectBtn active" : "tabConnectBtn"} onClick={() => { setStakeActive(true); handleStakeDataAction(1); }}>Unstake</Button>
                        </div>
                        {stakeActive === false ?
                            <div className={classes.stakeTabContent}>
                                <div className={classes.stakeTabData}>
                                    <div className={classes.stakeTabDataOne}>
                                        <Button className={classes.tabConnectBtn1}>SCY</Button>
                                        <Typography className={classes.textTypograph} >
                                            <input
                                                type="text"
                                                placeholder="0.0"
                                                className={classes.stakeInput}
                                                value={inputVal}
                                                onChange={(e) => { setInputVal(e.target.value); handleSetInputValNoDecimals(e.target.value) }}
                                            />  </Typography>
                                    </div>
                                    <Typography className={classes.typographlight} > Balance: {scyBalance} SCY </Typography>
                                </div>
                                <StakeConnect setStakingData={setStakingData} setInputVal={setInputVal} inputVal={inputValNoDecimals} stakeActive={stakeActive} />
                                {/* <Button className={classes.connectWalletBtn}> <AccountBalanceWalletIcon className={classes.iconWallet}/> Connect</Button> */}

                                {/* <div className={classes.exchangeData}>s
                            <Typography className={classes.typographlight} > You will receive</Typography>
                            <Typography className={classes.typographlight} > 0 SCY </Typography>
                        </div> */}
                                {stakingData.date !== "" &&
                                    <>
                                        <div className={classes.exchangeData1}>
                                            <Typography className={classes.typographlight} > Staking Started</Typography>
                                            <Typography className={classes.typographlight} > {stakingData.date !== "" && stakingData.date} </Typography>
                                        </div>
                                        <div className={classes.exchangeData1}>
                                            <Typography className={classes.typographlight} > Staked Amount</Typography>
                                            <Typography className={classes.typographlight} > {stakingData.date !== "" && stakingData.amount} </Typography>
                                        </div></>
                                }
                            </div> :
                            <>
                                <div className={classes.stakeTabContent}>
                                    <div className={classes.stakeTabData}>
                                        <div className={classes.stakeTabDataOne}>
                                            <Button className={classes.tabConnectBtn1}>SCY</Button>
                                            <Typography className={classes.textTypograph} >
                                                <input
                                                    type="text"
                                                    placeholder="0.0"
                                                    className={classes.stakeInput}
                                                    value={inputVal}
                                                    readOnly={true}
                                                    onChange={(e) => { setInputVal(e.target.value); handleSetInputValNoDecimals(e.target.value) }}
                                                />
                                            </Typography>
                                        </div>
                                        <Typography className={classes.typographlight} > Balance: {scyBalance} SCY </Typography>
                                    </div>
                                    <StakeConnect setStakingData={setStakingData} setInputVal={setInputVal} inputVal={inputValNoDecimals} stakeActive={stakeActive} />
                                    {/* <Button className={classes.connectWalletBtn}> <AccountBalanceWalletIcon className={classes.iconWallet}/> Connect</Button> */}
                                    {stakingData.date !== "" &&
                                        <>
                                            <div className={classes.exchangeData1}>
                                                <Typography className={classes.typographlight} > Staking Started</Typography>
                                                <Typography className={classes.typographlight} > {stakingData.date !== "" && stakingData.date} </Typography>
                                            </div>
                                            <div className={classes.exchangeData1}>
                                                <Typography className={classes.typographlight} > Staked Amount</Typography>
                                                <Typography className={classes.typographlight} > {stakingData.date !== "" && stakingData.amount} </Typography>
                                            </div>
                                            <div className={classes.exchangeData1}>
                                                <Typography className={classes.typographlight} > Early Withdrawal Fee</Typography>
                                                <Typography className={classes.typographlight} > 5% </Typography>
                                            </div></>

                                    }
                                    <div className={classes.exchangeData}>
                                        {/* <Typography className={classes.typographlight} > Early exit fee</Typography>
                            <Typography className={classes.typographlight} > 1 mSOL ≈ 1.02945 SOL </Typography> */}
                                    </div>
                                </div>
                            </>}
                        {/* <div className={classes.stakingImage}>
                        <img src={stakingIcon} alt='icon'/>
                     </div>    */}
                        <Typography className={classes.faqHeadings} >FAQ </Typography>
                        <StakeFaq title={"What is SCY?"}
                            data={"SCY is the Synchrony native token that allows for users to interact with the Synchrony platform, participate in the community and get access to private knowledge channels."}
                        />
                        <StakeFaq title={"What is SCY staking?"}
                            data={"Without going too in depth, staking essentially means you are taking your SCY tokens and placing them on our platform to earn rewards and gain access to our various features and community functions."}
                        />
                        <StakeFaq title={"Can I unstake at any time?"}
                            data={"You can unstake at any time, but if you unstake before the 30 day mark you will be charged a 5% early withdrawal fee. "}
                        />
                        <StakeFaq title={"How do I claim my accumulated tokens?"}
                            data={"You can claim your accumulated tokens by unstaking your tokens or by staking more tokens. When you stake more tokens you add your rewarded tokens to your staked amount. This new staked amount will earn APY and will also reset the 30 day timer. "}
                        />
                        <StakeFaq title={"Are there any fees?"}
                            data={"There is a 5% early withdrawal penalty if you unstake your tokens before you reach the 30 day mark. This timer resets any time you stake more tokens to unlock your rewards."}
                        />
                        {/* <StakeFaq title={"Which wallets are supported?"}
                    data={"We currently support Phantom, Slope and Solflare, but we are always working on new integrations and are actually in the process of adding Metamask!."}                    
                    /> */}
                        <StakeFaq title={"Is there an unbonding period or delay in receiving my tokens after I unstake?"}
                            data={"There is not a lock up period for you to unstake your tokens."}
                        />
                        <StakeFaq title={"What are the staking mechanisms?"}
                            data={"If you put tokens in it resets the timer but compounds again for you. Otherwise your rewards are held on the sideline."}
                        />
                    </div>
                </Grid>
            </Container>

            <Footer {...props} />
        </div>
    );
};

export default Stake;
