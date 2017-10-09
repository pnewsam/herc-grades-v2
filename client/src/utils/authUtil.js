export const setBrowserSession = response => {
  sessionStorage.setItem('access-token', response.headers['access-token']);
  sessionStorage.setItem('client', response.headers['client']);
  sessionStorage.setItem('expiry', response.headers['expiry']);
  sessionStorage.setItem('uid', response.headers['uid']);
};
