import axios from 'axios';

export default () =>
  axios.post('/instrumentsList?instrument_type_code=cms&page=1', {
    // params: {
    //   instrument_type_code: 'cms',
    //   page: 1
    // }
  });
