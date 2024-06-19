import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: any) => createStyles({
  root: {
    paddingTop: '68px',
    '& .MuiContainer-fixed': {
      maxWidth: '1280px',
    },
    '& .MuiContainer-root': {
      '@media (max-width:768px)': {
        paddingTop: '40px',
      },
    },

  },
  
  subtitleTrans: {
    fontSize: '20px !important',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '24px !important',
    fontWeight: 500,
    width: '100%',

    '@media (max-width:768px)': {
      marginTop: '20px !important;',
    },
  },

  noRecords: {
    color: '#fff;',
    border: '1px solid #fff',
    padding: '10px',
    width: '100%',
    display: 'block',
    marginTop: 15
  },

  breadcrumbsBar: {
    width: '100%',
    borderBottom: 'solid 1px #1A1A23',
    background: '#1A1A23',
    boxShadow: '0px 1px 0px #27282E',
    marginTop: '0',
    '& .subscribed': {
      padding: '6px 12px',
      color: 'rgba(255, 255, 255, 0.9)',
      textTransform: 'initial',
      background: '#4A4DE6',
      float: 'right',
    },
    '& .MuiBreadcrumbs-ol': {
      color: '#4A4DE6',
      fontSize: '12px',
    },

    '& .MuiBreadcrumbs-separator': {
      margin: '0 7px',
      color: 'rgba(255, 255, 255, 0.32)',
    },
    '& .MuiTypography-colorTextPrimary': {
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '12px',
    },
    '& .MuiTypography-colorTextSecondary': {
      color: 'rgba(0, 0, 0, 0.54)',
      width: 'auto',
      float: 'left',
      padding: '0px 0',
    },
    '& li.MuiBreadcrumbs-li p.active': {
      borderBottom: '1px solid #fff',
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.9)',
    },
    '& li.MuiBreadcrumbs-li p': {
      padding: '20px 15px',
      borderBottom: '1px solid #1a1a23',
      fontSize: '14px',
    },
  },

  paper: {
    background: '#000000',
    borderRadius: '8px',
    '& Button': {
      background: '#4A4DE6',
      borderRadius: '4px',
      textTransform: 'capitalize',
      marginTop: '20px',
    }
  },

  title: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '20px;',
    fontWeight: 500,
  },

  typograph: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
    marginTop: '12px',
    display: 'inline-block',
    width: '100%',
  },

  dashboardwelcome: {
    background: '#202232',
    borderRadius: '8px',
    padding: '5px 20px 5px 32px',
    display: 'flex',
    marginTop: '40px',
    alignItems: 'center',
    '@media (max-width:768px)': {
      display: 'inline-block',
      textAlign: 'left',
      marginTop: '0',
      padding: '25px',
    },
    '& .makeStyles-blicon-7': {
      textAlign: 'right',
    },
  },

  dashboardcontetn: {
    flex: '0 0 65%'
  },

  boxgrid: {
    background: '#242636',
    padding: '15px',
    borderRadius: '10px',
    // paddingTop:'10px',
  },

  graphtitle: {
    '& .makeStyles-subtitle-10': {
      marginTop: '38px',
    },
    '& .nodata': {
      position: 'relative',
    },
    '& .nodata p': {
      position: 'absolute',
      color: 'rgba(255, 255, 255, 0.32)',
      fontSize: '14px',
      right: '50%',
      bottom: '25px',
    },
    '& img': {
      width: '100%',
    },
  },

  bttitle: {
    fontSize: '12px',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.42)',
    marginTop: '0',
  },

  '& .MuiSelect-root': {
    background: '#1A1A23',
    border: '1px solid #242636',
    padding: '7px 0',
    borderBottom: '2px solid #242636',
    '& MuiSelect-iconFilled': {
      color: 'rgba(255, 255, 255, 0.42)',
    },
  },

  pullLeft: {
    float: 'left',
  },

  pullRight: {
    float: 'right',
  },

  redbg: {
    background: '#DD425A',
  },

  orangebg: {
    background: '#FF7B43',
  },

  yellowbg: {
    background: '#FFCA28',
  },

  skybluebg: {
    background: '#29B5F2',
  },

  gallerylist: {
    marginBottom: '36px',
    padding: '0 8px',
  },

  card: {
    background: '#242636',
    border: '1px solid #242636',
    borderRadius: '8px',
    marginTop: 100,
  },

  gallrycard: {
    background: '#242636 !important',
    color: '#fff',
    boxShadow: 'none !important',
    borderRadius: '0 !important',
    // backgroundColor:'#242636',
  },

  gallrycardcontent: {
    background: '#242636',
    padding: '0px !important',
    '& .gallerybox': {
      transition: 'max-height 0.7s ease',
      maxHeight: '0',
      overflow: 'hidden',
    },
    '& .gallerybox.openPanel': {
      transition: 'max-height 0.7s ease',
      maxHeight: '1500px',

    }
  },

  gallaryimgtitle: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 500,
    padding: '10px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0',
    borderBottom: '1px solid #323447',
    marginBottom: '10px',
    "& span": {
      whiteSpace: 'nowrap',
      width: 225,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'block',
      height: 21,
      float: 'left',
      marginTop: 8,
      textAlign: 'start',
    },
    "& svg": {

    },
  },

  gallaryimgtitle1: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 500,
    padding: '10px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0',
    "& span": {
      whiteSpace: 'nowrap',
      width: 225,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'block',
      height: 21,
      float: 'left',
      marginTop: 8,
      textAlign: 'start',
    },
    "& svg": {

    },
  },

  galleyheading: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: '20px',
    marginTop: '98px',
    fontWeight: 500,
    marginBottom: '16px',
    '@media (max-width:768px)': {
      marginTop: '0px',
    },
  },

  viewfull: {
    background: '#242636',
    border: 'none',
    justifyContent: 'center',
    padding: '10px 0px',
  },

  imgdescriptionlabel: {
    color: "rgba(255, 255, 255, 0.42)",
    fontSize: '14px',
    paddingBottom: '5px',
  },

  imgdescriptionval: {
    color: '#fff',
    fontSize: '14px',
    paddingBottom: '5px',
  },

  imgdesAttr: {
    display: 'block;',
    background: '#14151d;',
    borderRadius: '4px',
    padding: '7px 10px;',
    '& .label': {
      display: 'inline-block;',
      fontSize: '13px',
      background: '#14151d;',
      width: '50%;',
      color: '#fff',
      opacity: '0.5',
      textTransform: 'capitalize;',
      textAlign: 'start;',
      borderRadius: '4px;'
    },
    '& .value': {
      textAlign: 'start',
      color: '#fff',
      opacity: '0.9',
      display: 'inline-block',
      fontSize: '13px',
      width: '50%'
    }
  },

  btnGroupWithserach: {
    marginTop: 30,
    marginBottom: 30,
    display: 'inline-block',
    width: '100%',
    '@media (max-width:576px)': {
      marginTop: 0,
      marginBottom: 0,
    },
    '& .MuiButtonBase-root': {
      textTransform: 'inherit',
      background: 'transparent',
      border: 'solid 1px #fff',
      marginRight: 20,
      '@media (max-width:768px)': {
        marginTop: 15,
      },
    },
  },

  btnSearch: {
    float: 'right',
    width: '50%',
    '@media (max-width:576px)': {
      width: '100%',
      marginTop: '0px',
      marginBottom: 0,
    }
  },

  search_box: {
    width: '100%',
    maxWidth: '360px',
    float: 'right',
    position: 'relative',
    zIndex: 9,
    marginTop: 0,

    '& input[type="text"]': {
      width: '100%',
      margin: 0,
      background: '#1A1A23',
      border: '1px solid #242636',
      borderRadius: '4px',
      color: '#fff',
      minHeight: 35,
    },
    '& button': {
      position: 'absolute',
      right: 0,
      background: '#424242',
      border: 0,
      padding: '9px 8px',
      borderRadius: '0 3px 3px 0',
      color: '#fff',
      zIndex: 999,
      cursor: 'pointer',
    }
  },

  galleryImage: {
    width: 'auto !important;',

    margin: '0 auto;'
  },

  icon: {
    //top: '6px',
    position: 'relative',
    marginLeft: '16px',
    cursor: 'pointer',
    opacity: '0.5',
    transition: 'all 1s ease',
  },

  iconRotate: {
    transform: 'rotate(180deg)',
    transition: 'transform 0.7s ease',
    position: 'relative',
    //top: '6px',
    cursor: 'pointer',
    marginLeft: '16px',
    opacity: '0.5',

  },

  galleyimgdescription: {
    display: 'inline-block',
    width: '100%',
    // animation: 'mymove .5s infinite',
    '& .desciption': {
      color: '#fff',
      lineHeight: '20px',
      padding: '10px 0',
      fontSize: '13px',
      opacity: '0.6',
    }
  },

  pageloader: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgb(0 0 0 / 69%)',
    zIndex: 99,
    textAlign: 'center',
    "& img": {
      width: 100,
      height: 100,
      position: 'absolute',
      top: '50%',
    },
  },
}));
