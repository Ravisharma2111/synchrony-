import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import useStyles from "../dashboard/styles";
import { useWallet } from "@solana/wallet-adapter-react";
import { API_PATH } from "../../api/api";

function NftGallery({ setCurrentTab }) {
  const classes = useStyles();
  const [nftGalleries, setNftGalleries] = useState([]);
  const { connected, publicKey } = useWallet();
  useEffect(function effectFunction() {
    let data = "";//localStorage.getItem('loggedInToken');

    if (connected) {
      let tokenkey = publicKey; data = tokenkey + "";
      /*data="AyYaN3qECb8SL3Y9eYNVKkFdwiWd91NyWrGskf5Djaeq";*/
      fetch(API_PATH + 'nftByTokenOwner.php?token=' + data)
        .then(response => response.json())
        .then(data => {
          let dataArray: any = [];
          for (var i = 0; i < data.length; i++) {
            if (data[i].description.hasOwnProperty('results')) {
              dataArray.push({ 'image': data[i].description.results.img });
            }
          }
          setNftGalleries(dataArray);
        })
        .catch(err => { });
    } else {
      fetch('https://galaxy.production.run.staratlas.one/nfts')
        .then(response => response.json())
        .then(data => { setNftGalleries(data); console.log("data", data); })
        .catch(err => { });
    }
  }, [connected]);

  return (
    <div className={classes.gallerySection}>
      <span>NFT Gallery</span>
      {nftGalleries && nftGalleries.map((obj, index) => (
        <>
          {index <= 2 &&
            <div key={index}><img className={classes.imageWidth} src={obj['image']} alt="" /></div>
          }
          {index === 3 &&
            <div key={index} className="count_img">
              <img className={classes.imageWidth} src={obj['image']} alt="" />
              <b>{(nftGalleries.length - 4)}+</b>
            </div>
          }
        </>
      ))}
    </div>
  );
};

export default NftGallery;
