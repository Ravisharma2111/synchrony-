import { useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { TokenInfo } from "@solana/spl-token-registry";
import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  List,
  ListItem,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";
import { TokenIcon } from "./Swap";
import { useSwappableTokens } from "../context/TokenList";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    padding: 0,
  },
  textField: {
    marginBottom: "8px",
  },
  tab: {
    minWidth: "134px",
  },
  tabSelected: {
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px",
  },
  tabIndicator: {
    opacity: 0,
  },
  headingInfo:{
    background: '#1A1A23;',
    borderRadius: '8px 8px 0px 0px;',
    padding: '15px 20px !important;',
    fontStyle: 'normal;',
    fontWeight: 500,
    fontSize: '18px;',
    color: 'rgba(255, 255, 255, 0.9);',
    marginBottom: '15px;',
  }
}));

export default function TokenDialog({
  open,
  onClose,
  setMint,
}: {
  open: boolean;
  onClose: () => void;
  setMint: (mint: PublicKey) => void;
}) {
  const [tabSelection, setTabSelection] = useState(0);
  const [tokenFilter, setTokenFilter] = useState("");
  const filter = tokenFilter.toLowerCase();
  const styles = useStyles();
  const { swappableTokens, swappableTokensSollet, swappableTokensWormhole } =
    useSwappableTokens();
  const displayTabs = !useMediaQuery("(max-width:450px)");
  const selectedTokens =
    tabSelection === 0
      ? swappableTokens
      : tabSelection === 1
      ? swappableTokensWormhole
      : swappableTokensSollet;
  let tokens =
    tokenFilter === ""
      ? selectedTokens
      : selectedTokens.filter(
          (t) =>
            t.symbol.toLowerCase().startsWith(filter) ||
            t.name.toLowerCase().startsWith(filter) ||
            t.address.toLowerCase().startsWith(filter)
        );
  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll={"paper"}
      PaperProps={{
        style: {
          borderRadius: "10px",
          width: "420px",
        },
      }}
    >
      <DialogTitle style={{ fontWeight: "bold" }}>
        <Typography style={{ paddingBottom: "16px" }} className={styles.headingInfo}>
          Select a token
        </Typography>
        <TextField
          className={styles.textField}
          placeholder={"Search name"}
          value={tokenFilter}
          fullWidth
          variant="outlined"
          onChange={(e) => setTokenFilter(e.target.value)}
        />
      </DialogTitle>
      <DialogContent className={styles.dialogContent} dividers={true}>
        <List disablePadding>
          {tokens.map((tokenInfo: TokenInfo) => (
            <TokenListItem
              key={tokenInfo.address}
              tokenInfo={tokenInfo}
              onClick={(mint) => {
                setMint(mint);
                onClose();
              }}
            />
          ))}
        </List>
      </DialogContent>
      {displayTabs && (
        <DialogActions>
          <Tabs
            value={tabSelection}
            onChange={(e, v) => setTabSelection(v)}
            classes={{
              indicator: styles.tabIndicator,
            }}
          >
            <Tab
              value={0}
              className={styles.tab}
              classes={{ selected: styles.tabSelected }}
              label="Main"
            />
            <Tab
              value={1}
              className={styles.tab}
              classes={{ selected: styles.tabSelected }}
              label="Wormhole"
            />
            {/* <Tab
              value={2}
              className={styles.tab}
              classes={{ selected: styles.tabSelected }}
              label="Sollet"
            /> */}
          </Tabs>
        </DialogActions>
      )}
    </Dialog>
  );
}

function TokenListItem({
  tokenInfo,
  onClick,
}: {
  tokenInfo: TokenInfo;
  onClick: (mint: PublicKey) => void;
}) {
  const mint = new PublicKey(tokenInfo.address);
  return (
    <ListItem
      button
      onClick={() => onClick(mint)}
      style={{ padding: "10px 20px" }}
    >
      <TokenIcon mint={mint} style={{ width: "30px", borderRadius: "15px" }} />
      <TokenName tokenInfo={tokenInfo} />
    </ListItem>
  );
}

function TokenName({ tokenInfo }: { tokenInfo: TokenInfo }) {
  return (
    <div style={{ marginLeft: "16px" }}>
      <Typography style={{ fontWeight: "bold" }}>
        {tokenInfo?.symbol}
      </Typography>
      <Typography color="textSecondary" style={{ fontSize: "14px" }}>
        {tokenInfo?.name}
      </Typography>
    </div>
  );
}
