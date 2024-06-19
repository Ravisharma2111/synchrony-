
import Grid from '@material-ui/core/Grid';
import { useWallet } from '@solana/wallet-adapter-react';
import { apiServices } from '../../api/apiServices';
import useStyles from "../dashboard/styles";

function SearchForm({ inputText, setInputText, handleAction }) {
   const classes = useStyles();
   const { publicKey } = useWallet();
   const handleSearch = async (search) => {
      handleAction(search);
      await apiServices.storeTokenStorage(search, "search", publicKey + "");
   }

   return (
      <Grid >
         <div className={classes.btnGroupWithserach}>
            <div className={classes.btnSearch}>
               <div className={classes.search_box}>
                  <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} className="" />
                  <button name="search" onClick={(e) => handleSearch(inputText)} >Search</button>
               </div>
            </div>
         </div>
      </Grid>
   );
};

export default SearchForm;
