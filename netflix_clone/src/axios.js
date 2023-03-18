import axios from "axios";

const config = {   // this code is used to resolve the cores error 
    // we are seding this in heasder that allow this origin to acces that tmdb backend 
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
    },
};
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    https: config,
});

export default instance;
// //here write the
// //will be addeed in evry url bfore endpoints

// import axios from "axios";
// import cors from 'cors'

// const instance=axios.create({ // axios.create creates an instance of that url 
//     baseURL:"http://api.themoviesdb.org/3"
//     // application url madhe bhetnar tmdb chya
// });

// //  instance.get('/some_pageEndpoint') then it means
// //--> http://api.themoviesdb.org/3/some_pageEndpoint
// export default instance; 