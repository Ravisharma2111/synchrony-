import React, {
  useEffect,
  useState,
} from 'react';

import { Button } from 'antd';

import {
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import {
  Connection,
  PublicKey,
} from '@solana/web3.js';

import { apiServices } from '../../api/apiServices';
import useNotification from '../../application/notification/useNotification';
import {
  getAndCreateInstruction,
  getAndCreateUnstakeIx,
  getStakeData,
  Numberu64,
} from '../../staking';
import LoaderIcon from '../Gallery/Loader';
import useStyles from './Style';

require('@solana/wallet-adapter-react-ui/styles.css');

const StakeConnect = (props) => {
    const classes = useStyles();
    const [acconutConnected, setAccountConnected] = useState(false);
    const { wallet, connected, publicKey, sendTransaction, signMessage } = useWallet();
    const [loaderOpen, setLoaderOpen] = useState(false);
    const[showError,setshowError]=useState('');
    const[showSuccess,setshowSuccess]=useState('');
    
    const { connection } = useConnection();
    useEffect(() => {

        setAccountConnected(connected);
    }, [wallet, connected]);



    const handleStackAction = async () => {
        setLoaderOpen(true);
        let connection = new Connection("https://api.mainnet-beta.solana.com");
        let pk = new PublicKey(publicKey + "");
        let amount: Numberu64 = props.inputVal;
        try{

        
        let res = await getAndCreateInstruction(amount, pk, connection);
        console.log("result", res);
        const signature = await sendTransaction(res, connection);
        const sig = await connection.confirmTransaction(signature, 'processed');
        console.log("sig", sig);
        let stakeData = await getStakeData(connection,pk);
        props.setStakingData(stakeData);
        setshowError('');
        setshowSuccess('Successfully staking!');
        props.setInputVal('');
        setLoaderOpen(false);
        }catch(e:any){
            setLoaderOpen(false);
           // console.log("error coming",e)
            setshowError(e.message);
            const { logError } = useNotification.getState()
            logError(e.message)
        }

    }
    const beforestakingData = async ()=>{

    }
    const handleUnstakeAction = async () => {
        let connection = new Connection("https://api.mainnet-beta.solana.com");
        let pk = new PublicKey(publicKey + "");
        setLoaderOpen(true);
        try{

        let res = await getAndCreateUnstakeIx(pk, connection);
        
        const signature = await sendTransaction(res, connection);
        const sig = await connection.confirmTransaction(signature, 'processed');
        console.log("sig", sig);
        let stakeData = await getStakeData(connection,pk);
        props.setStakingData(stakeData);
        console.log('stakeData', stakeData);
        setshowError('');
        setshowSuccess('Successfully unstaking!');
        props.setInputVal('');
        setLoaderOpen(false);
        }catch(e:any){
            setLoaderOpen(false);
            //console.log("error coming",e.message)
            setshowError(e.message);
        }

    }
    // const onClick = useCallback(async () => {
    //     if (!publicKey) throw new WalletNotConnectedError();

    //     const transaction = new Transaction().add(
    //         SystemProgram.transfer({
    //             fromPubkey: publicKey,
    //             toPubkey: Keypair.generate().publicKey,
    //             lamports: 1,
    //         })
    //     );
    //     console.log(transaction)
    //     const signature = await sendTransaction(transaction, connection);

    //     await connection.confirmTransaction(signature, 'processed');
    // }, [publicKey, sendTransaction, connection]);


    const handleAction = async () => {
        if (connected === false) { return; }
        setLoaderOpen(true);
        let res = await apiServices.getTokenAccountsByOwner(publicKey);
        setLoaderOpen(false);
        if (res !== false && res.status !== false) {
            let dataResponse = res.results.data.assets;
            let tokenAccount = '';
            dataResponse.forEach(element => {
                if (element.name.symbol === "SCY") {
                    tokenAccount = element.pubkey;
                }
            });
            console.log("dataResponse", tokenAccount);
            //let transaction =  initVesting("Syncrony",publicKey,"Syncrony","Syncrony");

        }
    }
    return (
        <>
            <LoaderIcon loaderOpen={loaderOpen} />
            <WalletModalProvider>
                {acconutConnected === false ?
                    <WalletMultiButton className={classes.connectWalletBtn} />
                    :
                    props.stakeActive === false ?
                        <Button onClick={()=>{handleStackAction();setshowError(''); setshowSuccess('');}} className={classes.connectWalletBtn}>
                            Stake { ""}
                        </Button>
                        :
                        <Button onClick={()=>{handleUnstakeAction();setshowError(''); setshowSuccess('');}} className={classes.connectWalletBtn}>
                            Unstake { ""}
                        </Button>
                }
            </WalletModalProvider>
            {showError !== '' && <p className={classes.errorMessage}>{showError}</p> }
            {showSuccess !== '' && <p className={classes.successMessage}>{showSuccess}</p> }
            {/* <button onClick={onClick} disabled={!publicKey}>
            Send 1 lamport to a random address!
        </button> */}


        </>

    );
};
export default StakeConnect;
