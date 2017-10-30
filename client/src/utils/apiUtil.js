export const headers = () => {
  let a = sessionStorage.getItem('access-token');
  let c = sessionStorage.getItem('client');
  let e = sessionStorage.getItem('expiry');
  let u = sessionStorage.getItem('uid');
  return {
    'access-token': a,
    'token-type': 'Bearer',
    client: c,
    expiry: e,
    uid: u,
  };
};
