/* eslint-disable no-undef */
import axios from 'axios';

const config = {
  baseURL: 'https://dev-discoverylatam.pantheonsite.io/discovery_home?langcode=es',
};

const api = axios.create(config);

export default api;
