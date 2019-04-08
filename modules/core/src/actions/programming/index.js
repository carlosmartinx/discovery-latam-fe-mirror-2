import xml2js from 'xml2js';
import { getChannelcodes, getProgrammingChannel } from '../../api/app';
import {
  appFetchContentDataRequestAC,
  appFetchContentDataSuccessAC,
  appFetchContentDataErrorAC,
} from './actionCreators';

const getProgrammingAction = channel => async (dispatch) => {
  dispatch(appFetchContentDataRequestAC());
  try {
    const res = await getChannelcodes(channel);
    const programming = {
      channelsCode: res.data,
    };
    const countries = [];
    let firstCountryCode;
    let firstN = true;
    programming.channelsCode.forEach((itemCountry) => {
      const country = {};
      Object.entries(itemCountry).forEach((entry) => {
        country.name = entry['0'];
        country.code = entry['1'];
        if (firstN) {
          country.active = true;
          firstN = false;
          firstCountryCode = entry['1'];
        }
        countries.push(country);
      });
    });
    programming.countries = countries;

    const resProgrammingChannel = await getProgrammingChannel(firstCountryCode, '08042019');
    global.console.log(resProgrammingChannel);
    if (resProgrammingChannel.data) {
      const parser = new xml2js.Parser();
      parser.parseString(resProgrammingChannel.data, (err, result) => {
        if (err === null) {
          if (result['dni-listings']['get-listings-by-day']['0']['number-of-results']['0']) {
            const { programme } = result['dni-listings']['get-listings-by-day']['0']['channel-code']['0'];
            const shows = [];
            programme.forEach((show) => {
              shows.push({
                title: show['series-title']['0'],
                episode: show['programme-title']['0'],
                description: show['programme-description']['0'],
                time: show['start-time']['0'].formatted['0'].slice(0, -3),
                date: show.date['0'].formatted['0'],
                idChannel: 'discovery',
              });
            });
            programming.shows = shows;
          }
        } else {
          dispatch(appFetchContentDataErrorAC(err));
        }
      });
    }

    dispatch(appFetchContentDataSuccessAC(programming));
  } catch (error) {
    dispatch(appFetchContentDataErrorAC(error));
  }
};

export default getProgrammingAction;
