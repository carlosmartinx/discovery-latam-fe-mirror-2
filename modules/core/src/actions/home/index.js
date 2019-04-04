import {
  appFetchHomeDataRequestAC,
} from './actionCreators';

// eslint-disable-next-line import/prefer-default-export
export const getHomeAction = () => dispatch => dispatch(appFetchHomeDataRequestAC());
