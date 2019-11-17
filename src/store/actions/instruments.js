import getInstrumentsListRequest from '../../api/getInstrumentsList';

import {
  INSTRUMENTS_ERROR,
  INSTRUMENTS_SET,
  INSTRUMENTS_LOADING
} from '../types';

export const getInstrumList = () => dispatch => {
  dispatch({
    type: INSTRUMENTS_LOADING
  });

  return getInstrumentsListRequest()
    .then(({ data }) => {
      console.log(data);
      //   dispatch({
      //     type: SET_AUTH_TOKEN,
      //     payload: data.id_token
      //   });
    })
    .catch(({ response }) => {
      console.log(response);
      //   dispatch({
      //     type: SET_SIGNUP_ERROR,
      //     payload: response.data
      //   });
    });
};
