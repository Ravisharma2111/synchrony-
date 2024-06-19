import React, { useEffect, useState } from "react";
import Paper from '@material-ui/core/Paper';
import useStyles from "../dashboard/styles";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import profile from '../../assets/img/Profile.png';
import twitter from '../../assets/icon/tw.svg';
import Icon1 from '../../assets/icon/XEMXEMXEM.png';
import Icon2 from '../../assets/icon/DGDDGDDGD.png';
import Icon3 from '../../assets/icon/EVXEVXEVX.png';
import Icon4 from '../../assets/icon/WABIWABIWABI.png';
import { apiServices } from "../../api/apiServices";
import { useWallet } from "@solana/wallet-adapter-react";

function ProfileSection({ transaction, totalGraphBalance, setLoaderOpen }) {
   const classes = useStyles();
   const [updateStatus, setUpdateState] = useState(false);
   const { connected, publicKey } = useWallet();
   const defaultData = { last_trx: 0, name: 'Synchrony', description: ' Med is a full stack dev, and he specializes in app ntegration and quality assurance. Born and raised in Morocco, he earned his software engineering degree in France before getting Masters degree in data analytics in Poland. having worked on multiple blockchain projects, Med brings a wealth of block-specific experience to Synchrony.', image: '' };
   const [formData, setFormData] = useState(defaultData);
   const handleSubmit = async () => {
      setLoaderOpen(true);
      await apiServices.updateUserDetails(formData.name, formData.description, publicKey + "");
      setLoaderOpen(false);
      setUpdateState(false);
   }

   useEffect(() => {
      if (connected === true) {
         const getUserDetails = async () => {
            let res = await apiServices.getUserDetails(publicKey + "");
            if (res !== false) {
               if (res.results.name !== '' && res.results.name != null) {
                  setFormData(res.results)
               }
            }
         }
         getUserDetails();
      } else {
      } setFormData(defaultData);

   }, [connected]);

   return (
      <Paper className={classes.profileSection}>
         <div className={classes.discoverywelcome}>
            <div className={classes.profilePic} >
               <img src={profile} alt="" />
               {/* <span className="iconEdit"> 
                      <Input className="fileupload" type="file"/> {connected === true && <img src={editIcon} alt="" />}
                     
                     </span> */}
            </div>
            <div className={classes.profileContent} >
               <div className={classes.profileContentTitle}>
                  <div className="profileheading">
                     <Input 
                        className="headingtitle" 
                        onChange={(e) => 
                           { 
                              setFormData({ ...formData, name: e.target.value }); 
                              setUpdateState(true); 
                           }
                        } 
                        value={formData.name} 
                        />
                     <span className="profileLable">#longTermHold</span>
                  </div>
                  <img src={twitter} alt="" />
               </div>
               <TextareaAutosize 
                  className={classes.typograph} 
                  onChange={(e) => 
                     { 
                        setFormData({ ...formData, description: e.target.value }); 
                        setUpdateState(true); 
                     }
                  } 
                  value={formData.description} 
               />
               {(connected === true && updateStatus === true) && 
                  <Button className="profileUpdate" onClick={handleSubmit} variant="outlined">Update</Button>
               }
               <div className="profileachiment">
                  <span>Net worth <b>${totalGraphBalance} </b></span>
                  <span>Achievements <b><img src={Icon1} alt="" />
                     <img src={Icon2} alt="" /><img src={Icon3} alt="" /><img src={Icon4} alt="" /></b></span>
                  <span>Last TXR time <b>{formData.last_trx !== 0 && apiServices.convertDate(formData.last_trx * 1000)}</b></span>
               </div>
            </div>
         </div>
      </Paper>
   );
};

export default ProfileSection;
