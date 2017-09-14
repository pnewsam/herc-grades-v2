export const flashReducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_FLASH':
      return(
        state.concat({
          message: action.payload.message,
          type: action.payload.type
        })
      );
    case 'HIDE_FLASH':
      return(
        state.slice(1)
      );
    default:
      return state;
  }
};