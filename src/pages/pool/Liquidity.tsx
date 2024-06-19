import { Button, Dialog, Grid } from "@material-ui/core";
import useStyles from "../dashboard/styles";
import { useState, useEffect, useMemo } from "react";
import { TokenListContainer, TokenListProvider } from "@solana/spl-token-registry";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { SnackbarProvider, useSnackbar } from "notistack";
import { WalletDialogProvider as MaterialUIWalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Signer, ConfirmOptions, Transaction, TransactionSignature, PublicKey } from "@solana/web3.js";
import LiquiditySwap from "../../customswap/Liquidity";
import { Provider } from "@project-serum/anchor";

export const LiquidityModal = ({ open, handleClose, handleClickOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.modelhead}>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        className={classes.modalDialogLiquiduty}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.mainswapboxed}>
          <MaterialUIWalletDialogProvider className={classes.swapCBox} style={{ backgroundColor: 'white', color: 'red' }}>
            <SnackbarProvider maxSnack={5} autoHideDuration={8000}>
              <AppInnerLiquidity />
            </SnackbarProvider>
          </MaterialUIWalletDialogProvider>
        </div>
      </Dialog>
    </div>
  );
};

function AppInnerLiquidity() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [tokenList, setTokenList] = useState<TokenListContainer | null>(null);
  const newWallet = useWallet();
  const { connected } = useWallet();
  const { connection: newConnection } = useConnection();
  const [transactionStatus, setTransactionstatus] = useState(0);
  const [provider, wallet] = useMemo(() => {
    const opts: ConfirmOptions = {
      preflightCommitment: "recent",
      commitment: "recent",
    };
    //const network = "https://solana-api.projectserum.com";
    const wallet = newWallet;
    //const connection = new Connection(network, opts.preflightCommitment);
    const provider = new NotifyingProvider(
      newConnection,
      newWallet,
      opts,
      (tx, err) => {
        if (err) {
          setTransactionstatus(1);
          enqueueSnackbar(`Error: ${err.toString()}`, {
            variant: "error",
          });
        } else {
          setTransactionstatus(2);
          enqueueSnackbar("Transaction sent", {
            variant: "success",
            action: (
              <Button
                color="inherit"
                component="a"
                target="_blank"
                rel="noopener"
                href={`https://explorer.solana.com/tx/${tx}`}
              >
                View on Solana Explorer
              </Button>
            ),
          });
        }
      }
    );
    return [provider, wallet];
  }, [enqueueSnackbar, newWallet, newConnection, setTransactionstatus]);

  useEffect(() => {
    new TokenListProvider().resolve().then(setTokenList);
  }, [setTokenList]);

  // Connect to the wallet.
  useEffect(() => {
    //console.log("wallet connected",connected);

  }, [wallet, connected, enqueueSnackbar]);

  return (

    <Grid className={classes.liquidityParent} container
    >

      {tokenList && <LiquiditySwap provider={provider} tokenList={tokenList} transactionStatus={transactionStatus} setTransactionstatus={setTransactionstatus} />}
    </Grid>

  );
}

// Cast wallet to AnchorWallet in order to be compatible with Anchor's Provider class
interface AnchorWallet {
  signTransaction(tx: Transaction): Promise<Transaction>;
  signAllTransactions(txs: Transaction[]): Promise<Transaction[]>;
  publicKey: PublicKey;
}

// Custom provider to display notifications whenever a transaction is sent.
//
// Note that this is an Anchor wallet/network provider--not a React provider,
// so all transactions will be flowing through here, which allows us to
// hook in to display all transactions sent from the `Swap` component
// as notifications in the parent app.
class NotifyingProvider extends Provider {
  // Function to call whenever the provider sends a transaction;
  private onTransaction: (
    tx: TransactionSignature | undefined,
    err?: Error
  ) => void;

  constructor(
    connection,
    wallet,
    opts: ConfirmOptions,
    onTransaction: (tx: TransactionSignature | undefined, err?: Error) => void
  ) {
    const newWallet = wallet as AnchorWallet;
    super(connection, newWallet, opts);
    this.onTransaction = onTransaction;
  }

  async send(
    tx: Transaction,
    signers?: Array<Signer | undefined>,
    opts?: ConfirmOptions
  ): Promise<TransactionSignature> {
    try {
      const txSig = await super.send(tx, signers, opts);
      this.onTransaction(txSig);
      return txSig;
    } catch (err) {
      if (err instanceof Error || err === undefined) {
        this.onTransaction(undefined, err);
      }
      return "";
    }
  }

  async sendAll(
    txs: Array<{ tx: Transaction; signers: Array<Signer | undefined> }>,
    opts?: ConfirmOptions
  ): Promise<Array<TransactionSignature>> {
    try {
      const txSigs = await super.sendAll(txs, opts);
      txSigs.forEach((sig) => {
        this.onTransaction(sig);
      });
      return txSigs;
    } catch (err) {
      if (err instanceof Error || err === undefined) {
        this.onTransaction(undefined, err);
      }
      return [];
    }
  }
}