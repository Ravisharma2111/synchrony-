import WTCIcon from '../assets/icon/WTCWTCWTC.svg';
import trashIcon from '../assets/icon/trash.svg';
import BLTIcon from '../assets/icon/BLT.svg';
import cenniIcon from '../assets/icon/cenni.svg';
import chIcon from '../assets/icon/ch.svg';
import PoolName from '../utils/PoolName';
 export const comparecolumns:any = [
    ['Name','name',{
       options:{
             
         } 
     
    }],
    ['Price','price',{
       options:{
             order:true,
         } 
     
    }],
    ['Volume','volume',{
       options:{
             order:true,
         } 
     
    }],
    ['Martket','martket',{
       options:{
             order:true,
         } 
     
    }],
    ['Dominance','dominance',{
       options:{
             order:true,
         } 
     
    }],
    ['Volatility','volatility',{
       options:{
             order:true,
         } 
     
    }],
    
 ];
 export const compoolsrows:any = [
    {
          "name":<PoolName image={WTCIcon} name={'Pool name'} />,
          "price":'$0.05',
          "volume":'$425,960.21',
          "martket":'$425,960.21',
          "dominance":'$425,960.21',
          "volatility":'0.057',
          "blank":<><img src={trashIcon} alt=""/></>,

    },
     {
          "name":<PoolName image={BLTIcon} name={'Pool name'} />,
          "price":'$0.05',
          "volume":'$425,960.21',
          "martket":'$425,960.21',
          "dominance":'$425,960.21',
          "volatility":'0.057',
          "blank":<><img src={trashIcon} alt=""/></>,
          
    },

    {
          "name":<PoolName image={cenniIcon} name={'Pool name'} />,
          "price":'$0.05',
          "volume":'$425,960.21',
          "martket":'$425,960.21',
          "dominance":'$425,960.21',
          "volatility":'0.057',
          "blank":<><img src={trashIcon} alt=""/></>,
          
    },

    {
          "name":<PoolName image={chIcon} name={'Pool name'} />,
          "price":'$0.05',
          "volume":'$425,960.21',
          "martket":'$425,960.21',
          "dominance":'$425,960.21',
          "volatility":'0.057',
          "blank":<><img src={trashIcon} alt=""/></>,
          
    },
 ];
 export const initialGraphData = {
      //labels: ['A','B'] as any,
      customLables: ['24h', '7d', '30d'],
      activeLabel:'chart24',
      datasets: [
            {
                  label: 'Price',
                  data: [],
                  fill: 'start',
                  fillColor: 'red',
                  backgroundColor: 'rgba(73,76,229,0.3)',
                  borderColor: '#4A4DE6',
                  pointBorderWidth: 2,
                  pointRadius: 0,
                  borderWidth: 3,
            }
      ],
      options: {
            plugins: {
                  zoom: {
                        zoom: {
                              wheel: {
                                    enabled: true,
                              },
                              pinch: {
                                    enabled: true
                              },
                              mode: 'xy',
                        }
                  }
            }
      }
}

export const muiltpleinitialGraphData = {
      labels: [],
      datasets: [
        {
          label: "First dataset",
          data: [],
          fill: 'start',
          fillColor: 'red',
          labels: [],
          borderColor: '#4A4DE6',
          pointBorderWidth: 2,
          pointRadius: 0,
          borderWidth: 3,
        },
        {
          label: "Second dataset",
          data: [],
          fill: 'start',
          fillColor: 'red',
          labels: [],
          borderColor: '#FF7B43',
          pointBorderWidth: 2,
          pointRadius: 0,
          borderWidth: 3,
        },
        {
            label: "Second dataset 3",
            data: [],
            fill: 'start',
            fillColor: 'red',
            labels: [],
            borderColor: '#4CAF50',
            pointBorderWidth: 2,
            pointRadius: 0,
            borderWidth: 3,
          }
      ]
    };
    