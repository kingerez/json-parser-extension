import { ModeAction } from "../actions/actionTypes";

export const modeReducer = (state: string = 'dark', action: ModeAction) => {
  if (action.type === 'changeMode') {
    const newMode = action.mode === 'dark' ? 'light' : 'dark';
    return newMode;
  }

  return state;
};
