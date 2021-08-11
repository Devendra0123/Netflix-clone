
const API_key = "46aa4a245621b9fd18dfe2576424bcf6";

const request ={
    topRated :`movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
    popular :`movie/popular?api_key=${API_key}&language=en-US&page=1`,
    latest : `movie/latest?api_key=${API_key}&language=en-US`,
    upcoming:`movie/upcoming?api_key=${API_key}&language=en-US&page=1`
}

export default request;