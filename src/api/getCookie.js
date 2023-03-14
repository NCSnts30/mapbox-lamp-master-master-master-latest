const getCookie = (name) => {
  let cookieValue = ('; ' + document.cookie)
    .split(`; ${name}=`)
    .pop()
    .split(';')[0];

  return cookieValue;
};

export default getCookie;
