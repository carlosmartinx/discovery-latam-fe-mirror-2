/* eslint-disable no-undef */
import axios from 'axios';

// TODO - deploy endpoint with refactor to prod
// baseURL: process.env.NODE_ENV === 'development' ? 'https://tudiscovery-staging.herokuapp.com/api/v1/' : 'https://www.tudiscovery.com/api/v1/',
const config = {
  baseURL: 'https://tudiscovery-staging.herokuapp.com/api/v1/',
};

const api = axios.create(config);

export default api;
