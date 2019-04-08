import { getChannelInfo } from '../../api/app';
import {
  appFetchContentDataRequestAC,
  appFetchContentDataSuccessAC,
  appFetchContentDataErrorAC,
} from './actionCreators';

const getContentAction = route => async (dispatch) => {
  dispatch(appFetchContentDataRequestAC());
  try {
    const data = await getChannelInfo(route);
    dispatch(appFetchContentDataSuccessAC(data.data));
  } catch (error) {
    dispatch(appFetchContentDataErrorAC(error));
  }
};

export default getContentAction;
