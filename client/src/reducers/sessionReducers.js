export const sessionReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return true;
    case 'LOGOUT_USER':
      return false;
    default:
      return state;
  }
};