import { getSponsor } from '../../api/app';
import {
  appFetchContentDataRequestAC,
  appFetchContentDataSuccessAC,
  appFetchContentDataErrorAC,
} from './actionCreators';

const getSponsorAction = route => async (dispatch) => {
  dispatch(appFetchContentDataRequestAC());
  try {
    const data = await getSponsor(route);
    dispatch(appFetchContentDataSuccessAC(data.data));
  } catch (error) {
    dispatch(appFetchContentDataErrorAC(error));
  }
};

export default getSponsorAction;
