export const SHOW_FLASH = 'SHOW_FLASH';
export const HIDE_FLASH = 'HIDE_FLASH';

export const showFlash = (message, type) => {
  return({
    type: SHOW_FLASH,
    payload: {
      message: message,
      type: type
    }
  });
};

export const hideFlash = () => {
  return({
    type: HIDE_FLASH
  })
}