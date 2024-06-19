import { Button, Dialog, DialogTitle, IconButton, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import useStyles from "../dashboard/styles";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import digibyteIcon from '../../assets/icon/digibyte.svg';
import swipeimgIcon from '../../assets/icon/swipeP.svg';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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
        className={classes.modalDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.modelhead}>
          <DialogTitle id="alert-dialog-title">Add Liquidity</DialogTitle>
          <div className={classes.icongroup}>
            <IconButton ><InfoOutlinedIcon /></IconButton>
            <IconButton className={classes.buttonrightside}><SettingsOutlinedIcon /></IconButton>
            <CloseIcon onClick={handleClose} />
          </div>
        </div>
        <div className={classes.mainswapboxed}>
          {/*<div className={classes.swaphead}>
                           <Typography>Add Liquidity</Typography>
                              <div className={classes.icongroup}>
                                <IconButton ><InfoOutlinedIcon/></IconButton>
                                <IconButton ><SettingsOutlinedIcon/></IconButton>
                              </div>
                        </div>*/}
          <div className={classes.swapboxed} style={{ border: '0px none', background: 'transparent', padding: '0px 10px', marginBottom: '10px', }}>
            <div className={classes.fromGroup}>
              <InputLabel> Input  </InputLabel>
              <div className={classes.frominside}>
                <TextField type="number"
                  placeholder={'0'}
                />
                <Select >
                  <MenuItem >Select a Token</MenuItem>
                  <MenuItem > <img src={digibyteIcon} alt="" />BTC</MenuItem>
                  <MenuItem > <img src={digibyteIcon} alt="" />ETH</MenuItem>
                  <MenuItem > <img src={digibyteIcon} alt="" />SOl</MenuItem>
                </Select>
              </div>
              <small>Balance: - 0</small>
            </div>
            <div className={classes.swipeBtn}><img src={swipeimgIcon} alt="" /></div>
            <div className={classes.fromGroup}>
              <InputLabel> Input  </InputLabel>
              <div className={classes.frominside}>
                <TextField type="number"
                  placeholder={'0'}
                />
                <Select>
                  <MenuItem >Select a Token</MenuItem>
                  <MenuItem > <img src={digibyteIcon} alt="" />BTC</MenuItem>
                  <MenuItem > <img src={digibyteIcon} alt="" />ETH</MenuItem>
                  <MenuItem > <img src={digibyteIcon} alt="" />SOl</MenuItem>
                </Select>
              </div>
              <small>Balance: - 0</small>
            </div>
            <div className={classes.btnGroup}>
              <Button onClick={handleClickOpen}>Connect Wallet</Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

