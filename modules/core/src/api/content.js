import api from '../config/api';

const get = async ({ route, ...props }) => api.get(route, { ...props });

export default get;
