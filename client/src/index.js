import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import "bulma/css/bulma.css";

export let store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

store.subscribe(() => {
  console.log("Store changed!", store.getState())
})

