import useStyles from "./style";
import Typography from '@material-ui/core/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function GalleryCard({ name, description, attributes, image }) {
  const classes = useStyles();
  const [toggle, setToggle] = useState({ attr: false, desc: false });

  return (
    <Card className={classes.gallrycard}>
      <CardMedia component="img" height="180" image={image} alt="Img" className={classes.galleryImage} />
      <CardContent className={classes.gallrycardcontent}>
        <Typography gutterBottom variant="h5" component="div" className={classes.gallaryimgtitle}>
          <span> {name} </span>
        </Typography>
        <Typography onClick={() => { setToggle({ ...toggle, desc: !toggle.desc }) }} gutterBottom variant="h5" component="div" className={classes.gallaryimgtitle1}>
          Description <ExpandMoreIcon className={toggle.desc === true ? classes.iconRotate : classes.icon} />
        </Typography>
        <div className={toggle.desc === true ? "gallerybox openPanel" : "gallerybox hidePanel"}>
          <div className={classes.galleyimgdescription}>
            <Typography className="desciption">{description}</Typography>
          </div>
        </div>
        <Typography onClick={() => { setToggle({ ...toggle, attr: !toggle.attr }) }} gutterBottom variant="h5" component="div" className={classes.gallaryimgtitle1}>
          Tags <ExpandMoreIcon className={toggle.attr === true ? classes.iconRotate : classes.icon} />
        </Typography>
        <div className={toggle.attr === true ? "gallerybox openPanel" : "gallerybox hidePanel"}>
          <div className={classes.galleyimgdescription}>
            <div className={classes.imgdesAttr}>
              {Object.keys(attributes).map((data, kindex) => (
                <Typography key={kindex}  >
                  <span className="label">{data}</span>
                  <span className="value">{attributes[data]}</span>
                </Typography>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
