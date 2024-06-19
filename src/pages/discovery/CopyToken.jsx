import React, { useRef, useState } from 'react';
import useStyles from "../dashboard/styles";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

function CopyToken({ githubuserName, token }) {
    const classes = useStyles();
    const [copySuccess, setCopySuccess] = useState(false);
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
        setTimeout(function () { setCopySuccess(false); }, 2000);
    };

    return (
        <div onClick={copyToClipboard} className={classes.copyTokenbox}>
            {githubuserName}
            {copySuccess === false ?
                <ContentCopyIcon fontSize="small" className={classes.Iconcopy} />
                :
                <div className={classes.copySuccess}>
                    <CheckIcon fontSize="small" className={classes.IconcopySuccess} />
                    <p>{copySuccess}</p>
                </div>
            }
            <textarea className={classes.hideAssetToken}
                ref={textAreaRef}
                value={token}
            />
        </div>
    );
};

export default CopyToken; 