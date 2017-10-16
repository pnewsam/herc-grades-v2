let initialState = {
  loggedIn: false,
  currentUser: null
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, {
        loggedIn: true,
        currentUser: action.user
      });
    case 'LOGOUT_USER':
      return Object.assign({}, state, {
        loggedIn: false,
        currentUser: null
      });
    default:
      return state;
  }
};
