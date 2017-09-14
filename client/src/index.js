import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "./reducers";
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import "bulma/css/bulma.css";

export let store = createStore(reducers, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();