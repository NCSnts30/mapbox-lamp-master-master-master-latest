/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import axios from 'axios';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

const get = (url) => {
  return axios.get(url, headers);
};

export { get };
