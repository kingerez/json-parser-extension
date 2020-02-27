import { MouseAction } from "../actions/actionTypes";

export const mouseHoverReducer = (state = null, action: MouseAction) => {
  if (action.type === 'mouseOver') {
    return action.element;
  } else if (action.type === 'mouseLeave') {
    return null;
  }

  return state;
};
