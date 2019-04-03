import api from '../config/api';

const getHome = async props => api.get('home', { ...props });

export default getHome;
