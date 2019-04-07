import api from '../config/api';

const getResults = async searchTerm => api.get(`search/${searchTerm}`);

export default getResults;
