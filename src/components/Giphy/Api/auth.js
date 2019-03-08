

import axios from 'axios'
//abstract this in a separate config/axios.js file
// here is fine for small config

let API_URL = 'https://api.giphy.com/v1/';


 export default function(options,callback) {
    // debugger
    if(!options.apiKey){
        throw new Error ('Giphy search would require a key');
    }
    let BASE_URL =API_URL+ options.searchType +'/'+ options.giphytarget;
//   let searchType = options.searchType ;
  //  let targetCat = options.giphytarget ;

    let params = {

        api_key: options.apiKey,
         q: options.term,
        tag: options.term,
        rating:options.rating,
        offset:options.offset,
        lang:options.lang,

        limit:(options.result) ? options.result :5,

    };
    axios.get(BASE_URL,{params})
    .then(response =>{
        if(callback){
            callback(response.data)

           console.log('search response', response.data);
        }
    })
    .catch(error => console.error(error));
 
}


