import { combineReducers } from 'redux';
import { modeReducer } from './mode';
import { JSONReducer } from './json';
import { mouseHoverReducer } from './mouseHover';

export default combineReducers({
  mode: modeReducer,
  json: JSONReducer,
  hovering: mouseHoverReducer,
});