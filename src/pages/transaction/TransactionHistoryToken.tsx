import React from 'react'
import useStyles from "../dashboard/styles";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function TransactionHistoryToken({ token1, token2, txHash }) {
  const classes = useStyles();

  return (
    <div >
      <a target="_blank" rel='noreferrer' href={`https://solscan.io/tx/${txHash}`} className={classes.tokenbox}>
        {token2 === token1 ?
          <>
            <div className='custom'>
              {token1.substring(0, 8)}...
              <span className='custom-tooltip'>
                <label>{token1}</label>
              </span>
            </div>
            <ArrowRightAltIcon />
            <div className='custom'>
              {token2.substring(0, 8)}......
              <span className='custom-tooltip'>
                <label>{token2}</label>
              </span>
            </div>
          </>
          :
          <>
            <div className='custom'>{token2.substring(0, 8)}...
              <span className='custom-tooltip'>
                <label>{token2}</label>
              </span>
            </div>
            <ArrowRightAltIcon />
            <div className='custom'>
              {token1.substring(0, 8)}...
              <span className='custom-tooltip'>
                <label>{token1}</label>
              </span>
            </div>
          </>
        }
      </a>
    </div>
  )
}
