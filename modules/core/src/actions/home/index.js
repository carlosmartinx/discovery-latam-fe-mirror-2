import { getHome } from '../../api/app';
import {
  appFetchHomeDataRequestAC,
  appFetchHomeDataSuccessAC,
  appFetchHomeDataErrorAC,
} from './actionCreators';

const getHomeAction = () => async (dispatch) => {
  dispatch(appFetchHomeDataRequestAC());
  try {
    const data = await getHome();
    dispatch(appFetchHomeDataSuccessAC(data.data));
  } catch (error) {
    dispatch(appFetchHomeDataErrorAC(error));
  }
};

export default getHomeAction;
