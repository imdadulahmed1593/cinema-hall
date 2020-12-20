import axios from "axios";

const instance = axios.create({
  baseURL: "https://fathomless-crag-55421.herokuapp.com", //the api (cloud function) url
});

export default instance;
// "http://localhost:8080"
// "https://fathomless-crag-55421.herokuapp.com"
