import api from '../config/api';

const getHome = async props => api.get('home?langcode=es', { ...props });

export default getHome;
