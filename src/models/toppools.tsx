import chartIcon from '../assets/icon/Chart.svg';
import chartredIcon from '../assets/icon/Vector.svg';
import ethereumIcon from '../assets/icon/ethereum.svg';
import zcashIcon from '../assets/icon/zcash.svg';
import dashDashIcon from '../assets/icon/dash-dash.svg';
import vertcoinIcon from '../assets/icon/vertcoin.svg';
import digibyteIcon from '../assets/icon/digibyte.svg';
import litecoinIcon from '../assets/icon/litecoin.svg';
import ethereumClassicIcon from '../assets/icon/ethereum-classic.svg';
import bitcoinIcon from '../assets/icon/bitcoin.svg';
import { PoolData } from '../pages/pool/pooldata';
import { WalletData } from '../pages/pool/WalletData';
import { LeaderboardData } from '../pages/leaderboard/LeaderboardData';

export const toppoolscolumns: any = [
   ['Name', 'name', {
      options: {
         order: true,
      }
   }],
   ['Volume', 'volume'],
   ['Top assets', 'topassets'],
   ['All time', 'alltime', {
      options: {
         order: true,
         number: true,
      }
   }
   ],
   ['24h', 'hours', {
      options: {
         order: true,
         number: true,
      }
   }],
   ['Last 7 days', 'lastdays'],
];

export const solfarmcolumns: any = [
   ['Name', 'name', {
      options: {
         order: true,
      }
   }],
   ['Liquidity', 'liquidity', {
      options: {
         order: true,
      }
   }],
   ['Fee', 'apy'],
   ['Price', 'price', {
      options: {
         order: true,
         number: true,
      }
   }],
];

export const mercurialcolumns: any = [
   ['Name', 'name', {
      options: {
         order: true,
      }
   }],
   ['Tvl', 'tvl', {
      options: {
         order: true,
      }
   }],
   ['Fee', 'apy'],
   ['Price', 'virtualPrice', {
      options: {
         order: true,
         number: true,
      }
   }],
];

export const toppoolsrows: any = [
   {
      "name": 'Fund name',
      "volume": '$5,425,960.21',
      "topassets":
         <>
            <img src={ethereumIcon} className="coinIcons" alt="" />
            <img src={zcashIcon} className="coinIcons" alt="" />
            <img src={dashDashIcon} className="coinIcons" alt="" />
            <img src={vertcoinIcon} className="coinIcons" alt="" />
            <img src={digibyteIcon} className="coinIcons" alt="" />
            <img src={litecoinIcon} className="coinIcons" alt="" />
            <img src={ethereumClassicIcon} className="coinIcons" alt="" />
            <img src={bitcoinIcon} className="coinIcons" alt="" />
            <span className="moreValue">+3</span>
         </>,
      "alltime": '12.27',
      "hours": 2.65,
      "lastdays": <img src={chartIcon} alt="" />,
      "accordionData": <PoolData />
   },
   {
      "name": 'Tund name',
      "volume": '$5,425,960.21',
      "topassets":
         <>
            <img src={vertcoinIcon} className="coinIcons" alt="" />
            <img src={digibyteIcon} className="coinIcons" alt="" />
            <img src={litecoinIcon} className="coinIcons" alt="" />
            <img src={ethereumClassicIcon} className="coinIcons" alt="" />
         </>,
      "alltime": '.26',
      "hours": .65,
      "lastdays": <img src={chartredIcon} alt="" />,
      "accordionData": <PoolData />
   },
   {
      "name": 'Fund name',
      "volume": '$5,425,960.21',
      "topassets":
         <>
            <img src={litecoinIcon} className="coinIcons" alt="" />
            <img src={ethereumClassicIcon} className="coinIcons" alt="" />
            <img src={bitcoinIcon} className="coinIcons" alt="" />
         </>,
      "alltime": '10.01',
      "hours": 2.65,
      "lastdays": <img src={chartIcon} alt="" />,
      "accordionData": <PoolData />
   },
   {
      "name": 'Tund name',
      "volume": '$5,425,960.21',
      "topassets":
         <>
            <img src={ethereumIcon} className="coinIcons" alt="" />
            <img src={zcashIcon} className="coinIcons" alt="" />
            <img src={dashDashIcon} className="coinIcons" alt="" />
            <img src={vertcoinIcon} className="coinIcons" alt="" />
            <img src={digibyteIcon} className="coinIcons" alt="" />
            <img src={litecoinIcon} className="coinIcons" alt="" />
            <img src={ethereumClassicIcon} className="coinIcons" alt="" />
            <img src={bitcoinIcon} className="coinIcons" alt="" />
            <span className="moreValue">+3</span>
         </>,
      "alltime": '.12',
      "hours": .65,
      "lastdays": <img src={chartredIcon} alt="" />,
      "accordionData": <PoolData />
   }
];

export const walletcolumns: any = [
   ['Nick name', 'name', {
      options: {
         order: true,
      }
   }],
   ['Wallet Address', 'wallet_address'],
   ['Net Worth', 'networth'],
   ['Number of Assets', 'assets', {
      options: {
         order: true,
         number: true,
      }
   }
   ],
   ['Performance', 'performance', {
      options: {
         order: true,
         number: true,
      }
   }],
];

export const leaderboardcolumns: any = [
   ['Nick Name', 'name', {
      options: {
         order: true,
         width: 120,
      }
   }],

   ['Wallet Address', 'wallet_address', {
      options: {
         order: true,

      }
   }],

   ['WTF Score', 'wtf_score', {
      options: {
         order: true,

      }
   }],

   ['Net Worth', 'net_worth', {
      options: {
         order: true,

      }
   }],

   ['Number of Assets', 'number_of_assets', {
      options: {
         order: true,
      }
   }],

   ['Performance', 'performance', {
      options: {
         order: true,
         number: true,
      }
   }],
];


export const leaderboardrows: any = [
   {
      "name": 'Asset Name',
      "wallet_address": 'Address',
      "wtf_score": '34',
      "net_worth": '12.27',
      "number_of_assets":
         <>
            <img src={ethereumIcon} className="coinIcons" alt="" />
            <img src={zcashIcon} className="coinIcons" alt="" />
            <img src={dashDashIcon} className="coinIcons" alt="" />
            <img src={ethereumClassicIcon} className="coinIcons" alt="" />
            <span className="moreValue">+5</span>
         </>,
      "performance": 2.65,
      "accordionData": <LeaderboardData />
   }
];

export const walletrows: any = [
   {
      "name": 'Wallet Name',
      "wallet_address": 'Address',
      "assets":
         <>
            <img src={ethereumIcon} className="coinIcons" alt="" />
            <img src={zcashIcon} className="coinIcons" alt="" />
            <img src={dashDashIcon} className="coinIcons" alt="" />
            <span className="moreValue">+3</span>
         </>,
      "networth": 12.27,
      "performance": 2.65,
      "accordionData": <WalletData />

   }
];

export const dataColumnWallet: any = [
   ['Wallet Address', 'address'],
   ['Total', 'total', {
      options: {
         order: true,

      }

   }
   ],
   ['Action', 'action']
];

export const dataColumn: any = [
   ['Ranking', 'id', {
      options: {
         headerClassName: "dash-rank"
      }
   }],
   ['Name', 'name', {
      options: {
         headerClassName: "dash-name"
      }
   }],
   ['Category', 'category', {
      options: {
         headerClassName: "dashtooltip",
         cellClassName: "dashtooltip",
         toolTip: true
      },

   }],
   ['Market Cap', 'market_cap', {
      options: {
         order: true,
         minwidth: 140
      }

   }],
   ['Performance 24H', 'price_24_h', {
      options: {
         number: true
      }
   }
   ],
   ['Twitter Followers', 'twitter_followers']
];

export const allColumnPool: any = [
   ['Name', 'name', {
      options: {
         order: true,
      },
   }],
   ['Liquidity', 'liquidity'],
   ['Fees (24hr)', 'fee_24h', {
      options: {
         order: true,
         number: true,
         hideZero: true,
      }
   }],
];

export const columnDataFn = () => {
   return [
      ['Name', 'name', {
         options: {
            order: true,
         },
      }],
      ['Liquidity', 'liquidity'],
      ['Volume (24hrs)', 'volume_24h', {
         options: {
            order: true,
            number: true,
            hideZero: true,
         }
      }],
      ['Volume (7d)', 'volume_7d', {
         options: {
            order: true,
            number: true,
            hideZero: true,
         }
      }
      ],
      ['Fees (24hr)', 'fee_24h', {
         options: {
            order: true,
            number: true,
            hideZero: true,
         }
      }],
      ['1y Fees / Liquidity', 'liquidity'],
   ];
}

export const syncColumnDataFn = () => {
   return [
      ['Name', 'name', {
         options: {
            order: true,
         },
      }],
      ['Liquidity', 'liquidity'],
      ['Volume (24hrs)', 'volume_24h', {
         options: {
            order: true,
            number: true,
            hideZero: true,
         }
      }],
      ['Volume (7d)', 'volume_7d', {
         options: {
            order: true,
            number: true,
            hideZero: true,
         }
      }
      ],
      ['Fees (24hr)', 'fee_24h', {
         options: {
            order: true,
            number: true,
            hideZero: true,
         }
      }],
      ['1y Fees / Liquidity', 'liquidity'],
   ];
}

export const transactionColumn: any = [
   ['Signature', 'txHash'],
   ['Type', 'type', {
      options: {
         headerClassName: 'wdth120'
      }
   }],
   ['Date', 'blockTime', {
      options: {
         headerClassName: 'wdth150'
      }
   }],
   ['Token Account', 'address', {
      options: {
         order: true,
         headerClassName: 'wdth200'
      }
   }],
   ['Change Amount', 'changeamount', {
      options: {
         order: true,
         number: true,
         headerClassName: 'wdth150'
      }
   }],
   ['From/To', 'token', {
      options: {
         order: true,
         headerClassName: 'wdth200'
      }
   }],
];


export const tokenaccountscoinscolumns: any = [
   ['', 'logoURL'],
   ['TOKEN', 'mint', {
      options: {
         order: true,
      }
   }],
   ['ACCOUNT ADDRESS', 'pubkey', {
      options: {
         order: true,
         headerClassName: "assettooltip",
         cellClassName: "assettooltip",
         toolTip: true
      }
   }],
   ['BALANCE', 'uiAmount', {
      options: {
         order: true,
         number: true,
         hideZero: false
      }
   }
   ],
   ['TOKEN PRICE', 'price'],
   ['VALUE (USDT)', 'usdAmount', {
      options: {
         order: true,
         number: true,
         hideZero: false
      }
   }]
];

export const tokenaccountscolumns: any = [
   ['', 'logoURL'],
   ['TOKEN', 'mint', {
      options: {
         order: true,
      }
   }],
   ['TOKEN ADDRESS', 'pubkey', {
      options: {
         order: true,
      }
   }],
   ['BALANCE', 'uiAmount', {
      options: {
         order: true,
         number: true,
         hideZero: false
      }
   }],
   ['Value (USDT)', 'usdAmount', {
      options: {
         order: true,
         number: true,
         hideZero: false
      }
   }]
];