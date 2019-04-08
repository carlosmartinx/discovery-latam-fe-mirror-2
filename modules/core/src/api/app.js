import api from '../config/api';

const getHome = async props => api.get('home?langcode=es', { ...props });
const getChannelInfo = async (route, ...props) => api.get(route, { ...props });
const getSponsor = async (route, ...props) => api.get(route, { ...props });
const getChannelcodes = async (channel, ...props) => api.get(`channelcodes?channel=${channel}`, { ...props });
const getProgrammingChannel = async (channel, date, ...props) => api.get(`parrilla?channel_code=${channel}&date=${date}`, { ...props });

export {
  getHome, getChannelInfo, getSponsor, getChannelcodes, getProgrammingChannel,
};
