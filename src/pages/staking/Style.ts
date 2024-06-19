import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: any) => createStyles({
    root: {
        paddingTop: '100px',
        position: 'initial',
        '& .MuiContainer-fixed': {
            maxWidth: '1280px',
        },
        '& .MuiContainer-root': {
            '@media (max-width:768px)': {
                paddingTop: '40px',
            },
        },
    },

    stakeBox: {
        textAlign: 'center',
        margin: '0 auto',
        '@media (min-width:768px)': {
            width: '480px',
        },
    },

    staketitle: {
        fontSize: '30px !important',
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.9)!important',
    },
    faqHeadings: {
        fontSize: '30px !important',
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.9)!important',
        textAlign: 'left',
        marginTop: '30px',
    },
    staketypograph: {
        color: 'rgba(255, 255, 255, 0.42)!important',
        fontSize: '18px !important;',
        marginTop: '12px !important;',
        display: 'inline-block',
        width: '100%',
    },
    stakeTab: {
        background: '#202232',
        border: '1px solid rgba(255,255,255, 0.2)',
        textAlign: 'center',
        margin: '20px auto',
        height: '40px',
        width: '218px',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& .tabConnectBtn': {
            color: 'rgba(255, 255, 255, 0.9)',

            fontSize: '14px',
            fontWeight: 500,
            borderRadius: '50px',
            justifyContent: 'center',
            textTransform: 'capitalize',
            // marginRight:'12px',
            width: '107px',
            height: '36px',
        },
        '& .active': {
            background: 'linear-gradient(270deg, #6231ED -9.12%, #4A4DE6 24.42%, #3A69DC 67.62%, #7ED6C4 122.3%)',
        }
    },
    tabConnectBtn: {
        color: 'rgba(255, 255, 255, 0.9)',
        height: '32px',
        background: 'linear-gradient(270deg, #6231ED -9.12%, #4A4DE6 24.42%, #3A69DC 67.62%, #7ED6C4 122.3%)',
        fontSize: '14px',
        fontWeight: 500,
        borderRadius: '50px',
        justifyContent: 'center',
        textTransform: 'capitalize',
        marginRight: '12px',
    },
    stakeTabContent: {
        background: '#202232',
        padding: '30px',
        borderRadius: '8px',
    },
    stakeTabData: {
        background: 'rgba(26, 26, 35, 1)',
        padding: '12px',
        borderRadius: '8px',
    },
    stakeTabDataOne: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    textTypograph: {
        fontSize: '20px !important',
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 0.9)',
    },
    tabConnectBtn1: {
        color: '#fff',
        background: '#4A4DE6',
        borderRadius: '8px',
        textTransform: 'none',

        '&:hover': {
            color: '#fff',
            background: '#4A4DE6',
        }
    },
    typographlight: {
        color: 'rgba(255, 255, 255, 0.42)',
        fontSize: '14px',
        textAlign: 'left',
        marginTop: '12px',
    },
    connectWalletBtn: {
        color: 'rgba(255, 255, 255, 0.9)',
        padding: '1em 0 1em 0',
        background: 'linear-gradient(270deg, #6231ED -9.12%, #4A4DE6 24.42%, #3A69DC 67.62%, #7ED6C4 122.3%)',
        fontSize: '14px',
        fontWeight: 500,
        borderRadius: '8px',
        width: '100%',
        justifyContent: 'center !important',
        textTransform: 'capitalize',
        marginTop: '20px',
        position: 'relative',

        '&:hover': {
            cursor: 'pointer',
            color: 'rgba(255, 255, 255, 0.9) !important',
            background: 'linear-gradient(270deg, #6231ED -9.12%, #4A4DE6 24.42%, #3A69DC 67.62%, #7ED6C4 122.3%) !important',
        }
    },
    iconWallet: {
        position: 'absolute',
        top: '6px',
        left: '12px',
        fontSize: '18px !important',
    },
    exchangeData: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    exchangeData1: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    stakeFaq: {
        '& .faqtitle': {
            fontSize: '18px !important',
            color: 'rgba(255, 255, 255, 0.9)',
            marginTop: '20px !important',
            fontWeight: 500,
            width: '100%',
            border: '1px solid #242636',
            padding: '10px 10px 10px 20px',
            borderRadius: '8px',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',

            '@media (max-width:768px)': {
                marginTop: '20px !important;',
            },
            '& .arrow--toggle.open': {
                transform: 'rotate(0deg);',
                transition: ' all 0.5s',
            },

            '& .arrow--toggle': {
                // top: '11px;',
                float: 'right',
                position: 'relative;',
                fontSize: '30px !important;',
                transform: 'rotate(180deg);',
                cursor: 'pointer',
                transition: ' all 0.5s',
            },
            '& .discoveryiconn': {
                fontSize: '20px !important',
                marginBottom: '-3px',
            }
        },
        '& .active': {
            borderRadius: '8px 8px 0 0',
        },
    },

    faqdata: {
        fontSize: '14px !important',
        color: 'rgba(255, 255, 255, 0.9)',
        width: '100%',
        border: '1px solid #242636',
        padding: '10px 20px',
        textAlign: 'left',
        borderRadius: '0px 0px 8px 8px',
    },
    toggleTable: {
        transition: 'max-height 1s ease',
        maxHeight: '0',
        overflow: 'hidden',

        '& tbody': {
            transition: 'max-height 1s ease',
            maxHeight: '0',
            overflow: 'hidden',

        },
        '& .MuiTablePagination-root': {
            display: 'none',
            transistion: '2s all',

        }
    },

    TableAnimate: {
        transition: 'max-height 2s ease',
        maxHeight: '1500px',
    },
    stakingImage: {
        '& img': {
            marginTop: 40,
            maxWidth: '100%'
        }
    },
    stakeInput: {
        maxWidth: 70,
        background: 'no-repeat',
        fontSize: '20px',
        minHeight: 35,
        fontWeight: 500,
        color: '#fff !important',
        border: 0,
        borderBottom: '1px solid #383838',
        textAlign: 'right'
    },
    errorMessage: {
        color: '#fff',
        background: '#e31b1b',
        padding: '4px 3px',
        borderRadius: '4px'
    },
    successMessage: {
        color: '#fff',
        background: '#1c721f',
        padding: '4px 3px',
        borderRadius: '4px'
    }

}))