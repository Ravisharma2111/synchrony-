import useStyles from "./style";
import loaderIcon from '../../assets/icon/preloader.svg';

function LoaderIcon({ loaderOpen = false }) {
    const classes = useStyles();
    return (
        <>
            {loaderOpen === true &&
                <div className={classes.pageloader}>
                    <img src={loaderIcon} alt="loader" />
                </div>
            }
        </>
    );
};

export default LoaderIcon;
