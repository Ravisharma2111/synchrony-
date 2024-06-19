import './App.css';
import React, { useMemo } from 'react';
import HttpsRedirect from 'react-https-redirect';
import { Provider } from 'react-redux';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
} from '@solana/wallet-adapter-wallets';
import store from './app/store';
import NotificationSystemStack from './components/NotificationSystemStack';
import BuilderList from './pages/builder/Builder';
import CompareList from './pages/compare/Compare';
import ConnectedPool from './pages/connected/Connected';
import Dashboard from './pages/dashboard/Dashboard';
import ErrorMessage from './pages/error/error';
import Farming from './pages/farming/farming';
import Gallery from './pages/Gallery/Gallery';
import InteractionDetails
  from './pages/interaction-details/interaction-details';
import Leaderboard from './pages/leaderboard/Leaderboard';
import Liquidity from './pages/liquidity/Liquidity';
import Login from './pages/login/Login';
import PoolDetails from './pages/pool-details/PoolDetails';
import PoolList from './pages/pool/Pool';
import Stake from './pages/staking/Stake';
import SwapPool from './pages/swap/swap';
import Wallet from './pages/wallet/Wallet';

function App() {
  const network = "https://solana-api.projectserum.com";
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getSolletWallet({ network: "htpps://api.mainnet-beta.solana.com" as WalletAdapterNetwork }),
    ],
    []
  );
  //   let web3 = require('@solana/web3.js');
  // let splToken = require('@solana/spl-token');

  // load up the first 32 bytes of the 64 byte array that was in our keyfile.json
  // // Only need the first 32 bytes so I use slice() just to make sure it's the correct length
  // let firstWinPrivKey = [172, 72, 243, 205, 110, 113, 123, 6, 18, 104, 125, 0, 69, 127, 93, 157, 177, 124, 59, 218, 5, 41, 149, 83, 32, 76, 203, 251, 3, 70, 72, 139]
  //     .slice(0,32);
  //   // print the length of the array so we know it is correct
  //   // the fromSeed() method requires 32 bytes

  //  console.log(firstWinPrivKey.length);
  //   let firstWinWallet = web3.Keypair.fromSeed(Uint8Array.from(firstWinPrivKey));
  //   console.log(firstWinWallet);
  //   console.log(firstWinWallet.publicKey.toString());



  /*let connection = new Connection("https://api.devnet.solana.com");
  let pk = new PublicKey("G1ypetYSrv2in2Rnx4RcFdRpEEw5R4xHjqq1zNPvCrhh"); //CBX..
  // getVaultData(connection);
  // getStakeData(connection, pk);
  //console.log("start here");
  let numero = new Numberu64(100000000);
  getAndCreateInstruction(numero,pk,connection); */// stake
  // getAndCreateUnstakeIx(pk,connection);// unstake
  // let n64 = new Numberu64(500);
  // let sIx = new createStakeInstruction({amount: n64});
  // console.log(`stakeIx ${sIx}`);
  // sIx.getInstruction();
  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>

        <Provider store={store}>
          <HttpsRedirect>
            <HashRouter>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/dashboard" />}
                />
                <PublicRoute path="/builder" component={BuilderList} />
                <PublicRoute path="/compare" component={CompareList} />
                <PublicRoute path="/dashboard" component={Dashboard} />
                <PublicRoute path="/connected-pool" component={ConnectedPool} />
                <PublicRoute path="/pools/:id" component={PoolDetails} />
                <PublicRoute path="/pools" component={PoolList} />
                <PublicRoute path="/login" component={Login} />
                <PublicRoute path="/leaderboard" component={Leaderboard} />
                <PublicRoute path="/liquidity" component={Liquidity} />
                <PublicRoute path="/swap" component={SwapPool} />
                <PublicRoute path="/farming" component={Farming} />
                <PublicRoute path="/error" component={ErrorMessage} />
                <PublicRoute path="/interaction-details" component={InteractionDetails} />
                <PublicRoute path="/wallet" component={Wallet} />
                <PublicRoute path="/gallery" component={Gallery} />
                <PublicRoute path="/staking" component={Stake} />
              </Switch>
            </HashRouter>
          </HttpsRedirect>
        </Provider>
        <NotificationSystemStack />
      </WalletProvider>
    </ConnectionProvider>
  );

  function PublicRoute({ component, ...rest }: any) {
    return (
      <Route
        {...rest}
        render={props =>
        (
          React.createElement(component, props)
        )
        }
      />
    );
  }
}

export default App;
