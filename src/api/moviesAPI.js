// import axios from "axios";

// const moviesApi = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   headers: {
//     "content-type": "application/json;charset=utf-8",
//   },
// });

const API_MOVIES = {
  BASE_URL: "https://api.themoviedb.org/3/",
  API_KEY: "?api_key=8107b1f39c4e239c1875e77d35b9064e",
  UPCOMING: "movie/upcoming",
  TOP_RATED: "movie/top_rated",
  POPULAR: "movie/popular",
};

export { API_MOVIES };
