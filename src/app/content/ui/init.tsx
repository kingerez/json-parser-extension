import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { App } from './App';

export const init = (json: any) => {
  const store = createStore(rootReducer, { json });
  const root = document.createElement('div');
  document.body.appendChild(root);
  document.querySelector('html').style.overflow = 'hidden';
  document.querySelector('body').style.overflow = 'hidden';

  ReactDOM.render(<Provider store={store}><App /></Provider>, root);
};
