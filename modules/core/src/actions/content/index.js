import get from '../../api/content';
import {
  appFetchContentDataRequestAC,
  appFetchContentDataSuccessAC,
  appFetchContentDataErrorAC,
} from './actionCreators';

const getContentAction = route => async (dispatch) => {
  dispatch(appFetchContentDataRequestAC());
  try {
    const data = await get({ route });
    dispatch(appFetchContentDataSuccessAC(data.data, route));
  } catch (error) {
    dispatch(appFetchContentDataErrorAC(error));
  }
};

export default getContentAction;
