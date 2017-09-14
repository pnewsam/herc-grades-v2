export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchStart = () => {
  return(
    { type: FETCH_START }
  );
};

export const fetchSuccess = (response) => {
  return(
    { type: FETCH_SUCCESS,
      response: response
    }
  );
};

export const fetchFailure = (error) => {
  return(
    { type: FETCH_FAILURE,
      error: error
    }
  );
};

