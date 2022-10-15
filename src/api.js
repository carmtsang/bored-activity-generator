import axios from "axios";

const baseURL = `https://www.boredapi.com/api/`;

const fetchAPI = (endURL) => {
  return axios.get(`${baseURL}${endURL}`);
};

export { fetchAPI };
