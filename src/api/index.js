/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import axios from 'axios';

import getCookie from './getCookie';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getCookie('user_token')}`,
};
const get = async ({ url }) => {
  let ret = null;

  ret = await axios
    .get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('user_token')}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });

  return ret;
};

const post = async ({ url, data }) => {
  let ret = null;
  ret = await axios.post(url, { ...data }, headers);
  return ret;
};

export { get, post };
