import {  makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme : any) => createStyles({
    
    treeTable:{
        background: '#1A1A23',        
        border: '1px solid #242636',
        borderRadius:'8px',
        // marginBottom:'34px',
        //marginTop:10,
        overflowX:'auto',
        overflowY:'hidden',
        width: '100%',
        
        '& .MuiTablePagination-toolbar': {
            paddingLeft:'0px',
            textAlign:'right',
            alignItems:'baseline',
        },
        '& .MuiTablePagination-caption': {
            display:'inline-block',
        },
        '& .MuiTablePagination-actions': {
            display:'inline-block',
        },
        '& .MuiTablePagination-input': {
            color:'rgba(255, 255, 255, 0.9)!important;',

            '& .MuiSelect-icon':{
                top: 'calc(50% - 16px)',
                right: '-5px',                
            }
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
            color:'rgba(255, 255, 255, 0.9)!important;',
            fontWeight: 500,
            fontSize: '14px !important',
            padding:'16px',
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
        '& .headerClassName':{
            width: '70px'
        },
        // '& thead th:nth-child(1)':{
        //     width: '93px',
        //     },
        // '& thead th:nth-child(2)':{
        //     minWidth: '179px',
        //     },
        // '& thead th:nth-child(3)':{
        //     minWidth: '242px',
        //     },
        // '& thead th:nth-child(4)':{
        //     minWidth: '141px',
        //     },

        // '& thead th:nth-child(7)':{
        //     width: '160px',
        //     },
        // '& thead th:nth-child(8)':{
        //     width: '156px',
        //     },
        '& tbody td':{
            //background:'#14151D',
            background:'rgba(26, 26, 35, 1)',
            borderBottomColor:'#242636',
            fontWeight:'400',
            padding:'8px 16px',
            height:'56px',
            position:'relative',
            paddingRight:0,
        },
        '& tbody tr:hover td':{
            background:'#14151D',
        },
        // '& tbody tr:last-child td':{
        //     borderBottom:'none',
        // },
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
        },
       
        '& .MuiTableCell-root span':{
           position:'absolute',
           top:'14px',
        
           '@media screen and (max-width:576px)':{
            top:'27px',
           },
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
        '& .accordioncls.close .cellrow':{
            height:0,
            padding: 0,
            //transition: 'all 1s ease',
        },
        '& .accordioncls.open .cellrow':{
            padding: 0,
        },
        '& .accordioncls.close .TableAcrodSec':{    
            overflow: 'hidden',        
            maxHeight: 0,
           // transition: 'max-height 1s ease',

         '& td.MuiTableCell-root': {
                padding:'0px',
            },
        },
        '& .open.cellrow .TableAcrodSec':{
            maxHeight: '1500px',
            transition: 'max-height 0.8s ease',    
        },
        '& .MuiTableRow-root':{
            //cursor:'pointer',
        },
        '& .wdth420':{
            minWidth:420
        },
        '& .wdth200':{
            minWidth:200
        },
        '& .wdth150':{
            minWidth:150
        },
        '& .wdth120':{
            minWidth:120
        },
    },
    searchFilter:{
        background: '#1A1A23',
        border: '1px solid #242636',
        borderRadius: 8,
        marginTop:10,
        '& .middlesection':{
            borderLeft: '1px solid #242636',
            borderRight: '1px solid #242636',
        },
        '& .MuiGrid-item ':{
            padding:20,
        },
        '& .MuiInputLabel-root':{
            color:'#fff',
            fontSize:'14px',
            fontWeight:'normal',
            top:'-9px'
        },
        '& .MuiTypography-root':{
            color:'#fff',
            fontSize:'14px',
            fontWeight:'normal'
        },
        '& .MuiFormControl-root':{
            width:'100%',
            marginTop:'16px',
        },
        '& .MuiSelect-root':{
            background: '#1A1A23',
            border:'1px solid #242636',
            paddingTop:'8px',
            paddingBottom:'8px',
            color:'rgba(255, 255, 255, 0.9)',
            borderBottom:'2px solid #242636',
        },
        '& svg':{
            color:'rgba(255, 255, 255, 0.42)',
        },
        '& .MuiSlider-markLabel':{
            top:'-15px',
            fontSize:'14px',
            color:'rgba(255, 255, 255, 0.7)',
        },
        '& .MuiSlider-marked':{
            top:'20px',
        },
        '& .MuiSlider-rail':{
            background:'#3C3F56',
            height:'4px',
            borderRadius:100
        },
        '& .MuiSlider-track':{
            background: 'linear-gradient(270deg, #6231ED -9.12%, #4A4DE6 24.42%, #3A69DC 67.62%, #7ED6C4 122.3%)',
            height:'6px',
            marginTop:'-1px',
        },
        '& .MuiSlider-thumb':{
            background:'#E6E7E9',
            boxShadow:'0px 1px 3px rgba(24, 24, 25, 0.16)',
            width:'16px',
            height:'16px',
            top:'11px',
        },
        '& .MuiSlider-markActive':{
            background:'#1a1a23',
        },
        '& .MuiGrid-root':{
        '@media (max-width:768px)':{
            maxWidth:'100%',
            flexBasis:'100%',
          },
        },
    },
    headerCell:{
     
    },
    compareTabledata:{
        overflow:'auto',
      },
    searchToolbarGrid:{
        paddingRight:0,
        paddingLeft:0,
        '@media (max-width:500px)':{
            marginBottom:'15px',
        },
        '& .title':{
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 20,
            color: 'rgba(255, 255, 255, 0.9)'
        },
        '& .MuiButton-containedPrimary':{
            background: 'rgba(230, 231, 233, 0.04)',
            borderRadius: 4,
            textTransform: 'capitalize',
            float:'right',
             '@media (max-width:768px)':{
                marginBottom:'15px',
                marginRight:'15px',  
             },
        },
        '& .MuiGrid-grid-xs-8':{
            '@media (max-width:768px)':{
                maxWidth:'26%',
                flexBasis:'26%',
            },
        },
        '& .MuiGrid-grid-xs-3' :{
            '@media (max-width:768px)':{
                maxWidth:'48%',
                flexBasis:'48%',
            },
        },
        '& .MuiGrid-container' :{
           '@media (max-width:500px)':{
                display:'inline-block',
                width: '100%',
            },
        },
        '& .MuiGrid-container .MuiGrid-root':{
            '@media (max-width:500px)':{
                width: '100%',
                maxWidth:'100%',
                marginBottom:'15px',
            },
        },
        '& .makeStyles-search-74':{
           marginLeft:'0px',
           maxWidth:'100%',
        },

    },
    arrow:{

    },
    tooltip:{

    },
    actionCell:{

    },
    actionCellDisabled:{

    },
    visuallyHidden:{
        
    },
    
    toolbarRoot:{
        
    },
    highlight:{

    },
    search:{
        maxWidth: 264,
        background: '#1A1A23',
        border: '1px solid #242636',
        borderRadius: 4,
        margin: '0px 15px',
        color: 'rgba(255, 255, 255, 0.42)',
        float:'right',
        position: 'relative',
        '& input':{
            color: 'rgba(255, 255, 255, 0.42)',
            padding:'8px 12px',
            fontSize:'14px',
            fontWeight:'400',
        },
        '& svg.MuiSvgIcon-root': {
            position: 'absolute',
            right: 3,
            top: 5,
            zIndex: 9,
            cursor: 'pointer'
        }
      
    },
    viewAll:{
        '& .view-all p':{
            fontWeight: 500,
            fontSize: '14px',
            color: '#4A4DE6',
            cursor:'pointer',
            margin:'0',
        }
        
    },
    formControl:{
        
    },
    nodata:{
        
    },
	expandIcon:{
        cursor:'pointer',
        marginRight:20,
        //transition: 'all .2s ease',
	},
    compareTable:{

    },
	expandCell:{
		
	},
	expandOpenIcon:{
        transform: 'rotate(180deg)',
        marginRight:20,
        transition: 'all 1s ease',
	},
    toolTip:{
        color:'#fff',
        padding:'0px',
        '& span':{
            fontSize:'14px',
            textTransform:'none',
            textAlign:'left',
            fontWeight:'400',
        }
      },
    treeTableChild:{
        display:'block',
        width:'100%',
        overflow:'hidden',
        '@media (max-width:768px)':{
            overflow:'auto',
        },
        '& .MuiTable-root':{
         width:'100%',
        },
       },
       poolname:{
        display: 'inline-block !important',
        width:'auto',
        float:'left',
        textAlign:'right',
       '& .coinIcons':{
           width:'25px',
           marginRight:'15px !important',
       }, 
     }
}));
