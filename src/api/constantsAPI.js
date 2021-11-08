import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "content-type": "application/json;charset=utf-8",
  },
});

const API_PARAMS = {
  API_KEY: "?api_key=8107b1f39c4e239c1875e77d35b9064e",
  SEARCH: "search/movie",
  UPCOMING: "/upcoming",
  TOP_RATED: "/top_rated",
  POPULAR: "/popular",
  LANGUAGE: "language=",
};

export { api, API_PARAMS };
