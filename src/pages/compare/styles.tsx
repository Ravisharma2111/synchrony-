import {  makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme : any) => createStyles({
    root:{
      paddingTop:'68px',
      '& .MuiContainer-fixed':{
          maxWidth:'1280px',
      },
      '& .MuiContainer-root':{
        '@media (max-width:768px)':{
              paddingTop:'40px',
        },
      },
    },
    breadcrumbsBar:{
        width:'100%',
        borderBottom:'solid 1px #1A1A23',
        background:'#1A1A23',
        boxShadow:'0px 1px 0px #27282E',
        marginTop:'0',
      '& .subscribed':{
          padding:'6px 12px',
          color:'rgba(255, 255, 255, 0.9)',
          textTransform:'initial',
          background:'#4A4DE6',
          float:'right',
      },
      '& .MuiBreadcrumbs-ol' :{
        color:'#4A4DE6',
        fontSize:'12px',
      },
      '& .MuiBreadcrumbs-separator':{
          margin:'0 7px',
          color:'rgba(255, 255, 255, 0.32)',
      },
      '& .MuiTypography-colorTextPrimary':{
         color:'rgba(255, 255, 255, 0.9)',
         fontSize:'12px',
      },
      '& .MuiTypography-colorTextSecondary':{
        color:'rgba(0, 0, 0, 0.54)',
        width:'auto',
        float:'left',
        padding:'8px 0',
      },
    },
    breadcrumbsinner:{
      padding: '10px 0',
      maxWidth: '1230px',
      margin:'0 auto',
      display:'table',
      width:'100%',
    },
    paper:{
      background:'#000000',
      borderRadius:'8px',
      '& Button':{
        background:'#4A4DE6',
        borderRadius:'4px',
        textTransform:'capitalize',
        marginTop:'20px',
      }
    },
    title:{
      color:'rgba(255, 255, 255, 0.9)',
      fontSize:'20px;',
      fontWeight:500,
    },

    typograph:{
      color:'rgba(255, 255, 255, 0.7)',
      fontSize:'14px',
      marginTop:'12px',
      display:'inline-block',
      width:'100%',
    },
    dashboardwelcome:{
      background:'#202232',
      borderRadius:'8px',
      padding:'5px 20px 5px 32px',
      display:'flex',
      marginTop:'40px',
      alignItems: 'center',
      '@media (max-width:768px)':{
        display:'inline-block',
        textAlign:'left',
        marginTop:'0',
      },
      '& .makeStyles-blicon-7':{
        textAlign:'right',
      }
    },
    dashboardcontetn:{
      flex:'0 0 65%'
    },
    blicon:{
      flex:'0 0 35%',
      textAlign:'right',
    },
    
    welcomeContent:{

    },
    compareTabledata:{
      '@media (max-width:767px)':{
        overflow:'auto',
      },
    },
    secondBox:{
      marginBottom:'34px',
     '& .MuiGrid-grid-xs-4':{
      '@media (max-width:768px)':{
          maxWidth:'100%',
          flexBasis:'100%',
      },
     },
    },
    subtitle:{
     fontSize:'20px',
     color:'rgba(255, 255, 255, 0.9)',
     marginTop:'48px',
     marginBottom:'24px',
     fontWeight:500,
     '@media (max-width:768px)':{
         marginTop:'0',
      },
    },
    boxgrid:{
    background:'#1A1A23',
    border:'1px solid #242636',
    borderRight: 'none',
    borderRadius:'8px 0px 0px 8px',
    padding:'20px',
    paddingTop:'10px',
    height:'100%',
    },
    boxgridMid:{
      background:'#1A1A23',
      border:'1px solid #242636',
      borderRadius:'0px',
      padding:'20px',
      paddingTop:'10px',
      height:'100%',
      },
    tname:{
     fontSize:'16px',
     color:'rgba(255, 255, 255, 0.9)',
     display:'flex',
     alignItems:'center',
     '& img':{
      marginRight:'10px',
      marginTop:'8px',
      marginBottom:'8px',
     },
    },
    total:{
      fontSize:'16px',
      color:'rgba(255, 255, 255, 0.7)',
      display:'inline-block',
      width:'100%',
      '& img':{
        float:'right',
        height:'29px',
      }
   },
   topprice:{
    fontSize:'14px',
    color:'#4CAF50',
    float:'right',
    '& svg':{
      verticalAlign:'middle'
    }
   },
   commingsec:{
    background:'#242636',
    padding:'20px',
    display:'flex',
    borderRadius:'0px 8px 8px 0px',
    height:'100%',
   },
   commingtitle:{
    fontSize:'16px',
    color:'rgba(255, 255, 255, 0.9)',
   },
   commingcontent:{
    paddingRight:'30px',
   },
   tablemain:{
    background:'#000',
   },
   table: {
      minWidth: 750,
      color:'#fff',
      border:'solid 1px #242636',
      borderRadius:'5px',
      '& .MuiTableHead-root':{
       background:'#14151D',
      },
    },
    tablehead:{
      minWidth: 750,
      color:'#fff',
      '& .MuiTableCell-head':{
        color:'#fff',
      },
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    highlight:{},
    modalDialog:{
     '& .MuiDialog-paperWidthSm':{
      background:'#14151D',
      width:'480px',
     },
     
    },
    searchToolbar:{
      display:'flex',
        '& .MuiPaper-root':{background:'#14151D'}
    },
    modelhead:{
      background:'#1A1A23',
      borderRadius:'1% 1% 0% 0%',
      color:'#fff',
      display:'flex',
      alignItems:'center',
      '& .MuiDialogTitle-root':{
          flex:'inherit',
          marginRight:'auto',
      },
      '& .MuiSvgIcon-root':{
          cursor:'pointer',
          position: 'relative',
          right:'15px',
      },
    },
    modelbody:{
      padding:'20px',
      paddingTop:'4px',
      paddingBottom:'4px',
     '& .MuiListItem-root':{
        background:'#1A1A23',
        borderRadius:'4px',
        marginTop:'16px',
        marginBottom:'16px',
        color:'#fff',
        position:'relative',
     },
     '& .MuiChip-root':{
        position:'absolute',
        left:'77px',
        height:'20px',
        fontSize:'10px',
        textTransform:'uppercase',
        color:'#181819',
        background:'#00BDCB',
     },
    },
    brfullbtn:{
     color:'rgba(255, 255, 255, 0.9)',
     fontSize:'16px',
     border:'solid 1px #32323a',
     textAlign:'center',
     padding:'10px 0',
    },
    modelfooter:{
     paddingRight:'20px',
     paddingLeft:'20px',
    },
    modelfooterlink:{
      color:'#fff',
      textAlign:'center',
      marginTop:'15px',
      fontSize:'14px',
      '& .MuiButton-root':{
       display:'block',
       marginTop:'5px',
       width:'100%',
       color:'#4A4DE6',
       textTransform:'inherit',
       marginBottom:'25px',
      },
    },
   highestvol:{
    '& .MuiPaper-roo':{
      paddingBottom:'14px',
    },
   },
   inputRoot:{

   },
   inputInput:{
     
    },
    formControl:{

    },
    valuefolio:{
      fontSize: '24px',
      color: 'rgba(255, 255, 255, 0.9)',
      marginTop: '5px',
      marginBottom:'24px',
      display:'flex',
      alignItems:'center',
      '& small':{
          fontSize:'14px',
          color:'#4CAF50',
          marginLeft:'5px',
      },
    },
    prottitle:{
      fontSize:'16px',
      color:'rgba(255, 255, 255, 0.9)',
      marginTop:'20px',
      marginBottom:'20px',
    },
    portfolio:{
        marginTop: '90px',
        paddingLeft:'24px',
        '& .nodata':{
          textAlign:'center',
          padding: '50px 0',
          fontSize: '20px',
          color:'rgba(255, 255, 255, 0.7)',
        }
    },
    graphtitle:{
      '& .makeStyles-subtitle-10':{
        marginTop:'38px',
      },
      '& .nodata':{
         position:'relative',
      },
      '& .nodata p':{
        position:'absolute',
        color:'rgba(255, 255, 255, 0.32)',
        fontSize: '14px',
        right:'50%',
        bottom:'25px',
      },
      '& img':{
          width:'100%',
        },
    },
    bttitle:{
      fontSize:'12px',
      textTransform:'uppercase',
      color:'rgba(255, 255, 255, 0.42)',
      marginTop:'0',
    },
    '& .MuiSelect-root':{
            background: '#1A1A23',
            border:'1px solid #242636',
            padding:'7px 0',
            borderBottom:'2px solid #242636',
            '& MuiSelect-iconFilled':{
             color:'rgba(255, 255, 255, 0.42)',
            },
        },
    handleChange:{

    },
    pullLeft:{
      float:'left',
    },
    pullRight:{
      float:'right',
    },
    graphBtn:{
      display:'inline-block',
      padding: '0',
      border:'solid 1px #56575d',
      marginTop:'18px',
      borderRadius:'4px',
      '& .MuiListItem-root':{
        display:'inline-block',
        width:'auto',
        color:'#fff',
        fontSize:'14px',
        borderRight:'solid 1px #56575d',
        marginRight:'-1px',
      }
    },
    portfolioList:{
     '& .MuiList-root':{
        padding:'0',
        display:'inline-block',
        marginTop:'24px',
      },
      '& .MuiListItem-root':{
        padding:'0',
        float:'left',
        width:'50%',
        textAlign:'left',
        fontSize:'14px',
        color:'#fff',
        marginBottom:'8px',
      },
      '& small':{
        display:'inline-block',
        width:'8px',
        height:'8px',
        marginRight:'4px',
        borderRadius:'50%',
      },
   },
   redbg:{
      background:'#DD425A',
    },
    orangebg:{
      background:'#FF7B43',
    },
    yellowbg:{
      background:'#FFCA28',
    },
    skybluebg:{
      background:'#29B5F2',
    },
 
   interactionBox:{
    '& .makeStyles-secondBox-9' :{
      columnGap:'50px',
      flexWrap:'inherit',
    },
    '& .MuiPaper-rounded':{
    background:'transparent',
    },
   },
   interactionHead:{
      fontSize: '14px',
      color:'#fff',
      marginTop:'47px',
      marginBottom:'35px',
      '& small':{
       display:'block',
       height:'20px',
      },
   },
   poolsInterction:{
      '& .MuiGrid-root':{
          marginTop:'0',
          paddingLeft:'0',
      },
     
      '& .makeStyles-boxgrid-11':{
       borderRadius:'8px',
      },
      '& .MuiPaper-rounded':{
          borderRadius:'8px',
          border:'1px solid #242636',
          background:'#1A1A23',
      },
   },
   poolDetailsbar:{
    display:'flex',
    color:'#fff',
    '& .MuiTypography-h1':{
     fontSize:'28px',
     color:'#fff',
     marginBottom:'12px',
     marginTop:'30px',
    },
   },
   poolDetailsbox:{
    display:'flex',
    float:'right',
    marginTop:'30px',
    '& .MuiTypography-root':{
      background:'#1A1A23',
      border:'1px solid #242636',
      padding:'14px 20px',
      color:'rgba(255, 255, 255, 0.42)',
      fontSize:'12px',
    },
    '& small':{
      display:'block',
      color:'#4CAF50',
      fontSize:"18px",
      marginTop:'8px',
    },
   },
   lightgreen:{
    background:'#00BDCB',
    height:'24px',
    marginRight:'10px',
    '& .MuiChip-label':{
      fontWeight:'500',
    },
   },
   opcitygreen:{
    background:'rgba(0, 189, 203, 0.15)',
    color:'#00BDCB',
    height:'24px',
    marginRight:'10px',
   },
   colorwhite:{
    color:'white',
   },
   graphImg:{
    '& img':{
      width:'100%',
      marginTop:'35px',
    }
   },
  namesValut:{

  },
  vaultTable:{
    columnGap:'25px',
    flexWrap:'inherit',
    '& .namesValut':{
      display:'flex',
    },
    '& .namesValut .MuiTypography-root':{
        color:'rgba(255, 255, 255, 0.9)',
        fontSize:'14px',
        marginLeft:'8px',
        marginRight:'4px',
   },
   '& .namesValut small':{
      display:'block',
      color:'rgba(255, 255, 255, 0.42)',
      fontSize:'12px',
    },
    '& .namesValut .MuiChip-root':{
        color:'#00BDCB',
        height:'24px',
        background:'rgba(0, 189, 203, 0.15)',
    },
    '& .namesValut .MuiChip-root span':{
        maxWidth:'none',
        position:'initial',
    },
    '& .MuiPaper-root':{
     background:'#23242e',
    },
    
  },
  tabssection:{
    '& .MuiPaper-root':{
      background:'#14151d',
      boxShadow:'none',
      borderBottom:'solid 1px #242636',
    },
    '& .MuiBox-root':{
     padding:'0',
   },
    '& .MuiTab-root':{
      padding:'0 12px',
      height:'56px',
      minWidth:'auto',    
  }, 
  '& .MuiTabs-indicator':{
    background:'#6d7db8',
  },
  '& .MuiTab-wrapper':{
    textTransform:'capitalize',
    color:'rgba(255, 255, 255, 0.42)',
  },
  '& .Mui-selected .MuiTab-wrapper':{
    color:'rgba(255, 255, 255, 0.7)',
  },
  },
  tabinnercontent:{
    background:'#1A1A23',
    border:'1px solid #242636',
    padding:'24px 20px',
    borderRadius:'8px',
    marginTop:'20px',
    color:'rgba(255, 255, 255, 0.9)',
    paddingBottom:'0px',
    marginBottom:'-10px',
  
  },
  tabcontent:{
   '& .MuiTypography-root':{
      color:'rgba(255, 255, 255, 0.9)',
      fontSize:'14px',
   },
   '& .MuiTypography-root small':{
    display:'block',
    fontSize:'12px', 
    color:'rgba(255, 255, 255, 0.42)',
    marginBottom:'5px',
    textTransform:'uppercase',
   },
   '& span':{
     display:'flex',
     marginRight:'4px',
    },
   '& .MuiLink-root':{
    textDecoration:'underline'
   },
    '& .MuiGrid-root':{
      marginBottom:'0px',
    },
    '& .MuiGrid-container':{
      marginBottom:'30px',
    },
  },
  copytext:{
    textDecoration:'underline',
    display:'flex',
    alignItems:'center',
    '& img':{
      marginLeft:'8px',
    },
  },
  descrptiontab:{
    paddingRight:'0',
    marginBottom:'0px',
    '& b':{
    fontWeight:'400',
    color:'rgba(255, 255, 255, 0.42)',
    marginLeft:'5px',
    },
  },
  smContract:{
   '& .MuiTypography-root':{
       marginTop:'20px',
       marginBottom:'20px',
       fontSize:'14px',
       color:'rgba(255, 255, 255, 0.9)',
   },
  },
  smcontractBox:{
    background:'#1A1A23',
    border:'solid 1px #1A1A23',
    borderRadius:'8px',
    '& .MuiTypography-root':{
      marginTop:'0',
      marginBottom:'3px',
    },
  },
  labelImg:{
    padding:'8px 12px !important',
  },
  boxSec:{
    padding:'0 70px',
  },
  drawerSlider:{
   '& .MuiDrawer-paperAnchorRight':{
      width:"613px",
      background:'#1a1a23',
      borderRadius: '8px 8px 0px 0px',
   },
   '& .MuiBox-root':{
     marginTop:'0',
     borderRadius:'0',
     padding:'0 ',
   },
   '& .MuiAppBar-positionStatic':{
     paddingLeft:'20px',
     paddingRight:'20px',
   },
   '& .MuiButtonBase-root.MuiTab-root':{
     height:42,
   },
   '& .MuiFormLabel-root.MuiInputLabel-root':{
      marginTop:'24px',
   },
   '& .MuiTypography-root':{
      background:'#14151D',
      border:'1px solid #242636',
      borderRadius:'0px 4px 4px 0px',
      color:'rgba(255, 255, 255, 0.7)',
      alignItems:'center',
      fontSize:'14px',
      padding:'0 20px',
   },
   '& .MuiInputBase-input.MuiInput-input':{
      padding:'4px 12px',
      fontSize:'14px',
   },
   '& .MuiButtonBase-root.MuiButton-root.MuiButton-text':{
    marginTop:12,
   },
  },
  asseetNote:{
    border:'none !important',
  },
  swipeHead:{
  display:'flex',
  color:'rgba(255, 255, 255, 0.9)',
  alignItems:'center',
  '& p':{
  fontSize:'14px',
  },
  "& img":{
    padding:'11px 9px',
    border:'solid 1px #3e4050',
    borderRadius:'4px',
    margin:'0 15px',
  },
  },
  green:{
   color:'#4CAF50',
  },
  drawerhead:{
    background:'#23242e',
    color:'#fff', 
    fontSize:'18px',
    padding:'25px 20px',
    display:'inline-block', 
    borderBottom:'solid 1px #3e4050',
    fontWeight:500,
    '& svg':{
      float:'right',
      cursor:'pointer',
    },
  },
  fromGroup:{
    '& .MuiFormLabel-root':{
        fontSize:'14px',
        color:'rgba(255, 255, 255, 0.9)',
        marginBottom:'8px',
        marginTop:'28px',
    },
    '& small':{
        color:'rgba(255, 255, 255, 0.42)',
        fontSize:'12px',
    },
  },
  frominside:{
    display:'flex',
    alignItems:'center',
    background:'#191a22',
    border:'1px solid #3e4050',
    borderRadius:'5px',
    position:'relative',
    overflow:'hidden',
    '& .MuiInput-underline:after':{
      display:'none',
    },
    '& .MuiInput-underline:before':{
      display:'none',
    },
    '& .MuiFormControl-root':{
      flex:'0 0 86%',
    },
    '& .MuiInputBase-input':{
      background:'#191a22',
      color:'#fff',
      paddingLeft:'12px',
      height:'33px',
    },
    '& .MuiTypography-root':{
     display:'flex',
     padding:'11px 12px',
     borderLeft:'solid 1px #242636',
     position: 'absolute',
     top: 0,
     right:0,
    },
  },
  btnGroup:{
    '& .MuiButtonBase-root':{
        display:'inline-block',
        width:'100%',
        textAlign:'center',
        background:'#4A4DE6',
        borderRadius:'4px',
        fontSize:'16px',
        color:'rgba(255, 255, 255, 0.9)',
        textTransform:'inherit',
        fontWeight:'400',
        padding:'10px 0',
        marginTop:'12px',
    },
    '& .MuiTypography-root':{
       fontSize:'14px',
       textAlign:'center',
       marginTop:'12px',
       color:'rgba(255, 255, 255, 0.42)',
    },
  },
  swipeBtn:{
    display:'table',
    margin:'0 auto',
    padding:'3px 10px',
    border:'solid 1px #3e4050',
    borderRadius:'4px',
    marginTop:'28px',
  },
  mb30:{
    marginTop:30,
    clear:'both'
  },
  clearfix:{
    float:'none',
    clear:'both'
  },
 swapmainbox:{
  background:'#14151d',
  '& .MuiGrid-grid-xs-6':{
    margin:'0 auto',
  },
  '& .MuiPaper-rounded':{
    background:'transparent',
  },
 },
 swaphead:{
  display:'inline-block',
  width:'100%',
  marginTop:'32px',
  '& .MuiTypography-root':{
    float:'left',
    fontWeight: '500',
    fontSize:'20px',
    color:'#fff',
  },
 },
 icongroup:{
  display:'flex',
  float:'right',
  position:'relative',
  '& .MuiButtonBase-root':{
    width:'32px',
    height:'32px',
    background:'rgba(230, 231, 233, 0.04)',
    marginLeft:'12px',
    marginTop:'0',
    '& .MuiSvgIcon-root':{
      width:'15px',
      color:'#fff',
    },
  },
 },
 swapboxed:{
  background:'#1A1A23',
  display:'inline-block',
  width:'100%',
  marginTop:'20px',
  border:'1px solid #242636',
  borderRadius:'8px',
  padding:'0 20px',
  marginBottom:'50px',
  paddingBottom:'24px',
  '& .MuiInputBase-root':{
    position:'initial',
  },
  '& .MuiSelect-select':{
    position:'absolute',
    width:'auto',
    right:'0',
    background:'#14151D',
    borderLeft:'1px solid #242636',
    display:'flex',
    alignItems:'center',
    color:'rgba(255, 255, 255, 0.7)',
    fontSize:'14px',
    paddingRight:'32px',
  },
  '& .MuiSvgIcon-root':{
    color:'rgba(255, 255, 255, 0.9)',
    right:'7px',
    '& :before':{
     width:'8990px',
    },
  },
  '& .MuiSelect-root img':{
   marginRight:'8px',
  },
 },
 swapbalance:{
  display:'inline-block',
  width:'100%',
  marginTop:'24px',
  padding:'24px 20px 12px 20px',
  '& .MuiTypography-root':{
    fontSize:'14px',
    marginBottom:'12px',
  }
 },
 swapbalanceChild:{
  color:'rgba(255, 255, 255, 0.42)',
  float:'left',
 },
 swapbalanceChild2:{
  color:'rgba(255, 255, 255, 0.42)',
  float:'right',
 },
 calcswap:{
  display:'inline-block',
  width:'100%',
  paddingRight:'20px',
  paddingLeft:'20px',
 },
 innercalc:{
  float:'left',
  display:'flex',
  '& .MuiTypography-root':{
   fontSize:'20px',
   color:'rgba(255, 255, 255, 0.9)',
  },
  '& img':{
   marginRight:'5px',
  },
 },
 innerethcalc:{
 float:'right',
 '& .MuiTypography-root':{
   fontSize:'18px',
   color:'rgba(255, 255, 255, 0.9)',
  },
 },
 downcalc:{
  color:'rgba(255, 255, 255, 0.7)',
  margin:'13px auto',
  display:'table',
 },
 notecalc:{
  color:'rgba(255, 255, 255, 0.42)',
  fontSize:'14px',
  marginTop:'12px',
  paddingRight:'20px',
  paddingLeft:'20px',
  display:'block',
 },
 confirmSwap:{
  '& .makeStyles-swapbalance-194':{
    padding:'0',
  }
 },
 swapbalancemodel:{
  display:'inline-block',
  width:'100%',
  marginTop:'24px',
  background:'#1A1A23',
  padding:'24px 20px 12px 20px',
  '& .MuiTypography-root':{
    fontSize:'14px',
    marginBottom:'12px',
  }
 },
 swapModel:{
  padding:'0',
  paddingTop:'24px',
 },
 fullPrimarybtn:{
  background:'#4A4DE6',
  borderRadius:'4px',
  fontSize:'16px',
  color:'#fff',
  textTransform:'inherit',
  display:'inline-block',
  width:'100%',
  paddingTop:'13px',
  paddingBottom:'13px',
  marginTop:'12px',
  '& .MuiButtonBase-root.MuiButton-root.MuiButton-text:hover':{
  backgroundColor:'red',
  },
 },
 loadingSwap:{
  width:'280px',
  display:'table',
  margin:'0 auto',
  color:'rgba(255, 255, 255, 0.9)',
  fontSize:'16px',
  textAlign:'center',
  paddingTop:'50px',
  paddingBottom:'80px',
  '& img':{
    marginBottom:'23px',
  },
  '& .MuiTypography-root':{
    padding:'0',
  },
 },
 swapLaststeap:{
  textAlign:'center',
  color:'rgba(255, 255, 255, 0.9)',
  '& img':{
    marginBottom:'28px',
  },
 },
 lastCalcswap:{
  display:'flex',
  justifyContent:'center',
  color:'rgba(255, 255, 255, 0.9)',
  fontSize:'20px',
  columnGap:'20px',
  marginTop:'15px',
  '& .MuiTypography-root':{
  display:'flex',
  alignItems:'center',
  },
  '& img':{
    marginBottom:'0',
  },
 },
 customloader:{
  position:'relative',
  '& img':{
    transition:'transform .7s ease-in-out',
    transitionProperty: 'transform',
    animationName: 'rotate', 
    animationDuration:'2s', 
    animationIterationCount:'infinite',
    animationTimingFunction:'linear',
    position:'absolute',
    top:'0',
    left:'91px',
   },
 },
 customloaderbox:{
    opacity:'0.4',
    border:'2px solid #4A4DE6',
    width:'93.73px',
    height:'93.73px',
    borderRadius:'50%',
    margin:'0 auto',
    marginBottom:'23px',
 },
 tableTitle:{
  fontSize:'20px',
  color:'rgba(255, 255, 255, 0.9)',
  marginTop:'74px',
  marginBottom:'20px',
 },
 valueGroup:{
  display:'flex',
  alignItems:'center',
  '& img':{
   marginBottom:'5px',
   marginRight:'8px',
  },
 },
 subtitleTab:{
    marginTop:'20px',
    marginBottom:'-4px',
    display:'inline-block',
    alignItems:'center',
    width:'auto',
    '& i':{
      width:'3px',
      height:'3px',
      background:'rgba(255, 255, 255, 0.42)',
      display:'inline-block',
      borderRadius:'50%',
      margin:'0 8px 3px 8px',
    },
    '& small':{
      float:'right',
      marginTop:'3px',
      textTransform:'inherit',
    },
 },
 lessvalue:{
  color:'#DD425A',
  '& img':{
    marginRight:'4px',
  },
 },
 greatervalue:{
  color:'#4CAF50',
  '& img':{
    marginRight:'4px',
  },
 },
 separator30:{
  height:'30px',
  display:'inline-block',
  width:'100%',
 },
 sharePrice:{
  display:'flex',
  position:'absolute',
  marginTop:'30px',
  '& .MuiTypography-root':{
  color:'rgba(255, 255, 255, 0.9)',
  fontSize:'28px',
  display:'flex',
  alignItems:'center',
  },
  '& span':{
    fontSize:'14px',
    marginLeft:'12px',
    display:'flex',
  },
  '& span img':{
    float:'left',
  },
  '& .MuiSelect-root':{
      background:'#1A1A23',
      border:'1px solid #242636',
      borderRadius:'4px',
      color:'#fff',
      width:'130px',
      padding:'6px 12px',
      marginLeft:'12px',
  },
  '& .MuiInput-underline:before':{
    display:'none',
  },
  '& .MuiInput-underline:after':{
    display:'none',
  },
  '& .MuiSelect-icon':{
    color:'rgba(255, 255, 255, 0.42)',
  },
 },
 InfoTooltipBox:{
  position:'absolute',
  border: '1px solid #242636',
  background: '#202232',
  right: 40,
  top: 40,
  minHeight:150,
  zIndex:9,
  minWidth:398,
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1), 0px 1px 18px -2px rgba(0, 0, 0, 0.08), 0px 3px 5px -1px rgba(0, 0, 0, 0.16)',
  borderRadius: 8,
  padding:16,
  paddingBottom:0,
  '& .MuiTypography-h4':{
      display:'block',
      width:'100%',
      fontSize:16,
      fontWeight:500,
      color:'rgba(255, 255, 255, 0.9)',
      marginBottom:12,
  },
  '& label':{
    flex:'0 0 20%',
    color:'rgba(255, 255, 255, 0.9)',
    fontSize:14,
    fontWeight:400,
  },
  '& .MuiFormControl-root':{
    flex:'0 0 69%',
  },
  '& span':{
    flex:'0 0 11%',
    background:'#14151D',
    border:'1px solid #242636',
    borderRadius:'0px 4px 4px 0px',
    textAlign:'center',
    marginLeft:'-1px',

  },
  '& span img':{
    margin:'8px 0',
    marginTop:9,
  },
  '& input':{
    background:'#1A1A23',
    border:'1px solid #242636',
    borderRadius:'4px',
    fontSize:14,
    padding:'11px 12px',
  },
  '& input::placeholder':{
    color:'rgba(255, 255, 255, 0.42)',
  },
  '& .MuiInput-underline:before':{
    display:'none',
  },
  '& .MuiInput-underline:after':{
    display:'none',
  },
 },
 Infoinputgroup:{
  display:'flex',
  alignItems:'center',
  width:'100%',
  marginBottom:'16px',
 },
 InfoHead:{
 },
 settingPop:{
  '& .MuiTypography-root':{
    fontSize:18,
    fontWeight:500,
    color:'rgba(255, 255, 255, 0.9)',
   },
   '& .MuiFormLabel-root':{
    color:'rgba(255, 255, 255, 0.9)',
    fontSize:'14px',
    marginBottom:'12px',
   },
   '& .MuiFormGroup-root':{
      marginBottom:'0px',
      flexDirection:'initial',
    },
    '& .MuiFormControlLabel-root':{
        position:'relative',
        margin:0,
    },
    '& .MuiIconButton-root':{
        marginLeft:0,
        width:'101px',
        marginRight:'12px',
        background:'#1A1A23',
        border:'1px solid #242636',
        borderRadius:4,
        position:'relative',
        padding:'7px 0',
    },
    '& span.MuiFormControlLabel-label':{
      display:'inline-block',
      width:'100%',
      textAlign:'center',
      color:'rgba(255, 255, 255, 0.9)',
      fontSize:'14px !important',
      fontWeight:'400 !important',
      position:'absolute',
      left:'-6px',
    },
    '& .MuiFormControl-root':{
     padding:'0 20px',
     marginBottom:12,
    },
    '& .MuiIconButton-label':{
      opacity:0,
    },
    '& .MuiButtonBase-root.Mui-checked':{
      background:'#E6E7E9',
    },
    '& .Mui-checked ~ span.MuiTypography-root':{
        color:'#181819',
        fontWeight:'500 !important',
    },
    '& .MuiDialogActions-spacing':{
        background:'#1A1A23',
        padding:'18px 16px',
    },
    '& .MuiButton-root':{
      color:'rgba(255, 255, 255, 0.9)',
      fontSize:'14px',
      padding:'10px 12px',
      textTransform:'initial',
      border:'solid 1px rgba(230, 231, 233, 0.16)',
      marginLeft:12,
    },
    '& .MuiButton-textPrimary':{
      background:'#4A4DE6',
      borderColor:'#4A4DE6',
    },
 },
 customTol:{
    flex:'0 0 22%',
    position:'relative',
    '& .MuiFormControl-root':{
      padding:'0',
    },
    '& input':{
        background:'#1A1A23',
        border:'1px solid #242636',
        borderRadius:'4px',
        padding:'12px',
        fontSize:'14px',
        color:'#fff',
    },
    '& .MuiInput-underline:before':{
      display:'none',
    },
    '& .MuiInput-underline:after':{
      display:'none',
    },
    '& span':{
      position:'absolute',
      background:'#14151D',
      borderRadius:'0px 4px 4px 0px',
      width:'35px',
      height:'38px',
      right:'1px',
      top:'2px',
      textAlign:'center',
      padding:'8px 0',
      color:'rgba(255, 255, 255, 0.7)',
      fontSize:'14px',
    },
    '& .MuiFormControl-root.MuiTextField-root':{
      marginBottom:0,
    },
 },
 commingsoonTitle:{
  fontSize:60,
  fontWeight:600,
  display:'inline-block',
  width:'100%',
  textAlign:'center',
  padding:'200px 0',
  color:'#fff',
  background:'#14151d',
 },
 assetgroup:{
  marginBottom:12,
 },
 assetform:{
  '& .MuiFormLabel-root':{
    color:'rgba(255, 255, 255, 0.9)',
    fontSize:'14px',
    marginBottom:8,
  },
  '& .MuiFormControl-root.MuiTextField-root':{
    flex:'0 0 75%',
  },
 },
 assetLable:{
    background:'#14151D',
    borderRight:'1px solid #242636',
    padding:'8px 12px',
    display:'flex',
    alignItems:'center',
    '& img':{
     width:24,
     marginRight:5,
    },
 },
 redError:{
  fontSize:12,
  color:'#DD425A !important',
  marginTop:4,
 },
 swapUsdc:{
  padding:'24px 20px',
  background:'#1A1A23',
  borderRadius:'4px',
  paddingBottom:0,
  marginTop:16,
  marginBottom:50,
  '& .MuiTypography-root':{
   padding:0,
   border:'none',
   background:'#1A1A23',
   color:'rgba(255, 255, 255, 0.42)',
   fontSize:14,
   display:'inline-block',
   width:'100%',
   marginBottom:24,
   '& span':{
    float:'right',
    color:'rgba(255, 255, 255, 0.7)',
   },
  },
 },
 confirList:{
  '& .MuiList-root':{
    padding:0,
  },
  '& .MuiListItem-root':{
    padding:0,
    borderBottom:'solid 1px #242636',
    paddingBottom:12,
    paddingTop:12,
    display:'inline-block',
    width:'100%',
  },
  '& .MuiListItem-root .MuiTypography-root':{
      color:'rgba(255, 255, 255, 0.9)',
      fontSize:'14px',
      display:'flex',
      alignItems:"center",
      float:'left',
  },
  '& span':{
    float:'right',
    color:'rgba(255, 255, 255, 0.9)',
    fontSize:14,
    margin:'6px auto',
  },
  '& img':{
    marginRight:8,
  }
 },
 listFooter:{
    display:'inline-block',
    width:'100%',
    padding:'25px 20px',
    background:'#1A1A23',
    color:'rgba(255, 255, 255, 0.42)',
    '& .MuiTypography-root':{
    fontSize:14,
    },
    '& small':{
      float:'right',
      color:'rgba(255, 255, 255, 0.7)',
      fontSize:14,
      marginTop:2,
    },
    '& .MuiButtonBase-root.MuiButton-root':{
     margin:0,
     marginTop:24,
    },
    '& .MuiButtonBase-root.MuiButton-root:hover':{
     background:'#4A4DE6',
    },
    '& .makeStyles-loadingSwap-99':{
          padding: 0,
    },
 },
 cmnBtn:{
    color: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    display: 'inline-block',
    padding: '10px 0',
    fontSize: 16,
    background: '#4A4DE6',
    marginTop: 12,
    textAlign: 'center',
    fontWeight: 400,
    borderRadius: 4,
    textTransform: 'inherit'
 },
  poolsParent:{},
  sideBarPool:{
    paddingRight:24,
    '& .MuiPaper-rounded':{
       background:'#1A1A23',
       border:'solid 1px #242636',
       borderRadius:3,
       overflow:'hidden',
    },
  },
  headfilter:{
    padding: '20px 18px',
    background:'##1A1A23',
    fontWeight:500,
    fontSize:14,
    color:'#fff',
  },
  filterbox:{
    background:'#1A1A23',
    color:'#fff',
    padding:'16px 20px',
    border:'solid 1px #242636',
    '& .MuiFormControlLabel-root':{
      display: 'block',
      width:"100%",
      margin:0,
      marginBottom:18,
    },
    '& .MuiSvgIcon-root':{
     color:'#505370',
    },
    '& .MuiIconButton-root':{
      padding:'0 10px 0 5px',
    },
    '& .MuiFormControlLabel-label':{
      fontSize:14,
    },
    '& .Mui-checked .MuiSvgIcon-root':{
      color:'#4A4DE6',
    },
    '& .MuiTypography-root':{
      fontSize:14,
      marginBottom:14,
      width:'100%',
       color:'#fff',
    },
    '& .Mui-disabled':{
      color:'#949494 !important',
    },
    '& .MuiGrid-grid-xs-6':{
      paddingRight:8,
    }, 
  },
  selectSidebar:{
    position:'relative',
    width:'100%',
    '& .MuiInput-formControl':{
        marginTop: '0 !important',
        background:'rgba(230, 231, 233, 0.04)',
        borderRadius:4,
        width:'100%',
        color:'#fff',
        fontSize:'14px',
        marginBottom:10,
    },
    '& .MuiSelect-select':{
        padding:'12px 12px',
    },
    '& .MuiInputLabel-animated':{
      display:'none',
    },
  },
  calcSidebar:{
     position:'relative',
    '& .MuiInput-input':{
     background:'rgba(230, 231, 233, 0.04)',
    borderRadius:4,
    padding:'12px 12px',
    color:'#fff',
    fontSize:14,
    },
    '& span':{
      position:'absolute',
      padding:'9px 16px 9px 12px',
      background:'#14151D',
      border: '1px solid #242636',
      borderRadius: '0px 4px 4px 0px',
      right: 0,
    },
  },
  ratingStar:{
   marginLeft:'-5px',
   display:'flex',
    alignItems:'center',
   '& .MuiSvgIcon-root':{
    color:'#FFA000',
   },
   '& span':{
      fontSize:14,
      marginLeft:10,
   },
  },
  unactive:{
    color: 'rgba(255, 255, 255, 0.42) !important',
  },
  searchPools:{
    width:'360px',
    float:'right',
    position: 'relative',
    zIndex: 9999,
    marginTop:25,
    marginBottom:15,
    marginRight:20,
    '& .MuiFormControl-fullWidth':{
        width:'100%',
        margin: 0,
        background:'#1A1A23',
        border:'1px solid #242636',
        borderRadius:'4px',
        color:'#fff',
    },
    '& .MuiInputBase-root':{
      padding:'8px 0!important',
      fontSize:'14px',
      color:'rgba(255, 255, 255, 0.42)',
    },
    '& .MuiInputBase-input':{
     padding:'0 !important',
    },
   '& .MuiInputLabel-outlined':{
     fontSize:14,
     transform:'translate(14px, 8px) scale(1)',
     color:'#fff',
   },
   // '& .Mui-focused':{
   //  transform:'translate(14px, -7px) scale(1)',
   //  fontSize:12,
   // },
   '& .MuiSvgIcon-root':{
      position: 'absolute',
      top:'7px',
      right:'10px',
      color:'rgba(255, 255, 255, 0.42)',
      fontSize:'20px',
   },
  },
  PoolsSec:{
    '& .MuiToolbar-gutters':{
     display:'block',
     width:'100%',
    },
    '& .synHead':{
      fontSize:18,
      color: '#fff',
      marginTop:44,
      marginBottom:21,
    },
  },
  builder_header:{
    marginTop:"40px",
    width: '100%',
    display: 'table',
    '& .MuiTypography-h2': {
      float:'left',
      width:'auto',
      margin: '0px',
    },
    '&  .buildindex_btn': {
      float:'right',
    },
  },
  titlewithImg:{
    display:'flex',
    marginBottom:'25px',
    alignItems:'center',
    '& img':{
      width:'32px',
      marginTop:'0px',
      marginRight:'-15px',
    },
    '& h2': {
      display:'inline-block',
      fontSize:'16px',
      color:'rgba(255, 255, 255, 0.9)',
      fontWeight:'500',
      margin:'0px',
      marginLeft:'25px',
    },
  },
  firstBuilderbox:{
    marginBottom:'25px',
    '& .MuiPaper-root':{
      background:'transparent',
      boxShadow:'none',
      borderRadius:'0px',
    },
  },
  btnsBuilders:{
    textAlign:'right',
    '& .transparent_buil_btn': {
      backgroundColor:'transparent',
      marginTop:'0px',
      marginLeft:'15px',
      border: '1px solid #56575d',
    },
    '& .buil_btn': {
      marginTop:'0px',
      marginLeft:'15px',
    },
    '@media (max-width:767px)':{
      marginTop:'18px',
    }
  },
  rigthside_indexbox:{
    color:'#fff',
     marginTop:'35px',
    '& h5': {
      color:'rgba(255, 255, 255, 0.42);',
      textTransform:'uppercase',
      fontSize:'12px',
      marginBottom:'0px',
      fontWeight:'500',
    },
    '& p': {
      fontSize:'14px',
      color:'rgba(255, 255, 255, 0.9);',
      marginTop:'10px',
    }
  },
 divederTwobox: {
    width:'50%',
    display:'inline-block',
    '& h5': {
      color:'rgba(255, 255, 255, 0.42);',
      textTransform:'uppercase',
      fontSize:'12px',
      marginBottom:'0px',
      fontWeight:'500',
    },
    '& p': {
      color:'rgba(255, 255, 255, 0.9);',
      marginTop:'10px',
      fontSize:'14px',
    },
  },
  secondBuilderbox: {
    marginBottom:'30px',
    '& .MuiPaper-root':{
      backgroundColor:'transparent',
      boxShadow:'none',
      borderRadius:'0px',
    },
  },
compareTable:{ 
  display:'block',
},
btnEditTB:{
    textAlign:'right',
    '& .MuiButton-root':{
        background:'transparent',
        fontWeight:500,
        fontSize:12,
        color:'rgba(255, 255, 255, 0.9)',
        padding:0,
    },
    '& .MuiSvgIcon-root':{
        width:14,
        height:14,
        marginRight:5,
    },
    '@media (max-width:767px)':{
      marginTop:'-25px',
    }
},
poolname:{
  display: 'flex !important',
  width:'auto',
  float:'left',
  textAlign:'left',
 '& .coinIcons':{
     width:'25px',
     height:'25px',
     marginRight:'15px !important',
 }, 
},

compareBtnGroup:{
 '& .MuiButton-label':{
    fontWeight:500,
    textTransform:'initial',
 },
 '& .MuiButtonBase-root':{
  marginBottom:20,
  boxShadow:'none',
 },
 '@media (max-width:767px)':{
   maxWidth:'100%',
   flex:'100%',
 },
},
treeTable:{
  '@media (max-width:768px)':{
      width:785,
  },
},
chart:{
      marginBottom:0,
      background:'transparent',
  },
  pricehead:{
    display:'flex',
  },
  graphPrice:{
    marginBottom:50,
    '& .MuiList-padding':{
      marginTop:0,
      float:'right',
    },
    '& .MuiListItem-root':{
      marginBottom:0,
    },
    '& svg g text':{
      fill:'rgba(255, 255, 255, 0.42)',
    },
    '& root':{
      padding:0,
    },
  },
  chartFt:{
   paddingLeft:0,
   marginBottom:20,
   marginTop:30,
   display:'inline-block',
   '& span':{
      display:'flex',
      alignItems: 'center',
      fontSize:14,
      color:'rgba(255, 255, 255, 0.7)',
      float:'left',
      marginRight:20,
   },
   '& i':{
      background:'#DD425A',
      width:8,
      height:8,
      borderRadius: '50%',
      marginRight:5,
   },
  },
     walletAddr: {
      background: '#373636e6;',
      border: '0px;',
      padding: '10px 10px 11px;',
      position: 'relative',
      top: '-10px;',
      borderRadius: '4px;',
      minWidth: '300px;',
      color: '#fff;',
      '@media (max-width:767px)':{
        width:'100%',
    },
  },
  comparelist_table:{
    background: '#1A1A23',        
    border: '1px solid #242636',
    borderRadius:'8px',
    marginBottom:'36px',
    marginTop:10,
    overflow:'auto',
    width: '100%',    

    '& .MuiTablePagination-toolbar': {
      paddingLeft:'0px',
      textAlign:'right',
  },
    '& .MuiTablePagination-caption': {
        display:'inline-block',
    },
    '& .MuiTablePagination-actions': {
        display:'inline-block',
    },
    '& .MuiTablePagination-input': {

    },
    "& table":{
        '@media (max-width:768px)':{
            width:'995px',
        },
    },
    '& td':{
        borderBottomColor:'#242636',
    },
    '& th , & td, & .MuiTablePagination-root':{
        color:'rgba(255, 255, 255, 0.9);',
        fontWeight: 500,
        fontSize: 14,
        padding:'18px 20px',
        background:'#14151D',
        borderBottomColor:'#242636',
    },
    '& span':{
            position:'relative',
            maxWidth:10,
            display:'inline-block'
    },
    '& thead th':{
        background:'#14151D',
        borderBottomColor:'#242636',
        fontWeight:'400',
        position:'relative',
    },
    // '& thead th:first-child':{
    //     minWidth: '190px',
    //     },
    '& tbody td':{
        background:'#14151D',
        borderBottomColor:'#242636',
        fontWeight:'400',
        padding:'8px 20px',
        height:'56px',
        paddingRight:0,
    },
    '& tbody td .coinIcons':{
      display:'inline-block',
      marginRight:'-16px',
      verticalAlign:'middle',
  },
  '& tbody td .moreValue':{
      display:'inline-block',
      marginLeft:'26px',
      verticalAlign:'middle',
  },
  '& svg.MuiSvgIcon-root.down':{
      position: 'absolute',
      left: 0,
      bottom: 0
  },
  '& svg.MuiSvgIcon-root.disabled' :{
      color:'#6c6c6c',
      cursor:'pointer'
  } ,
  '& .lessvalue ':{
      color:'#DD425A'
  },
  '& .greatervalue':{
      color:'#4CAF50'
  },
  '& svg.MuiSvgIcon-root,& svg.MuiSvgIcon-root ':{color:'#fff'},
  '@media (max-width:768px)':{
      overflow:'auto',
      marginTop:'0',
      marginBottom:'0px',
  },
 
  '& .MuiTableCell-root span':{
     position:'absolute',
     top:'14px',
  },
  '& .MuiTableCell-root span.MuiButton-label':{
          width: '100%',
          display: 'inherit',
          alignItems: 'inherit',
          justifyContent: 'inherit',
          maxWidth: '100%',
          position: 'initial',
  },

  '& a':{
      textDecoration:'none',
      color:'rgba(255, 255, 255, 0.9)',
  },
  '& .accordioncls':{
   display:'none',
   '& td.MuiTableCell-root': {
          padding:'0px',
      },
  },
  '& .open.cellrow':{
  display:'table-row',
  },
  '& .MuiTableRow-root':{
      cursor:'pointer',
  },
  },

}));
