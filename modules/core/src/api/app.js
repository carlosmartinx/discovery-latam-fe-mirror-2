import api from '../config/api';

const getHome = async props => api.get('home?langcode=es', { ...props });
const getChannelInfo = async (route, ...props) => api.get(route, { ...props });
const getSponsor = async (route, ...props) => api.get(route, { ...props });

export { getHome, getChannelInfo, getSponsor };
