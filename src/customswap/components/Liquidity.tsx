import { useState } from "react";
import {
  PublicKey
  
} from "@solana/web3.js";
import {
  Card,
  Button,
  Typography,
  TextField,
  useTheme,
} from "@material-ui/core";
import { ExpandMore, ImportExportRounded } from "@material-ui/icons";
import { useSwapContext, useSwapFair } from "../context/Swap";
import {
  useRouteVerbose,
  useMarket
} from "../context/Dex";
import { useTokenMap } from "../context/TokenList";
import { useMint, useOwnedTokenAccount } from "../context/Token";
import { useCanSwap } from "../context/Swap";
import TokenDialog from "./TokenDialog";
import { SettingsButton } from "./Settings";
import { InfoLabel } from "./Info";

import useStyles from "../../pages/dashboard/styles";


export default function LiquiditySwapCard({
  containerStyle,
  contentStyle,
  swapTokenContainerStyle,
  transactionStatus,
  setTransactionstatus
}: {
  containerStyle?: any;
  contentStyle?: any;
  swapTokenContainerStyle?: any;
  transactionStatus?:any;
  setTransactionstatus?:any;
}) {
  const styles = useStyles();
  return (
    <Card className={styles.swapCard} style={containerStyle}>
      <LiquiditySwapHeader />
      <div style={contentStyle}>
        <LiquiditySwapFromForm style={swapTokenContainerStyle} />
        <LiquidityArrowButton />
        <LiquiditySwapToForm style={swapTokenContainerStyle} />
        <InfoLabel />
        <LiquiditySwapButton transactionStatus={transactionStatus} setTransactionstatus={setTransactionstatus}/>
      </div>
    </Card>
  );
}

export function LiquiditySwapHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "16px",
      }}
    >
      <Typography
        style={{
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        Add Liquidity
      </Typography>
      <SettingsButton />
    </div>
  );
}

export function LiquidityArrowButton() {
  const styles = useStyles();
  const theme = useTheme();
  const { swapToFromMints } = useSwapContext();
  return (
    <ImportExportRounded
      className={styles.swapToFromButton}
      fontSize="large"
      htmlColor={theme.palette.primary.main}
      onClick={swapToFromMints}
    />
  );
}

function LiquiditySwapFromForm({ style }: { style?: any }) {
  const { fromMint, setFromMint, fromAmount, setFromAmount } = useSwapContext();
  return (
    <LiquiditySwapTokenForm
      from
      style={style}
      mint={fromMint}
      setMint={setFromMint}
      amount={fromAmount}
      setAmount={setFromAmount}
    />
  );
}

function LiquiditySwapToForm({ style }: { style?: any }) {
  const { toMint, setToMint, toAmount, setToAmount } = useSwapContext();
  return (
    <LiquiditySwapTokenForm
      from={false}
      style={style}
      mint={toMint}
      setMint={setToMint}
      amount={toAmount}
      setAmount={setToAmount}
    />
  );
}
export const DEFAULT_DENOMINATOR = 10_000;
export function LiquiditySwapTokenForm({
  from,
  style,
  mint,
  setMint,
  amount,
  setAmount,
}: {
  from: boolean;
  style?: any;
  mint: PublicKey;
  setMint: (m: PublicKey) => void;
  amount: number;
  setAmount: (a: number) => void;
}) {
  const styles = useStyles();

  const [showTokenDialog, setShowTokenDialog] = useState(false);
  const tokenAccount = useOwnedTokenAccount(mint);
  const mintAccount = useMint(mint);

  const balance =
    tokenAccount &&
    mintAccount &&
    tokenAccount.account.amount.toNumber() / 10 ** mintAccount.decimals;

  const formattedAmount =
    mintAccount && amount
      ? amount.toLocaleString("fullwide", {
          maximumFractionDigits: mintAccount.decimals,
          useGrouping: false,
        })
      : amount;

  return (
    <div className={styles.swapTokenFormContainer} style={style}>
      <div className={styles.swapTokenSelectorContainer}>
        <TokenButton mint={mint} onClick={() => setShowTokenDialog(true)} />
        <Typography color="textSecondary" className={styles.balanceContainer}>
          {tokenAccount && mintAccount
            ? `Balance: ${balance?.toFixed(mintAccount.decimals)}`
            : `-`}
          {from && !!balance ? (
            <span
              className={styles.maxButton}
              onClick={() => setAmount(balance)}
            >
              MAX
            </span>
          ) : null}
        </Typography>
      </div>
      <TextField
        type="number"
        value={formattedAmount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        InputProps={{
          disableUnderline: true,
          classes: {
            root: styles.amountInput,
            input: styles.input,
          },
        }}
      />
      <TokenDialog
        setMint={setMint}
        open={showTokenDialog}
        onClose={() => setShowTokenDialog(false)}
      />
    </div>
  );
}

function TokenButton({
  mint,
  onClick,
}: {
  mint: PublicKey;
  onClick: () => void;
}) {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <div onClick={onClick} className={styles.tokenButton}>
      <TokenIcon mint={mint} style={{ width: theme.spacing(4) }} />
      <TokenName mint={mint} style={{ fontSize: 14, fontWeight: 700 }} />
      <ExpandMore />
    </div>
  );
}

export function TokenIcon({ mint, style }: { mint: PublicKey; style: any }) {
  const tokenMap = useTokenMap();
  let tokenInfo = tokenMap.get(mint.toString());
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {tokenInfo?.logoURI ? (
        <img alt="Logo" style={style} src={tokenInfo?.logoURI} />
      ) : (
        <div style={style}></div>
      )}
    </div>
  );
}

function TokenName({ mint, style }: { mint: PublicKey; style: any }) {
  const tokenMap = useTokenMap();
  const theme = useTheme();
  let tokenInfo = tokenMap.get(mint.toString());

  return (
    <Typography
      style={{
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        ...style,
      }}
    >
      {tokenInfo?.symbol}
    </Typography>
  );
}

export function LiquiditySwapButton({transactionStatus,setTransactionstatus}) {
  const styles = useStyles();
  const {
    fromMint,
    toMint,
   
   
    
    
  } = useSwapContext();
 
  const fromMintInfo = useMint(fromMint);
  const toMintInfo = useMint(toMint);
 
  const route = useRouteVerbose(fromMint, toMint);
  const fromMarket = useMarket(
    route && route.markets ? route.markets[0] : undefined
  );
 
  const canSwap = useCanSwap();
  
  const fair = useSwapFair();

  const quoteMint = fromMarket && fromMarket.quoteMintAddress;
  const quoteMintInfo = useMint(quoteMint);
 
 
  const sendSwapTransaction = async () => {
    //console.log("swap cancel")
    setTransactionstatus(3);
    //setOpen(false);
    if (!fromMintInfo || !toMintInfo) {
      throw new Error("Unable to calculate mint decimals");
    }
    if (!fair) {
      throw new Error("Invalid fair");
    }
    if (!quoteMint || !quoteMintInfo) {
      throw new Error("Quote mint not found");
    }

   
    
   
   
    //addLiquidity(connection,wallet,components,options);
  };
 

 
  return (
    <>
   
    <Button
      variant="contained"
      className={styles.swapButton}
      onClick={sendSwapTransaction}
      disabled={!canSwap}
    >
      {canSwap !== true ? 'Enter an Amount' : 'Supply'}
      
    </Button>
    </>
  );
}



