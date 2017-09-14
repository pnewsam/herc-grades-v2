let initialState = {
  isFetching: false,
  response: {},
  error: {}
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return(Object.assign({}, state, {
        isFetching: true
      }));
    case 'FETCH_SUCCESS':
      return(Object.assign({}, state, {
        isFetching: false,
        response: action.response
      }));
    case 'FETCH_FAILURE':
      return(Object.assign({}, state, {
        isFetching: false,
        error: action.error
      }));
    default:
      return state;
  }
};