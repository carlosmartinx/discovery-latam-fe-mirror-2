/* eslint-disable no-undef */
import axios from 'axios';

const config = {
  baseURL: 'https://tudiscovery-staging.herokuapp.com/api/v1/',
};

const api = axios.create(config);

export default api;
