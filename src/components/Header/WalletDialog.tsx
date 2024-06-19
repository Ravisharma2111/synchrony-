import React, { FC, useState, useEffect } from 'react';
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import useStyles from "../../pages/dashboard/styles";
import { apiServices } from '../../api/apiServices';
import Solana from '../../assets/pool/solana.svg';
require('@solana/wallet-adapter-react-ui/styles.css');

const LoginButton: FC = () => {
    const classes = useStyles();
    const [ acconutConnected, setAccountConnected ] = useState(false);
    const { connected, publicKey } = useWallet();
    useEffect(() => {
        if (connected === true && (localStorage.getItem("storedWallet") === null || localStorage.getItem("storedWallet") !== (publicKey + ""))) {
            localStorage.setItem("storedWallet", publicKey + "");
            apiServices.storeTokenStorage(publicKey + "", "wallet");
        }
        setAccountConnected(connected);
    }, [connected, publicKey]);

    return (
        <>
            <WalletModalProvider>
                {acconutConnected === false ?
                    <WalletMultiButton className={classes.connectBtn1}>
                        {connected ? publicKey + "" : <> <img src={Solana} alt="" className='walletmenu1' /> Solana</>}
                    </WalletMultiButton>
                    :
                    <WalletDisconnectButton className={classes.disconnectBtn1} />
                }
            </WalletModalProvider>
        </>
    );
};
export default LoginButton;
