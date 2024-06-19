import { API_HOME_URL, TOKEN_STREAM_API } from "./api";
export const apiServices = {
    get_latest_pools,
    numberWithCommas,
    getTokenAccountsByOwner,
    convertDate,
    getChartHistory,
    getTransactionHistory,
    get,
    post,
    storeTokenStorage,
    updateUserDetails,
    getUserDetails,
    get_graph_data
};
function setGetter(data={},methodName='get',contentType='application/json'){
    let jsonArray = {};
    jsonArray['method'] = methodName;
    jsonArray['Content-Type'] = contentType;
    if(methodName !== "get"){
        jsonArray['body']=JSON.stringify(data);
    }
    
    return jsonArray;
}
function get_latest_pools(filter,type){
    let url = `${TOKEN_STREAM_API}pool`;
    if(filter !== ""){ url += "?category="+filter; }
    if(type === true){ url += "?search="+filter}
    //url ="https://ecomheroes.dev/synchrony/poolapi.php";
    return fetch(url,setGetter())
        .then(response => response.json())
       .then(data => { if(data.hasOwnProperty("errors")){ return false;} return data.data; })
       .catch(err=>{ return false;})
}
function getTokenAccountsByOwner(token){
    let url = `${API_HOME_URL}getTokenAccountsByOwner/${token}`;
    return fetch(url,setGetter())
        .then(response => response.json())
       .then(data => { if(data.hasOwnProperty("errors")){ return false;} return data; })
       .catch(err=>{ return false;})
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function convertDate (time) {
    const monthName = ['Jan','Feb','March','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    var ConvDate= new Date(time);
    return ConvDate.getDate() + " " + monthName[ConvDate.getMonth()]  + "," + ConvDate.getFullYear() ;
}
function getChartHistory(gecko_id,days){
   return fetch(`${TOKEN_STREAM_API}chart/v2/${gecko_id}?chart=${days}`)
    .then(response =>response.json())
    .then(({data}) => {
        if(data.hasOwnProperty("errors")){ return false;} return data.prices || [];
    }).catch(err =>{ return false; });
}

 function getTransactionHistory(tokenKey,offset){
    let url = `${API_HOME_URL}getTransactionHistory?tokenKey=${tokenKey}&offset=${offset}&format=json`;
    return fetch(url,setGetter())
        .then(response => response.json())
       .then(data => { if(data.hasOwnProperty("errors")){ return false; } return data; })
       .catch(err=>{ return false;})
}
function get(pathURL,data={}){
    let url = `${API_HOME_URL}${pathURL}`;
    return fetch(url, setGetter(data))
        .then(response => response.json())
        .then(data => { if(data.hasOwnProperty("errors")){ return false; } return data; })
        .catch(err=>{ return false;})
}
function post(pathURL,data={}){
    let url = `${API_HOME_URL}${pathURL}`;
    return fetch(url,setGetter(data,'post'))
        .then(response => response.json())
       .then(data => { if(data.hasOwnProperty("errors")){ return false; } return data; })
       .catch(err=>{ return false;})
} 
function storeTokenStorage(token,type,searchToken=""){
    let url = `${API_HOME_URL}store_wallet_token`;
    return fetch(url, setGetter({'token':token, 'walletype':type, 'searchToken':searchToken},'post'))
        .then(response => response.json())
       .then(data => { if(data.hasOwnProperty("errors")){ return false; } return data; })
       .catch(err=>{ return false;})
}
function updateUserDetails(name,description,token){
    let url = `${API_HOME_URL}user-details/${token}`;
    return fetch(url,setGetter({'name':name,'description':description,'token':token},'post'))
        .then(response => response.json())
       .then(data => { if(data.hasOwnProperty("errors")){ return false;} return data; })
       .catch(err=>{ return false;})
}
function getUserDetails(token){
    let url = `${API_HOME_URL}user-details/${token}`;
    return fetch(url,setGetter({},'get'))
        .then(response => response.json())
       .then(data => { if(data.hasOwnProperty("errors")){ return false;} return data; })
       .catch(err=>{ return false;})
}
function get_graph_data(token){
    let url = `${API_HOME_URL}get-graph-data/${token}`;
    return fetch(url,setGetter({},'get'))
        .then(response => response.json())
       .then(data => { if(data.hasOwnProperty("errors")){ return false;} return data; })
       .catch(err=>{ return false;})
}