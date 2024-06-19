import {  makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme : any) => createStyles({
    root:{
      paddingTop:'68px',
      position: 'initial',
      '& .MuiContainer-fixed':{
          maxWidth:'1280px',         
      },
      '& .MuiContainer-root':{
        '@media (max-width:768px)':{
              paddingTop:'30px',
        },
      },

    },
    portfolioListOpen:{
      position:'relative',
      '& .MuiList-root':{
        padding:'0',
        display:'flex',
        marginTop:'24px !important',
        flexWrap: 'wrap',
      },
      '& .MuiListItem-root':{
        padding:'0',
        float:'left',
        width:'32%',
        textAlign:'left',
        fontSize:'14px !important',
        color:'#fff',
        marginBottom:'8px',
        alignItems:'baseline',
      },
      '& small':{
        display:'inline-block',
        width:'8px !important',
        height:'8px !important',
        marginRight:'4px !important',
        borderRadius:'50%',
        padding:'4px',
      },
      '& .extra--item':{
        position:'absolute',
    zIndex:'111',
    right:'0px',
    top:'20px',
    color:'#fff',
    padding:'20px 20px 10px',
    left:'0px',
    width:'100%',
    backgroundColor:'#202232',
    borderRadius:'4px',
    visibility:'visible',
    opacity:'2',
    transition:'all .3s ease-in-out',
    boxShadow:'0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 0%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
    }
    },
    dashtooltip:{
       '& .toolTip':{
         background:'#000',
       },
    },
    addtionalList:{
     width:'100% !important',
    marginBottom:'16px !important',
    },
    addtionalListOpen:{
      display:'none',
    },
   
    arrowToggle:{
     width:'10px !important',
     cursor:'pointer',
     position:'absolute',
     right:'14px',
     top:'-50px',
    },
    breadcrumbsBar:{
        width:'100%',
        borderBottom:'solid 1px #1A1A23',
        background:'#1A1A23',
        boxShadow:'0px 1px 0px #27282E',
        marginTop:'0',
        padding:'0 16px',
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
        padding:'0px 0',
      },
      '& li.MuiBreadcrumbs-li p.active' :{
        borderBottom: '1px solid #fff',
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.9)',
      },
      '& li.MuiBreadcrumbs-li p' :{
        padding:'20px 15px',
        borderBottom: '1px solid #1a1a23',
        fontSize: '14px',
        cursor:'pointer',

        '@media (max-width:768px)':{
          padding:'15px 10px',
        },
      },
    },
    breadcrumbsinner:{
      padding: '0px 0',
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
    dashboardcontetn:{
      flex:'0 0 65%',
      '& title':{
        color:'rgba(255, 255, 255, 0.9)',
        fontSize:'20px !important',
        fontWeight: '500 !important',
        margin: 0,
      }
    },
    title:{
      color:'rgba(255, 255, 255, 0.9)',
      fontSize:'20px !important',
      fontWeight: 500,
      margin: 0,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    typograph:{
      color:'rgba(255, 255, 255, 0.42)',
      fontSize:'14px !important;',
      marginTop:'12px !important;',
      display:'inline-block',
      width:'100%',
      maxWidth:'100% !important',
      marginBottom:'15px',
    },
    dashboardwelcome:{
      background:'#1a1a23',
      border: '1px solid #242636', 
      borderRadius:'8px !important;',
      padding:'40px 20px 40px 32px !important;',
      display:'flex',
      marginTop:'34px !important;',
      alignItems: 'center',
      '@media (max-width:768px)':{
        display:'inline-block',
        textAlign:'left',
        marginTop:'0 !important',
        padding: '25px !important;',
      },
      '& .makeStyles-blicon-7':{
        textAlign:'right',
      },
    },
    discoverywelcome:{      
      background:'#1a1a23',
      border: '1px solid #242636',
      borderRadius:'8px !important;',
      padding:'40px 20px 40px 32px !important;',
      display:'flex',
      marginTop:'34px !important;',
      '@media (max-width:768px)':{
        display:'inline-block',
        textAlign:'left',
        marginTop:'0 !important',
        padding: '25px !important;',
      },
      '& .makeStyles-blicon-7':{
        textAlign:'right',
      },
    },
    // dashboardcontetn:{
    //   flex:'0 0 65%'
    // },
    blicon:{
      flex:'0 0 35%',
      textAlign:'right',
      '@media (max-width:768px)':{
          textAlign: 'left',
          marginTop: '20px !important;',
        },
    },
    
    welcomeContent:{

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
     fontSize:'20px !important',
     color:'rgba(255, 255, 255, 0.9)',
     marginTop:'48px !important',
    //  marginBottom:'24px !important',
     fontWeight:500 ,
     width: '100%',
     border: '1px solid #242636',
     padding: '10px 20px',
     borderRadius: '8px 8px 0 0',
     
      '@media (max-width:768px)':{
         marginTop: '20px !important;',
      },
      '& .arrow--toggle.open':{
        transform: 'rotate(0deg);',
        transition:' all 0.5s',
      },
     '& .arrow--toggle':{
       // top: '11px;',
        float: 'right',
        position: 'relative;',
        fontSize: '35px !important;',
        transform: 'rotate(180deg);',
        cursor:'pointer',
        transition:' all 0.5s',
     },
     '& .discoveryiconn': {
       fontSize:'20px !important',
       marginBottom: '-3px',
     }
    },
    headingBox:{
      width: '100%',
      border: '1px solid #242636',
      padding: '10px 20px',
      borderRadius: '8px 8px 0 0',
      marginTop:'48px !important',
      display:'flex',
      alignItems:'center',
      justifyContent: 'space-between',
      color:'rgba(255, 255, 255, 0.9)', 

    '@media (max-width:576px)':{
      padding: '10px 10px 10px 20px',
    },

    '& .leftsidedata':{
      display:'flex',
      alignItems:'center',
    },
    '& .rightsidedata':{
      display:'flex',
      alignItems:'center',
    },
    '& .subtitle':{
     fontSize:'16px !important',
     color:'rgba(255, 255, 255, 0.9)',     
    //  marginBottom:'24px !important',
     fontWeight:500 ,    
     
      '@media (max-width:768px)':{
         marginTop: '0px !important;',
      },           
    },
    '& .totalValue':{
      fontSize:'16px !important',
      marginRight: '12px',
    },
    '& .arrow--toggle.open':{
      transform: 'rotate(0deg);',
      transition:' all 0.5s',
    },
    '& .arrow--toggle':{
      // top: '11px;',
       float: 'right',
       position: 'relative;',
       fontSize: '35px !important;',
       transform: 'rotate(180deg);',
       cursor:'pointer',
       transition:' all 0.5s',
    },
    '& .discoveryiconn': {
      fontSize:'20px !important',
      marginRight: '8px',
      // marginBottom: '-3px',
    }
  },
    subtitle1:{
      fontSize:'20px !important',
      color:'rgba(255, 255, 255, 0.9)',
      marginTop:'48px !important',
      marginBottom:'24px !important',
      fontWeight:500 ,
      width: '100%',      
      
       '@media (max-width:768px)':{
          marginTop: '20px !important;',
       },
     },
     subtitleTrans:{
      fontSize:'20px !important',
      color:'rgba(255, 255, 255, 0.9)',     
      marginBottom:'24px !important',
      fontWeight:500 ,
      width: '100%',      
      
       '@media (max-width:768px)':{
          marginTop: '10px !important;',
       },
     },
    boxgrid_portfolio:{
      background:'#1A1A23',
      border:'1px solid #242636',
      borderRight: 'none',
      borderRadius:'8px 0 0 8px',
      padding:'20px !important',
      paddingTop:'10px !important',
      height: '100%',       
      
    },
    boxgrid_portfolio1:{
      background:'#1A1A23',
      border:'1px solid #242636',
      borderRight: 'none',
      borderRadius:'8px',
      padding:'20px !important',
      paddingTop:'10px !important',
      height: '100%',      
    },
    boxgridLeft:{
      background:'#1A1A23',
      border:'1px solid #242636',
      borderRight: 'none',
      borderRadius:'8px 0 0 8px !important',
      padding:'20px !important',
      paddingTop:'10px !important',
      height:'100%',

      '@media (max-width:768px)':{
        borderRadius:'8px 8px 0px 0px !important',
     },
    },
    boxgrid:{
      background:'#1A1A23',
      border:'1px solid #242636',
      borderRight: 'none',
      borderRadius:'8px !important',
      padding:'20px !important',
      paddingTop:'10px !important',
      height:'100%',
    },
    boxgridMid:{
      background:'#1A1A23',
      border:'1px solid #242636',
      borderRadius:'0px',
      padding:'20px !important',
      paddingTop:'10px !important',
      height:'100%',
      },
    tname:{
     fontSize:'16px !important',
     color:'rgba(255, 255, 255, 0.9)',
     display:'flex',
     alignItems:'center',
     '& img':{
      marginRight:'10px !important',
      marginTop:'8px !important',
      marginBottom:'8px !important',
     },
    },
    total:{
      fontSize:'16px !important',
      color:'rgba(255, 255, 255, 0.7)',
      display:'inline-block',
      width:'100%',
      '& img':{
        float:'right',
        height:'29px !important',
      }
   },
   topprice:{
    fontSize:'14px !important',
    color:'#4CAF50',
    float:'right',
    '& svg':{
      verticalAlign:'middle'
    }
   },
   commingsec:{
    background:'#242636',
    padding:'20px !important',
    display:'flex',
    borderRadius:'0px 8px 8px 0px',
    height:'100%',

    '@media (max-width:768px)':{
      borderRadius:'0px 0px 8px 8px',
   },
   },
   commingtitle:{
    fontSize:'16px !important',
    color:'rgba(255, 255, 255, 0.9)',
   },
   commingcontent:{
    paddingRight:'30px !important',
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
      '&  .MuiDialog-paper':{
        overflow:'inherit !important',
      },
     '& .MuiDialog-paperWidthSm':{
      background:'#14151D',
      width:'460px !important',
     },

     '& label.MuiInputLabel-formControl':{
      color:'#fff',
      position: 'relative',
      marginBottom: '5px !important',
      marginTop: '20px !important',
     },

     '& .MuiInputBase-input':{
        height:'40px !important',
        borderRadius: '4px !important',
        border :'1px solid #242636',
        padding: '0px 10px',
        marginBottom:'1px',
        color:'#fff',
        fontSize:'14px !important',
        marginTop:'0px !important',
      },

      '& .MuiInputBase-root': {
        marginTop: '0px !important',
      },
     
    },
    modalDialogLiquiduty:{
      '&  .MuiDialog-paper':{
        overflow:'inherit !important',
      },
     '& .MuiDialog-paperWidthSm':{
      background:'#14151D',
      width:'auto',
     },

     '& label.MuiInputLabel-formControl':{
      color:'#fff',
      position: 'relative',
      marginBottom: '5px !important',
      marginTop: '20px !important',
     },

     '& .MuiInputBase-input':{
        height:'40px !important',
        borderRadius: '4px',
        border :'1px solid #242636',
        padding: '0px 10px',
        marginBottom:'1px !important',
        color:'#fff',
        fontSize:'14px !important',
        marginTop:'0px !important',
      },

      '& .MuiInputBase-root': {
        marginTop: '0px',
      },
     
    },
    modalDialogSwap:{
      '&  .MuiDialog-paper':{
        overflow:'inherit !important',
      },
     '& .MuiDialog-paperWidthSm':{
      background:'#14151D',
      width:'600px !important',
     },

     '& label.MuiInputLabel-formControl':{
      color:'#fff',
      position: 'relative',
      marginBottom: '5px !important',
      marginTop: '20px !important',
     },

     '& .MuiInputBase-input':{
        height:'40px !important',
        borderRadius: '4px !important',
        border :'1px solid #242636',
        padding: '0px 10px',
        marginBottom:'1px !important',
        color:'#fff',
        fontSize:'14px !important',
        marginTop:'0px',
      },

      '& .MuiInputBase-root': {
        marginTop: '0px',
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
    modelbodycontant:{
      color:'#fff',
    },
    modelbody:{
      padding:'20px',
      paddingTop:'4px !important',
      paddingBottom:'4px !important',
     '& .MuiListItem-root':{
        background:'#1A1A23',
        borderRadius:'4px',
        marginTop:'16px !important',
        marginBottom:'16px !important',
        color:'#fff',
        position:'relative',
     },
     '& .MuiChip-root':{
        position:'absolute',
        left:'77px !important',
        height:'20px !important',
        fontSize:'10px !important',
        textTransform:'uppercase',
        color:'#181819',
        background:'#00BDCB',
     },
    },
    brfullbtn:{
     color:'rgba(255, 255, 255, 0.9)',
     fontSize:'16px !important',
     border:'solid 1px #32323a',
     textAlign:'center',
     padding:'10px 0',
    },
    modelfooter:{
     paddingRight:'20px !important',
     paddingLeft:'20px !important',
    },
    modelfooterlink:{
      color:'#fff',
      textAlign:'center',
      marginTop:'15px !important',
      fontSize:'14px !important',
      '& .MuiButton-root':{
       display:'block',
       marginTop:'5px !important',
       width:'100%',
       color:'#4A4DE6',
       textTransform:'inherit',
       marginBottom:'25px !important',
      },
    },
   highestvol:{
    '& .MuiPaper-roo':{
      paddingBottom:'14px !important',
    },
   },
   inputRoot:{

   },
   inputInput:{
     
    },
    formControl:{

    },
    valuefolio:{
      fontSize: '24px !important',
      color: 'rgba(255, 255, 255, 0.9)',
      marginTop: '5px',
      marginBottom:'24px',
      display:'flex',
      alignItems:'center',
      '& small':{
          fontSize:'14px !important',
          color:'#4CAF50',
          marginLeft:'5px !important',
      },
      '@media screen and (max-width: 576px)':{
        marginTop: '0px',
        marginBottom:'0px',
        fontSize: '20px !important',
        marginLeft: 12,
      },
    },
    prottitle:{
      fontSize:'16px !important',
      color:'rgba(255, 255, 255, 0.9)',
      marginTop:'20px !important',
      marginBottom:'20px !important',
    },
    portfolio:{
        // marginTop: '102px !important',
        paddingLeft:'24px !important',
        '& .nodata':{
          textAlign:'center',
          padding: '50px 0',
          fontSize: '20px !important',
          color:'rgba(255, 255, 255, 0.7)',
        },
        '@media (max-width:768px)':{
          paddingLeft:'0 !important',
          marginTop: '30px !important',
       },
    },
    graphtitle:{
      '& .makeStyles-subtitle-10':{
        marginTop:'38px !important',
      },
      '& .nodata':{
         position:'relative',
      },
      '& .nodata p':{
        position:'absolute',
        color:'rgba(255, 255, 255, 0.32)',
        fontSize: '14px !important',
        right:'50%',
        bottom:'25px !important',
      },
      '& img':{
          width:'100%',
        },
    },
    bttitle:{
      fontSize:'12px !important',
      textTransform:'uppercase',
      color:'rgba(255, 255, 255, 0.42)',
      marginTop:'0 !important',
      marginBottom: 0,
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

   discoverypullLeft:{
      float:'left',    
    '@media (max-width:768px)':{
        float:'none',
        display:'flex',
        alignItems:'center',
        width: '100%',
        marginBottom: 12,
     },    
    },
    discoverypullRight:{
      float:'right',
      '@media (max-width:768px)':{
        float:'none',        
     },
    },
    graphBtn:{
      display:'inline-block',
      padding: '0',
      border:'solid 1px #56575d',
      marginTop:'0',
      borderRadius:'4px',
      marginLeft:'30px !important',
	  cursor:'pointer',
      '@media (max-width:768px)':{
         border:'0px none',
      },
      '& .MuiListItem-root':{
        display:'inline-block',
        width:'auto',
        color:'#fff',
        fontSize:'14px !important',
        borderRight:'solid 1px #56575d',
        marginRight:'-1px',
        '@media (max-width:768px)':{
           border:'solid 1px #56575d',
           fontSize:'12px !important',
           padding:'10px !important',
        },
		'&:hover':{
			background:'#eee',
			color:'#000',
			cursor:'pointer'
		},
		
      },
     '& .MuiListItem-root.active':{
			background:'#eee',
			color:'#000'
		}
    },
    portfolioList:{
      position:'relative',
     '& .MuiList-root':{
        padding:'0',
        display:'flex',
        marginTop:'24px !important',
        flexWrap: 'wrap',
      },
      '& .MuiListItem-root':{
        padding:'0',
        float:'left',
        width:'32%',
        textAlign:'left',
        fontSize:'14px !important',
        color:'#fff',
        marginBottom:'8px',
        alignItems:'baseline',
      },
      '& small':{
        display:'inline-block',
        width:'8px !important',
        height:'8px !important',
        marginRight:'4px !important',
        borderRadius:'50%',
        padding:'4px',
      },
      '& .extra--item':{
        top:'20px',
     left:'0px',
     padding:'20px 20px 10px',
     right:'0px',
     position:'absolute',
height:'100px',         }
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
      columnGap:'50px !important',
      flexWrap:'inherit',
    },
    '& .MuiPaper-rounded':{
    background:'transparent',
    },
   },
   interactionHead:{
      fontSize: '14px',
      color:'#fff',
      marginTop:'47px !important',
      marginBottom:'35px !important',
      '& small':{
       display:'block',
       height:'20px !important',
      },
   },
   poolsInterction:{
      '& .MuiGrid-root':{
          marginTop:'0',
          paddingLeft:'0',
      },
     
      '& .makeStyles-boxgrid-11':{
       borderRadius:'8px !important',
      },
      '& .MuiPaper-rounded':{
          borderRadius:'8px !important',
          border:'1px solid #242636',
          background:'#1A1A23',
      },
   },
   poolDetailsbar:{
    display:'flex',
    color:'#fff',
    '& .MuiTypography-h1':{
     fontSize:'28px !important',
     color:'#fff',
     marginBottom:'12px !important',
     marginTop:'30px !important',
    },
   },
   poolDetailsbox:{
    display:'flex',
    float:'right',
    marginTop:'30px !important',
    '& .MuiTypography-root':{
      background:'#1A1A23',
      border:'1px solid #242636',
      padding:'14px 20px',
      color:'rgba(255, 255, 255, 0.42)',
      fontSize:'12px !important',
    },
    '& small':{
      display:'block',
      color:'#4CAF50',
      fontSize:"18px !important",
      marginTop:'8px',
    },
   },
   lightgreen:{
    background:'#00BDCB',
    height:'24px !important',
    marginRight:'10px !important',
    '& .MuiChip-label':{
      fontWeight:'500 !important',
    },
   },
   opcitygreen:{
    background:'rgba(0, 189, 203, 0.15)',
    color:'#00BDCB',
    height:'24px !important',
    marginRight:'10px',
   },
   colorwhite:{
    color:'white',
   },
   graphImg:{
     '& .hidegraph':{
      minHeight: '300px',
      position:'relative',
     },
    '& img':{
      //width:'100%',
      //marginTop:'35px !important',
    }
   },
  namesValut:{

  },
  vaultTable:{
    columnGap:'25px !important',
    flexWrap:'inherit',
    '& .namesValut':{
      display:'flex',
    },
    '& .namesValut .MuiTypography-root':{
        color:'rgba(255, 255, 255, 0.9)',
        fontSize:'14px !important',
        marginLeft:'8px !important',
        marginRight:'4px !important',
   },
   '& .namesValut small':{
      display:'block',
      color:'rgba(255, 255, 255, 0.42)',
      fontSize:'12px !important',
    },
    '& .namesValut .MuiChip-root':{
        color:'#00BDCB',
        height:'24px !important',
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
      height:'56px !important',
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
    borderRadius:'8px !important',
    marginTop:'20px !important',
    color:'rgba(255, 255, 255, 0.9)',
    paddingBottom:'20px !important',
  }, 
  tabinnercontent1:{
    background:'#1A1A23',
    border:'1px solid #242636',
    padding:'24px 20px',
    borderRadius:'8px !important',
    color:'rgba(255, 255, 255, 0.9)',
    paddingBottom:'10px !important',
  }, 
  tabcontent:{
   '& .MuiTypography-root':{
      color:'rgba(255, 255, 255, 0.9)',
      fontSize:'14px !important',
   },
   '& .MuiTypography-root small':{
    display:'block',
    fontSize:'12px !important', 
    color:'rgba(255, 255, 255, 0.42)',
    marginBottom:'5px !important',
    textTransform:'uppercase',
   },
   '& span':{
     display:'flex',
     marginRight:'4px !important',
    },
   '& .MuiLink-root':{
    textDecoration:'underline'
   },
    '& .MuiGrid-root':{
      marginBottom:'0px',
    },
    '& .MuiGrid-container':{
      marginBottom:'30px !important',
    },
  },
  copytext:{
    textDecoration:'underline',
    display:'flex',
    alignItems:'center',
    '& img':{
      marginLeft:'8px !important',
    },
  },
  descrptiontab:{
    paddingRight:'0',
    marginBottom:'0px !important',
    '& b':{
    fontWeight:'400',
    color:'rgba(255, 255, 255, 0.42)',
    marginLeft:'5px',
    },
  },
  smContract:{
   '& .MuiTypography-root':{
       marginTop:'20px !important',
       marginBottom:'20px !important',
       fontSize:'14px !important',
       color:'rgba(255, 255, 255, 0.9)',
   },
  },
  smcontractBox:{
    background:'#1A1A23',
    border:'solid 1px #1A1A23',
    borderRadius:'8px !important',
    '& .MuiTypography-root':{
      marginTop:'0 !important',
      marginBottom:'3px !important',
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
      width:"613px !important",
      background:'#1a1a23',
      borderRadius: '8px 8px 0px 0px',
   },
   '& .MuiBox-root':{
     marginTop:'0',
     borderRadius:'0',
     padding:'0 ',
   },
   '& .MuiAppBar-positionStatic':{
     paddingLeft:'20px !important',
     paddingRight:'20px !important',
   },
   '& .MuiButtonBase-root.MuiTab-root':{
     height:42,
   },
   '& .MuiFormLabel-root.MuiInputLabel-root':{
      marginTop:'24px !important',
   },
   '& .MuiTypography-root':{
      background:'#14151D',
      border:'1px solid #242636',
      borderRadius:'0px 4px 4px 0px',
      color:'rgba(255, 255, 255, 0.7)',
      alignItems:'center',
      fontSize:'14px !important',
      padding:'0 20px',
   },
   '& .MuiInputBase-input.MuiInput-input':{
      padding:'4px 12px',
      fontSize:'14px !important',
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
  fontSize:'14px !important',
  },
  "& img":{
    padding:'11px 9px',
    border:'solid 1px #3e4050',
    borderRadius:'4px ',
    margin:'0 15px !important',
  },
  },
  green:{
   color:'#4CAF50',
  },
  drawerhead:{
    background:'#23242e',
    color:'#fff', 
    fontSize:'18px !important',
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
        fontSize:'14px !important',
        color:'rgba(255, 255, 255, 0.9)',
        marginBottom:'8px !important',
        marginTop:'28px !important',
    },
    '& small':{
        color:'rgba(255, 255, 255, 0.42)',
        fontSize:'12px !important',
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
      paddingLeft:'12px !important',
      height:'33px !important',
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
        fontSize:'16px !important',
        color:'rgba(255, 255, 255, 0.9)',
        textTransform:'inherit',
        fontWeight:'400 !important',
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
    marginTop:'28px !important',
  },
  mb30:{
    marginTop:'30px !important',
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
  marginTop:'32px !important',
  '& .MuiTypography-root':{
    float:'left',
    fontWeight: '500 !important',
    fontSize:'20px !important',
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
    marginLeft:'0px',
    marginRight: '12px !important',
    marginTop:'0',
    '& .MuiSvgIcon-root':{
      width:'15px',
      color:'#fff',
    },
    '& button.MuiSvgIcon-root:last-child':{
      marginRight: '25px !important',
    },
  },
  '& .MuiButtonBase-root svg':{
        right: 'inherit',
        marginTop: '0px',
  },
  '& svg' :{
    marginTop: '5px !important',
  },
 },
 buttonrightside: {
  marginRight:'25px !important',
 },
 swapboxed:{
  background:'#1A1A23',
  display:'inline-block',
  width:'100%',
  marginTop:'20px !important',
  border:'1px solid #242636',
  borderRadius:'8px',
  padding:'0 20px',
  marginBottom:'50px !important',
  paddingBottom:'24px !important',
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
    fontSize:'14px !important',
    paddingRight:'32px !important',
  },
  '& .MuiSvgIcon-root':{
    color:'rgba(255, 255, 255, 0.9)',
    right:'7px !important',
    '& :before':{
     width:'8990px',
    },
  },
  '& .MuiSelect-root img':{
   marginRight:'8px !important',
  },
 },
 swapbalance:{
  display:'inline-block',
  width:'100%',
  marginTop:'24px !important',
  padding:'24px 20px 12px 20px',
  '& .MuiTypography-root':{
    fontSize:'14px !important',
    marginBottom:'12px !important',
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
  paddingRight:'20px !important',
  paddingLeft:'20px !important',
 },
 innercalc:{
  float:'left',
  display:'flex',
  '& .MuiTypography-root':{
   fontSize:'20px !important',
   color:'rgba(255, 255, 255, 0.9)',
  },
  '& img':{
   marginRight:'5px !important',
  },
 },
 innerethcalc:{
 float:'right',
 '& .MuiTypography-root':{
   fontSize:'18px !important',
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
  fontSize:'14px !important',
  marginTop:'12px !important',
  paddingRight:'20px !important',
  paddingLeft:'20px !important',
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
  marginTop:'24px !important',
  background:'#1A1A23',
  padding:'24px 20px 12px 20px',
  '& .MuiTypography-root':{
    fontSize:'14px !important',
    marginBottom:'12px !important',
  }
 },
 swapModel:{
  padding:'0',
  paddingTop:'24px !important',
 },
 fullPrimarybtn:{
  background:'#4A4DE6',
  borderRadius:'4px',
  fontSize:'16px !important',
  color:'#fff',
  textTransform:'inherit',
  display:'inline-block',
  width:'100%',
  paddingTop:'13px !important',
  paddingBottom:'13px !important',
  marginTop:'12px !important',
  '& .MuiButtonBase-root.MuiButton-root.MuiButton-text:hover':{
  backgroundColor:'red',
  },
 },
 swapConfirmbtn:{
  background:'#4A4DE6',
  borderRadius:'4px',
  fontSize:'16px !important',
  color:'#fff',
  textTransform:'inherit',
  display:'block',
  width:'150px !important',
  margin:'15px auto',
  '& .MuiButtonBase-root.MuiButton-root.MuiButton-text:hover':{
  backgroundColor:'#4A4DE6',
  },
 },
 loadingSwap:{
  width:'280px !important',
  display:'table',
  margin:'0 auto',
  color:'rgba(255, 255, 255, 0.9)',
  fontSize:'16px !important',
  textAlign:'center',
  paddingTop:'50px !important',
  paddingBottom:'0px',
  '& img':{
    marginBottom:'23px !important',
  },
  '& .MuiTypography-root':{
    padding:'0',
  },
 },
 swapLaststeap:{
  textAlign:'center',
  color:'rgba(255, 255, 255, 0.9)',
  '& img':{
    marginBottom:'28px !important',
  },
 },
 lastCalcswap:{
  display:'flex',
  justifyContent:'center',
  color:'rgba(255, 255, 255, 0.9)',
  fontSize:'20px !important',
  columnGap:'20px !important',
  marginTop:'15px !important',
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
    left:'91px !important',
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
  fontSize:'20px !important',
  color:'rgba(255, 255, 255, 0.9)',
  marginTop:'74px !important',
  marginBottom:'20px !important',
 },
 valueGroup:{
  display:'flex',
  alignItems:'center',
  '& img':{
   marginBottom:'5px !important',
   marginRight:'8px !important',
  },
 },
 subtitleTab:{
    marginTop:'20px !important',
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
      marginTop:'3px !important',
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
  height:'30px !important',
  display:'inline-block',
  width:'100%',
 },
 sharePrice:{
  display:'flex',
  position:'absolute',
  marginTop:'30px !important',
  '& .MuiTypography-root':{
  color:'rgba(255, 255, 255, 0.9)',
  fontSize:'28px !important',
  display:'flex',
  alignItems:'center',
  },
  '& span':{
    fontSize:'14px !important',
    marginLeft:'12px !important',
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
      width:'130px !important',
      padding:'6px 12px',
      marginLeft:'12px !important',
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
      fontSize:'16px !important',
      fontWeight:'500 !important',
      color:'rgba(255, 255, 255, 0.9)',
      marginBottom:'12px !important',
  },
  '& label':{
    flex:'0 0 20%',
    color:'rgba(255, 255, 255, 0.9)',
    fontSize:'14px !important',
    fontWeight:'400 !important',
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
    marginLeft:'-1px !important',

  },
  '& span img':{
    margin:'8px 0',
    marginTop:9,
  },
  '& input':{
    background:'#1A1A23',
    border:'1px solid #242636',
    borderRadius:'4px',
    fontSize:'14px !important',
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
  marginBottom:'16px !important',
 },
 InfoHead:{
 },
 settingPop:{
  '& .MuiTypography-root':{
    fontSize:'18px !important',
    fontWeight:'500 !important',
    color:'rgba(255, 255, 255, 0.9)',
   },
   '& .MuiFormLabel-root':{
    color:'rgba(255, 255, 255, 0.9)',
    fontSize:'14px !important',
    marginBottom:'12px !important',
   },
   '& .MuiFormGroup-root':{
      marginBottom:'0px !important',
      flexDirection:'initial',
    },
    '& .MuiFormControlLabel-root':{
        position:'relative',
        margin:0,
    },
    '& .MuiIconButton-root':{
        marginLeft:0,
        width:'101px',
        marginRight:'12px !important',
        background:'#1A1A23',
        border:'1px solid #242636',
        borderRadius:'4px',
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
     marginBottom:'12px !important',
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
      fontSize:'14px !important',
      padding:'10px 12px',
      textTransform:'initial',
      border:'solid 1px rgba(230, 231, 233, 0.16)',
      marginLeft:'12px !important',
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
        fontSize:'14px !important',
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
      fontSize:'14px !important',
    },
    '& .MuiFormControl-root.MuiTextField-root':{
      marginBottom:0,
    },
 },
 commingsoonTitle:{
  fontSize:'60px !important',
  fontWeight:600,
  display:'inline-block',
  width:'100%',
  textAlign:'center',
  padding:'200px 0',
  color:'#fff',
  background:'#14151d',
 },
 assetgroup:{
  marginBottom:'12px !important',
 },
 assetform:{
  '& .MuiFormLabel-root':{
    color:'rgba(255, 255, 255, 0.9)',
    fontSize:'14px !important',
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
  fontSize:'12px !important',
  color:'#DD425A !important',
  marginTop:4,
 },
 swapUsdc:{
  padding:'24px 20px',
  background:'#1A1A23',
  borderRadius:'4px',
  paddingBottom:0,
  marginTop:'16px !important',
  marginBottom:'50px !important',
  '& .MuiTypography-root':{
   padding:0,
   border:'none',
   background:'#1A1A23',
   color:'rgba(255, 255, 255, 0.42)',
   fontSize:'14px !important',
   display:'inline-block',
   width:'100%',
   marginBottom:'24px !important',
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
    paddingBottom:'12px !important',
    paddingTop:'12px !important',
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
    fontSize:'14px !important',
    margin:'6px auto',
  },
  '& img':{
    marginRight:'8px !important',
  }
 },
 listFooter:{
    display:'inline-block',
    width:'100%',
    padding:'25px 20px',
    background:'#1A1A23',
    color:'rgba(255, 255, 255, 0.42)',
    '& .MuiTypography-root':{
    fontSize:'14px !important',
    },
    '& small':{
      float:'right',
      color:'rgba(255, 255, 255, 0.7)',
      fontSize:'14px !important',
      marginTop:2,
    },
    '& .MuiButtonBase-root.MuiButton-root':{
     margin:0,
     marginTop:'24px !important',
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
    fontSize: '16px !important',
    background: '#4A4DE6',
    marginTop: '12px !important',
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
       marginBottom:'30px',
    },
    '@media (max-width:768px)':{
        paddingRight: '0px',
        maxWidth: '100%',
        flexBasis: '100%',
      },
  },
  headfilter:{
    padding: '20px 18px',
    background:'##1A1A23',
    fontWeight: 500,
    fontSize:'14px !important',
    color:'#fff',
  },
  filterbox:{
    background:'#1A1A23',
    color:'#fff',
    padding:'16px 20px',
    border:'solid 1px #242636',
      '& .MuiInput-underline:after':{
      border: '#22222b !important',
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before':{
      border: '#22222b',
      },
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
      fontSize:'14px !important',
    },
    '& .Mui-checked .MuiSvgIcon-root':{
      color:'#4A4DE6',
    },
    '& .MuiTypography-root':{
      fontSize:'14px !important',
      marginBottom:'14px !important',
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
        marginBottom:'10px !important',
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
    fontSize:'14px !important',
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
      fontSize:'14px !important',
      marginLeft:'10px !important',
   },
  },
  unactive:{
    color: 'rgba(255, 255, 255, 0.42) !important',
  },
  subtitleTopBar:{
    // display:'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // marginTop: '14px',
    marginBottom:'24px',
    // width: '100%',

    '& .subtitle1':{
      fontSize:'20px !important',
      color:'rgba(255, 255, 255, 0.9)',
      fontWeight:500 ,
      width: '100%',      
      
       '@media (max-width:768px)':{
          marginTop: '0px !important;',
          marginBottom: '20px',
       },
     },
  
  '@media screen and (max-width: 576px)':{
    display:'block',
    marginBottom:'0px',
  },

  },
  searchPools:{
    width:'100%',
    maxWidth: '360px',
    float:'right',
    position: 'relative',
    zIndex: 9,
    marginTop:0,
    //marginBottom:'20px',
    marginRight:0,

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
      fontSize:'14px !important',
      color:'rgba(255, 255, 255, 0.42)',
      minHeight:'38px',
      borderColor:"#242636",
      ouline:0,
    },
    '& .MuiInputBase-input':{
     padding:'0 !important',
    },
   '& .MuiInputLabel-outlined':{
     paddingTop:'5px',
     fontSize:'12px !important',
     transform:'translate(14px, 8px) scale(1)',
     color:'rgba(255, 255, 255, 0.42)',

   },
    '& .Mui-focused':{
     transform:'translate(0px, 0px) scale(1)',
     fontSize:'12px !important',
     '& fieldset': {
      border:'1px solid #242636 !important',
     },
     '& label':{
      transform:'translate(14px, -5px) scale(1)',
     },
    },
    '& label.MuiInputLabel-outlined.MuiFormLabel-filled':{
      transform:'translate(14px, -5px) scale(1)',
      fontSize:'12px !important',
    },
   '& .MuiSvgIcon-root':{
      position: 'absolute',
      top:'10px',
      right:'10px',
      color:'rgba(255, 255, 255, 0.42)',
      fontSize:'20px !important',
   },
   '& .MuiAutocomplete-inputFocused':{
     fontSize:'12px !important',
     paddingLeft:'12px !important'
   },
   '@media screen and (max-width: 767px)':{
    margin:'20px 0px',
  },
  },
  browserPools:{
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:'48px !important',
    marginBottom:'20px !important',
    '@media (max-width:768px)':{
      display: 'block',
      marginTop:'10px !important',
    },
 },
  PoolsSec:{
    '& .leaderHeading':{
      display:'flex',
      justifyContent:'space-between',
      
      },
    '& .MuiToolbar-gutters':{
     display:'block',
     width:'100%',
    },
    '& .synHead':{
      fontSize:'18px !important',
      color: '#fff',
      //marginTop:'44px !important',
      //marginBottom:'21px !important',
    },
    '@media (max-width:768px)':{
        marginTop:'0',
        maxWidth: '100%',
        flexBasis: '100%',
      },
  },
  builder_header:{
    marginTop:"40px !important",
    width: '100%',
    display: 'table',
    '& .MuiTypography-h2': {
      float:'left',
      width:'auto',
      margin: '0px',
      '@media (max-width:768px)':{
        marginTop:'0px !important',
     },
    },
    '&  .buildindex_btn': {
      float:'right',
    },
    '@media (max-width:767px)':{
         marginTop:'0px !important',
      },
  },
  titlewithImg:{
    display:'flex',
    marginBottom:'25px !important',
    alignItems:'center',
    '@media (max-width:768px)':{
         marginBottom:'0px',
      },
    '& img':{
      width:'32px',
      marginTop:'0px !important',
      marginRight:'-15px !important',
      '@media (max-width:767px)':{
        marginTop:'0px !important',
     },
    },
    '& h2': {
      display:'inline-block',
      fontSize:'16px !important',
      color:'rgba(255, 255, 255, 0.9)',
      fontWeight:'500 !important',
      margin:'0px',
      marginLeft:'22px',
    },
  },
  firstBuilderbox:{
    marginBottom:'0',
    '& .MuiPaper-root':{
      background:'transparent',
      boxShadow:'none',
      borderRadius:'0px',
    },
    '& .MuiGrid-grid-xs-3 .MuiPaper-rounded':{
      background:'#1a1a23',
      marginTop:'-1px',
      padding:'25px 20px',
    },
    '& .tabTableInner':{
        color:'rgba(255, 255, 255, 0.9);',
        border:'1px solid #303138',
        padding:0,
        background:'#14151d',
        borderRadius:0,
        paddingBottom: 0,
    },
    '& .MuiGrid-container':{
      padding:'18px 16px',
    },
    '& .MuiGrid-grid-xs-6': {
           '@media (max-width:768px)':{
            maxWidth:'100%',
            flexBasis:"100%",
         },
      },
  '& .MuiLink-root':{
    marginTop:'10px',
    display:'block',
  },

  },
  btnsBuilders:{
    textAlign:'right',
    '& .transparent_buil_btn': {
      backgroundColor:'transparent',
      marginTop:'0px',
      marginLeft:'15px',
      border: '1px solid #56575d',
      fontSize:'14px !important',
      fontWeight: 400,
      '@media (max-width:768px)':{
         marginLeft:'0px',
         display:'block',
         marginBottom:'15px !important',
      },
      '& .btnsBuildersSpace': {
         borderTop: '1px solid #242636',
    paddingTop: '20px !important',
    //paddingBottom: '20px !important',
      },
    },
    '& .buil_btn': {
      marginTop:'0px',
      marginLeft:'15px !important',
      fontSize:'14px !important',
      fontWeight: 400,
      '@media (max-width:768px)':{
        marginLeft:'0px !important',
        marginBottom:'15px !important',
      },
    },
    '& img': {
      marginRight:'6px !important',
    },
    '@media (max-width:768px)':{
         textAlign:'left',
      },
  },

  mainswapboxed :{
    paddingRight:'15px !important',
    paddingLeft:'15px !important',
    paddingBottom: '30px !important',
    '& IconButton':{
      borderRadius: '4px',
    },
    '& .swapboxed' : {
      border: '0px none',
      display: 'inline-block',
      padding: '0 10px',
      background: 'transparent',
    },
  }, 

  btnsBuildersSpace: {
    borderTop: '1px solid #242636',
    paddingTop: '20px !important',
    //paddingBottom: '20px ',
    '& .MuiTouchRipple-root':{
      display:'none',
    },
    
  },
  rigthside_indexbox:{
    color:'#fff',
     marginTop:'35px !important',
    '& h5': {
      color:'rgba(255, 255, 255, 0.42);',
      textTransform:'uppercase',
      fontSize:'12px !important',
      marginBottom:'0px',
      fontWeight:'500 !important',
      wordWrap: 'break-word',
    },
    '& p': {
      fontSize:'14px',
      color:'rgba(255, 255, 255, 0.9);',
      marginTop:'10px !important',
    }
  },

  informationTooltip:{
    '& button' :{
      padding: '0px',
      minWidth: '30px',
    },
  },

 divederTwobox: {
    width:'50%',
    display:'inline-block',
    color:'rgba(255, 255, 255, 0.42);',
    '& h5': {
      color:'rgba(255, 255, 255, 0.42);',
      textTransform:'uppercase',
      fontSize:'12px !important',
      marginBottom:'0px',
      fontWeight:'500 !important',
    },
    '& p': {
      color:'rgba(255, 255, 255, 0.9);',
      marginTop:'10px !important',
      fontSize:'14px !important',
    },
  },
  secondBuilderbox: {
    marginBottom:'30px !important',
    '& .MuiGrid-grid-xs-6': {
           '@media (max-width:768px)':{
            maxWidth:'100%',
            flexBasis:"100%",
         },
      },
      '& .MuiGrid-grid-xs-3': {
           '@media (max-width:768px)':{
            maxWidth:'50%',
            flexBasis:"50%",
         },
      },
    '& .MuiPaper-root':{
      backgroundColor:'transparent',
      boxShadow:'none',
      borderRadius:'0px',
    },
    '& form': {
      paddingTop:'0px',
    },
    '& label': {
      fontSize:'14px !important',
      color:'rgba(255, 255, 255, 0.9) !important',
      marginBottom:'10px !important',
      transform: 'translate(0, 1px) scale(1)',
    },
    '& .MuiInputBase-input':{
      height:'40px !important',
      borderRadius: '4px',
      border :'1px solid #242636',
      padding: '0px 10px',
      marginBottom:'0px',
      color:'rgba(255, 255, 255, 0.42)',
      fontSize:'14px !important',
      marginTop:'10px !important',
    },
    '& .MuiInputBase-input::placeholder':{
        color:'rgba(255, 255, 255, 0.42)',
    },
    '& .MuiInput-underline:before':{
      borderBottom:'none',
      display:'none',
    },
    '& .MuiInput-underline:after':{
      display:'none',
    },
    '& .MuiFormControl-root': {
      minWidth:'100%',
    },
    '& textarea': {
      minHeight:'86px',
      backgroundColor:'transparent',
      color:'rgba(255, 255, 255, 0.42)',
      border: '1px solid #242636',
      width:'100%',
      maxWidth:'100%',
      fontSize:'14px !important',
      padding:'10px !important',
      marginBottom:'0px',
      resize:'none',
      borderRadius:'4px',
    },
    '& .MuiNativeSelect-root':{
      '& option':{
        backgroundColor: '#202232',
      },
    },
    '& .MuiInputBase-root': {
      '& .MuiNativeSelect-icon': {
          top: 'calc(50% - 6px)',
          color: 'rgb(255 255 255 / 54%)',
      },
    },
   
  },
  headingSecondtext:{
      marginLeft:'0px !important',
  },

  addmorefieldsmain:{
    position:'relative',
  },

  addmorefields:{
    backgroundColor: '#4a4de6',
    color: '#fff',
    textTransform: 'initial',
    position: 'absolute',
    top: '38px',
    right: '13px',
    borderRadius: '0px 3px 3px 0px',
    padding: '9px 20px',
    '&:hover' :{
      backgroundColor: '#303f9f',
    },
  },
  closefields:{
      backgroundColor: '#282a39',
      color: '#fff',
      textTransform: 'initial',
      position: 'absolute',
      top: '22px',
      right: '13px',
      borderRadius: '0px 3px 3px 0px',
      padding: '9px 10px',
      minWidth:'45px',
      '&:hover':{
        backgroundColor:'#292933',
      },
  },

  managePercentage: {
    position:'relative',
    '& span': {
      position:'absolute',
      padding:'10px 12px 10px 12px',
      background:'#14151D',
      borderLeft: '1px solid #242636',
      borderRadius: '0px 4px 4px 0px',
      right: '13px',
      top: '39px',
    },
  },
  emptyBuilder:{
    textAlign:'center',
    padding:'80px 0',
      '& .MuiButton-root':{
         textTransform:'inherit',
      },
      '& .MuiTypography-h3':{
        fontSize:14,
        margin:'20px 0 16px 0',
      },
  },
TableAcrodSec:{
  '& h2':{
    marginLeft:0,
  },
},


confirmationPage:{
  textAlign:'center',
  color:'#fff',
  '& h5':{
    fontSize:'18px',
    padding:'40px 0px',
    color: '#fff',
  },
  '& p':{
    color:'#fff',
    fontSize:'14px',
    textAlign:'left',
  },
},

radioListing:{
  '& lagend.MuiFormLabel-root': {
    color:'#fff',
  },
  '& .MuiFormLabel-root': {
    color: '#fff',
    fontSize: '12px',
    paddingTop: '20px',
  },
  '& label.MuiFormControlLabel-root':{
    color:'#fff',
  },
  '& .MuiRadio-colorSecondary.Mui-checked': {
    color: '#303f9f',
  },
  '& .MuiRadio-root': {
      color: '#505370',
  },
},
instructions:{
  '& .MuiInput-underline:after':{
    border: 'none !important',
},
'& .MuiInput-underline:hover:not(.Mui-disabled):before':{
  border: 'none',
},
},

mainStepperclass:{
  background:'transparent',
  padding: '25px 15px 15px 15px',
  borderBottom: '1px solid #1a1a23',
},

button:{

},
completed:{

},
middleContantBody:{
  padding: '10px 20px 0px 20px',
  overflow:'auto',
},
step2form:{

},
modelFooterSection: {
    borderTop: '1px solid #1a1a23',
    marginTop: '15px',
    paddingTop: '10px',
    paddingBottom: '15px',
    '& .button.MuiButton-containedPrimary': {
      textTransform: 'capitalize',
    },
},

transparent_cancel_btn:{
    backgroundColor:'transparent',
      marginTop:'0px',
      marginLeft:'15px',
      border: '1px solid #56575d',
      color: '#fff !important',
      textTransform: 'capitalize',
      '@media (max-width:768px)':{
         marginLeft:'0px',
         display:'block',
         marginBottom:'15px',
      },
},

portfolioMain: {

},

headingThirdstep:{
  fontSize:'16px',
  color:'#fff',
  marginBottom: '0px',
  marginTop: '30px',
  textAlign: 'left',
},

tableDetailToggle:{
  background:'#14151d',
  paddingLeft:'20px',
  '& .MuiPaper-elevation1':{
    padding:'24px 20px',
    background:'#1a1a23   !important',
    display:'inline-block',
    width:'100%',
  },
},
valuetogglehead:{
  color: 'rgba(255, 255, 255, 0.9);',
  fontSize:20,
  marginTop: 0,
  fontWeight: 500,
  marginBottom:0,
  textTransform:'inherit',
  float:'left',
},
submitAudit:{
  fontSize:10,
  paddingTop:10,
  marginTop:10,
  borderTop:'solid 1px rgb(237 237 237 / 12%)',
},
stateKey:{
      display:'inline-block',
      width:'100%',
      background:'#14151d',
      marginTop:'30px',
      padding:'0 24px',
  '& h2':{
    color:'rgba(255, 255, 255, 0.9)',
    fontSize:20,
    marginTop: 30,
    fontWeight:500,
    marginBottom: 0,
    textTransform:'inherit',
  },
  '& p':{
    margintop:0,
  },
},
btnGroupWithserach:{
  marginTop:34,
  marginBottom:20,
  display:'inline-block',
  width:'100%',
 
  '& .MuiButtonBase-root':{
    textTransform:'inherit',
    background:'#1A1A23',
    fontSize: '16px',
    fontWeight: 400,
    border:'1px solid #242636',
    color:'rgba(255, 255, 255, 0.42)!important',
    marginRight:20,
      '@media (max-width:768px)':{
        marginTop:15,
        marginRight:12,
      },
  },
  '@media (max-width:576px)':{
    marginTop:'15px',
    marginBottom:'20px',
  },
},
btnGroupLeft:{
  float:'left',
  '& .activeBtn':{
    background:'#4A4DE6 !important',
    border:'#4A4DE6 !important',
    color:'rgba(255, 255, 255, 0.8)!important',
  },
  '@media (max-width:576px)':{
    marginBottom:'15px',
  },
},
btnSearch:{
  float:'right',
  width:'90%',
  '@media (max-width:768px)':{
      width:'100%',
      //marginTop:'24px',
      // marginBottom:20,
},
},

LiquidityMainPopup:{

},
piaChat:{
  background:'#16161b',
  border:'solid 1px #363640',
  bordeaRdius:6,
},
swapMainParent:{
  minHeight:'calc(100vh - 172px)',
},

swapParent:{
  marginTop:40,
  marginBottom:40,
  margin: '0px auto',
  width: '655px',
  background: 'transparent',
  border: '0px none',
  borderRadius: '0px',
  boxShadow: 'none',
  '& .MuiPaper-root':{
    backgroundColor: 'transparent',
    width: '100%',
     boxShadow: 'none',
     background: '#1A1A23',
     border: '1px solid #242636',
     borderRadius: '8px',
  },
 
  '& .MuiTypography-body1' :{
    fontSize: '15px !important',
    fontWeight: '500 !important',
    color: '#fff',
  },
  
  '& .MuiInputBase-input':{
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
  },
  '& .tokenButton':{
    '& .MuiTypography-body1':{
      color:'#fff',
    },
  },
  '& .MuiButton-contained.Mui-disabled':{
    background: '#393939 !important',
  }, 
  '& .MuiButton-root.MuiButton-contained':{
    background: '#4A4DE6',
    borderRadius: '4px',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '140%',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
  },

  "& div[class^='makeStyles-swapTokenFormContainer']" :{
    border: '1px solid #242636',
    padding: '6px 10px',
    boxShadow: 'none',
    borderRadius: '3px',
    },

    "& div[class^='makeStyles-tokenButton']" :{
      color: 'rgba(255, 255, 255, 0.9)',
    },

    "& div[class^='makeStyles-swapToFromButton']" :{
          margin: '40px auto 40px auto',
    },
    '@media (max-width:767px)':{
      width:'auto',
},
   
},

liquidityParent:{
  marginTop:40,
  marginBottom:40,
  margin: '0px auto',
  width: '550px',
  background: 'transparent',
  border: '0px none',
  borderRadius: '0px',
  boxShadow: 'none',
  '& .MuiPaper-root':{
    backgroundColor: 'transparent',
    width: '100%',
     boxShadow: 'none',
     background: '#1A1A23',
     border: '1px solid #242636',
     borderRadius: '8px',
  },
 
  '& .MuiTypography-body1' :{
    fontSize: '15px !important',
    fontWeight: '500 !important',
    color: '#fff',
  },
  
  '& .MuiInputBase-input':{
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
  },
  '& .tokenButton':{
    '& .MuiTypography-body1':{
      color:'#fff',
    },
  },
  '& .MuiButton-contained.Mui-disabled':{
    background: '#393939 !important',
  }, 
  '& .MuiButton-root.MuiButton-contained':{
    background: '#4A4DE6',
    borderRadius: '4px',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '140%',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
  },

  "& div[class^='makeStyles-swapTokenFormContainer']" :{
    border: '1px solid #242636',
    padding: '6px 10px',
    boxShadow: 'none',
    borderRadius: '3px',
    },

    "& div[class^='makeStyles-tokenButton']" :{
      color: 'rgba(255, 255, 255, 0.9)',
    },

    "& div[class^='makeStyles-swapToFromButton']" :{
          margin: '40px auto 40px auto',
    },

   
},


// swapTokenFormContainer:{
//     border: '1px solid #242636',
//     padding: '6px 10px',
//     boxSshadow: 'none',
//     borderRadius: '3px',
// },

card:{
      background: '#1A1A23',
      border: '1px solid #242636',
      borderRadius: '8px',
      marginTop:100,
},
buttonGroup:{
  position:'relative'
},
disconnectBtn:{
    justifyContent: 'center',
    background: '#4A4DE6',
    borderRadius: '50px',
    height: '32px',
    fontWeight: 500,
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.9)',
    border: '0px none',
    padding: '0px 14px',
    lineHeight: '32px',
    whiteSpace: 'nowrap',
},
connectBtn:{
    justifyContent: 'center',
    background: 'linear-gradient(270deg, #6231ED -9.12%, #4A4DE6 24.42%, #3A69DC 67.62%, #7ED6C4 122.3%)',
    borderRadius: '50px',
    height: '32px',
    fontWeight: 500,
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.9)',
    whiteSpace: 'nowrap',
    '&:hover': {
      background:'rgba(74, 77, 230, 0.7)',
    },
},

disconnectBtn1:{
  background: '#4A4DE6',
  borderRadius: '50px',
  height: '36px',
  fontWeight: 500,
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.9)',
  border: '0px none',
  padding: '0px 14px',
  lineHeight: '32px',
  whiteSpace: 'nowrap',
  justifyContent: 'flex-start !important',
  minWidth: '180px',

  '& .wallet-adapter-button-start-icon':{
    marginRight:'14px',
    width:'30px',
  },
},
connectBtn1:{
  justifyContent: 'center',
  background: 'transparent',
  padding:'0 100px 0 0',
  borderRadius: '50px',
  height: '32px',
  fontWeight: 500,
  fontSize: '14px',
  display: "inline-block",
  lineHeight: "30px",
  color: 'rgba(255, 255, 255, 0.9)',
  whiteSpace: 'nowrap',
  '&:not([disabled]):hover':{
    background: 'transparent',
  },
  '& .walletmenu1':{
    width:'30px',
    marginRight: '12px',
  },
},


swapCBox:{

},
swapCard: {
  width: theme.spacing(50),
  borderRadius: theme.spacing(2),
  boxShadow: "0px 0px 30px 5px rgba(0,0,0,0.075)",
  padding: theme.spacing(2),
},
tab: {
  width: "50%",
},
settingsButton: {
  padding: 0,
},
swapButton: {
  width: "100%",
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: 16,
  fontWeight: 700,
  padding: theme.spacing(1.5),
},
swapToFromButton: {
  display: "block",
  margin: "10px auto 10px auto",
  cursor: "pointer",
},
amountInput: {
  fontSize: 22,
  fontWeight: 600,
},
input: {
  textAlign: "right",
},
swapTokenFormContainer: {
  borderRadius: theme.spacing(2),
  boxShadow: "0px 0px 15px 2px rgba(33,150,243,0.1)",
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(1),
},
swapTokenSelectorContainer: {
  marginLeft: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  width: "50%",
},
balanceContainer: {
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
},
maxButton: {
  marginLeft: theme.spacing(1),
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: "12px",
  cursor: "pointer",
},
tokenButton: {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  marginBottom: theme.spacing(1),
},
search_box:{
  width:'100%',
    minWidth: '360px',
    maxWidth: '360px',
    float:'right',
    position: 'relative',
    zIndex: 9,
    marginTop:0,
    //marginBottom:15,
    //marginRight:20,
  '@media screen and (max-width: 576px)':{
    minWidth:'auto !important',
  },
	'& input[type="text"]':{
        width:'100%',
        margin: 0,
        background:'#1A1A23',
        border:'1px solid #242636',
        borderRadius:'4px',
        color:'rgba(255,255,255, .54)',
        minHeight:38,
        paddingLeft:16,
    },
    '& input[type="text"]:focus-visible':{
      outline:'none',
    },
	'& button': {
		position: 'absolute',
		right: 0,
		background: '#424242',
		border: 0,
		padding: '9px 8px',
		borderRadius:'0 3px 3px 0',
		color: '#fff',
		zIndex: 999,
    cursor: 'pointer',
    minHeight:38,
    fontSize: '16px',
	}
},
TableIndexSearchBox:{
justifyContent: 'space-between'
},

profileSection:{
  background:'transparent',
'& .profileLable':{
  background:'rgba(0, 189, 203, 0.15)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius:'100px',
  display:'inline-block',
  fontWeight: 500,
  fontSize:12,
  color:'#00BDCB',
  padding:'3px 10px',
  marginLeft:15,
  position:'relative',
  top:'-3px',
  '@media screen and (max-width: 576px)':{
    marginLeft:0,
    marginTop: 8,
  },
},
'& .MuiTypography-h1 img':{
    float: 'right',
},
},
profilePic:{
position:'relative',
top:'10px',
'& .iconEdit':{
  display:'none',
  '& img':{width:'20px',
    position:'absolute',
    left: '0px',
    top:'0px',
    cursor:'pointer',
    zIndex:'0',
  },
  '& .fileupload':{
  '& input':{
    fontSize: '3px',
    width: '23px',
    height:'24px',
    background: 'none',
    zIndex: '1111',
    border: 'none',
    cursor:'pointer',
    '&::-webkit-file-upload-button':{
      background:'transparent',
      border:'none',
    },
  },
  '&:after':{
    borderBottom:'none',
   },
   '&:before':{
     borderBottom:'none',
    },
    '&:hover:not(.Mui-disabled):before ':{
      borderBottom:'none',
     },
    },
},
'&:hover .iconEdit':{
   display:'block',
   position:'absolute',
   left: '0px',
   top:'0px',
   borderBottom:'none',
  }
},

gallerySection:{
paddingBottom:15,
flex:'0 0 25%',
'& span':{
  color:'#FFFFFF',
  fontWeight:500,
  fontSize: 12,
  marginBottom:7,
  display:'block',
},
'& div':{
  float:'left',
  width:'50%',
  padding:4,
},
'& .count_img':{
  position:'relative',
  display:'inline-block',
},
'& .count_img b':{
  position:'absolute',
  top:'50%',
  zIndex: '999',
  fontWeight:'500',
  fontSize:20,
  color:'rgba(255, 255, 255, 0.9)',
  left:0,
  right:0,
  textAlign:'center',
  transform:'translate(0, -50%)',
},
},

profileContent:{
  paddingLeft:20,
  paddingRight:40,
  width: '100%',
  '& .profileUpdate':{
    color:'#fff',
    background:'#4A4DE6',
    borderRadius: '8px',
    textTransform: 'none',
    fontSize:'10px',
  },
'& .profileachiment':{
  display:'flex',
  flexWrap:'wrap',
  marginTop:32,
},
'@media screen and (max-width: 576px)':{
  paddingLeft:0,
  paddingRight:0,
},

'& .profileachiment span':{
  color:'rgba(255, 255, 255, 0.42)',
  letterSpacing:'0.5px',
  textTransform:'uppercase',
  fontWeight:500,
  marginRight: 60,
  fontSize:12,

  '@media screen and (max-width: 576px)':{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginRight: 0,
    marginTop: 12,
  },
},

'& .profileachiment span b':{
  display:'block',
  marginTop:8,
  color:'rgba(255, 255, 255, 0.9)',
  fontWeight:'normal',
  fontSize:14,

  '@media screen and (max-width: 576px)':{
    marginTop:0,
  },
},
'& img':{
  marginRight:'-12px',
  '@media screen and (max-width: 576px)':{
    marginTop:'30px',
  },  
},
},
profileContentTitle:{
  display:'flex',
  justifyContent: 'space-between',
 
  '& .profileheading':{
    display:'flex',
    alignItems: 'baseline',
    '@media (max-width:576px)':{
      display:'initial',
      alignItems:'flex-start',
      paddingTop:'20px',
    },     
    '& .headingtitle':{  
      '& input':{
        color:'#fff',
        fontSize:' 20px',
        '&:focus-visible':{
           border:'1px solid #fff',
           borderRadius:'4px',
        },
        
      },
      '&:after':{
        borderBottom:'none',
       },
       '&:before':{
         borderBottom:'none',
        },
        '&:hover:not(.Mui-disabled):before ':{
          borderBottom:'none',
         }
    },
  
  },
  '@media (max-width:576px)':{    
    alignItems:'flex-start',
  },  
},

leader_profile:{
  display:'flex',
  border:'1px solid #242636 ',
boxSizing:'border-box',
borderRadius: '8px',
width:'100%',
padding:'20px 20px',
   '& .profileLea':{
    top:'0px',
   },
   '& .lasttrktime p' :{
    color: 'rgba(255, 255, 255, 0.42)',
    marginBottom:'0px',
    marginTop:'30px',

    '& b':{
      fontWeight:'400',
      paddingLeft:'10px',
      color: 'rgba(255, 255, 255, 0.9)',
    }
   },
},
imageWidth:{
  maxWidth:140,
  maxHeight:140,
  width:'100%'
},
loadMore:{
  color: 'rgba(255, 255, 255, 0.9);',
  border: '0px none;',
  height: '50px;',
  padding: '0px 45px;',
  fontSize: '14px;',
  background: '#4A4DE6;',
  fontWeight: 500,
  lineHeight: '32px;',
  borderRadius: '50px;',
  justifyContent: 'center;',
  margin: '20px auto 30px;',
  cursor:'pointer',
  
},

toggleTable:{
  transition: 'max-height 1s ease',
  maxHeight:'0',
  overflow:'hidden',

  '& tbody':{
    transition: 'max-height 1s ease',
    maxHeight:'0',
    overflow:'hidden',

  },
  '& .MuiTablePagination-root':{    
    display:'none',
    transistion:'2s all',    
    
  }
},

TableAnimate:{
  transition: 'max-height 2s ease',
  maxHeight:'1500px',
} ,

imageLogo:{
  maxWidth:'32px'
},
egraph:{
  marginTop:60
},

discovery_graph_tabs:{
  border: '1px solid hsla(0,0%,100%,.12)!important',
  borderRadius: '4px',
  marginTop:'5px',
},
discovery_graph_tab_item:{  
  background: '#1a1a23',
  color: '#fff',
  padding: '5px 15px',
  border: 'none',
  outline: 0,
  boxShadow: 'none',
  cursor:'pointer',
  borderRight: '1px solid hsla(0,0%,100%,.12)!important',

  '&:hover':{
    background: '#eee',
    color: '#000'
  }
},

anoyTable:{
  '& thead th:nth-child(1)':{
    minWidth: '115px',
    },
},

assetsTable:{
  '& thead th:nth-child(5)':{
    minWidth: '145px',
    },
  '& thead th:nth-child(6)':{
    minWidth: '145px',
    },
  '& .recharts-wrapper':{
    margin: '16px 0'
  },
},
synTableIndex:{
  '& thead th:nth-child(1)':{
    minWidth: '115px',
    },
},
lineChartXaxis:{
  fontSize: '13px',
},
checkeddata:{
 textAlign: 'right',
 float: 'right',
},
Iconcopy:{
  marginLeft: '8px',
  fontSize: '14px !important',
  marginBottom: '-3px',
},
copySuccess:{
  marginLeft: '8px',
  fontSize: '14px !important',
  color:'green !important',
  bottom: '-3px',
  position:'relative',
  display:'inline',

  '& p':{
    top: '-4px',
    position: 'absolute',
    left: '26px',
    margin: 0,
    fontSize: '14px',
    fontWeight: 500,
  },
},
IconcopySuccess:{
  fill: 'green !important',
  fontSize: '14px',
},
hideAssetToken:{
  width: 0,
  height: 0,
  overflow: 'hidden',
  opacity:0,  
},
spinclass:{
  width: '6% !important',
  position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
},
tokenbox:{
  cursor:'pointer',
  display: 'flex',
  alignItems: 'center',
  '& .custom':{
    position: 'relative',
    display: 'inline',

    '&:hover':{
      '& .custom-tooltip':{
        display:'table',
      },
    },

    '& .custom-tooltip':{
      top: '25px',
      right: '0px',
      display: 'none',
      padding: '8px 10px',
      zIndex: 999,
      position: 'absolute',
      background: 'rgb(74 77 230);',
      borderRadius: '4px',
      marginRight:'-20px',
      '& label':{
        padding: '8px 10px',
        display: 'block'
      },
  //  '&:before':{
  //   content: "",
  //   borderTop:'8px solid transparent',
  //   borderBottom:'8px solid transparent',
  //   borderLeft: '15px solid #4a4de6',
  //   position:'absolute',
  //   right:'50%',
  //   top:'-6px',
  //   left:'62%',
  //   transform:'rotate(28deg);
  //  }
    }
  }
},


}));
