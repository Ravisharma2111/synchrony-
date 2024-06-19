import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import useStyles from "../dashboard/styles";
import LoaderIcon from "../Gallery/Loader";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
   const classes = useStyles();
   const [windowHeight, setWindowHeight] = useState(500);
   const { children, loaderOpen } = props;
   const location = useLocation();
   useEffect(() => {
      if (windowHeight !== window.innerHeight) {
         setWindowHeight(window.innerHeight - 150)
      }

   }, [location]);
   return (
      <div className={classes.root} >
         <Header {...props} />
         <LoaderIcon loaderOpen={loaderOpen} />
         <div style={{ minHeight: windowHeight }}>{children}</div>
         <Footer {...props} />
      </div>
   );
};

export default Layout;
