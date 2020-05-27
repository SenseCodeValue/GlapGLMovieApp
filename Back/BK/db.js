import fetch  from 'node-fetch';

const API_URL = "https://yts.am/api/v2/list_movies.json?";


export const getMovies = (limit, rating) =>{
    let REQEST_URL = API_URL;
    if(limit > 0){
        REQEST_URL += `limit=${limit}`
    }
    if(rating > 0){
        REQEST_URL += `&minimum_rating=${rating}`
    }
    console.log(REQEST_URL);
    return fetch(`${REQEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};