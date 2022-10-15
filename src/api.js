import axios from "axios";

const fetchAPI = (baseURL, endURL) => {
  return axios.get(`${baseURL}${endURL}`);
};

export { fetchAPI };
