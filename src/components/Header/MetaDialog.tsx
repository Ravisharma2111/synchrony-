import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useStyles from "./styles";
import MetaMaskAuth from '../MetaMask';
import CloseIcon from '@material-ui/icons/Close';


export default function MetaDialog({ handleClose, open, onAddressChanged, metaMaskWallet }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.metaCart}>
          <Typography id="modal-modal-title" className='metamodelheader' variant="h6" component="h2">
            Connect Wallet <CloseIcon onClick={handleClose} />
          </Typography>
          <Typography id="modal-modal-description" className='metamodelcontent' sx={{ mt: 2 }}>
            <ul>
              <li>
                <MetaMaskAuth onAddressChanged={onAddressChanged} />
              </li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
