import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from "./style";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import LoaderIcon from "./Loader";
import { apiServices } from '../../api/apiServices';
import SearchForm from '../discovery/SearchForm';
import GalleryCard from './GalleryCard';

function Gallery({ inputText, setInputText }) {
    const classes = useStyles();
    const [nftGalleries, setNftGalleries] = useState([]);
    const { connected, publicKey } = useWallet();
    const [loaderOpen, setLoaderOpen] = useState(false);
    
    const listGallery = async (tokenKey) => {
        setLoaderOpen(true);
        let res = await apiServices.get("getGallery?tokenKey=" + tokenKey);
        if (res !== false) {
            setNftGalleries(res.results);
        }
        setLoaderOpen(false);
    }

    useEffect(() => {
        let tokenkey = "";
        setLoaderOpen(true);
        if (connected) { tokenkey = publicKey + ""; }
        if (inputText.trim() !== '') { tokenkey = inputText.trim(); }
        listGallery(tokenkey);

    }, [connected]);

    return (
        <div >
            <LoaderIcon loaderOpen={loaderOpen} />
            <Container fixed>
                <SearchForm inputText={inputText} setInputText={setInputText} handleAction={listGallery} />
                <Typography className={classes.subtitleTrans} component={"h2"}>NFT Gallery</Typography>
                <Grid container spacing={2}>
                    <Grid container spacing={2} className={classes.gallerylist}>
                        {(nftGalleries) ? nftGalleries.map((obj, index) => (
                            <Grid item xs={12} sm={4} md={3} key={index}>
                                <Paper className={classes.boxgrid}>
                                    <GalleryCard name={obj['name']} description={obj['description']} attributes={obj['attributes']} image={obj['image']} />
                                </Paper>
                            </Grid>
                        )) : 
                            <Typography className={classes.noRecords}>No gallery found!</Typography>
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Gallery;
