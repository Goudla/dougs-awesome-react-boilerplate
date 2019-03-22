import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { createBrowserHistory } from 'history';

// Styles
import './index.css';

import App from './App';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';

// History
const history = createBrowserHistory();

const { persistor, store } = configureStore(history);

// Environment
const { REACT_APP_VERSION } = process.env;
console.log(REACT_APP_VERSION);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
