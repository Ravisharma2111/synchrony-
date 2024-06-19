import useStyles from "../dashboard/styles";
import logoIcon from '../../assets/icon/logo.svg';

function TokenLogo({ takenAddress, amount, name }) {
  const classes = useStyles();

  return (
    <>
      {takenAddress ?
        <img className={classes.imageLogo} src={takenAddress} alt={name} title={name} />
        :
        <img className={classes.imageLogo} src={logoIcon} alt={name} title={name} />
      }
    </>
  );
};

export default TokenLogo;
