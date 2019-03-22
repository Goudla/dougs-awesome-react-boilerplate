/**
 * Store
 */
import { createMigrate, persistStore, persistReducer } from 'redux-persist';
import localForage from 'localforage';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

// Reducers
import createRootReducer from './reducers';

// Sagas
import rootSaga from './sagas';

// Types
import type { BrowserHistory } from 'history/createBrowserHistory';
import type { Store } from 'redux';

const migrations = {
  '0': () => ({})
};

const config = {
  version: '0',
  key: 'primary',
  storage: localForage,
  debug: process.env.NODE_ENV !== 'production',
  whitelist: [],
  migrate: createMigrate(migrations, { debug: false })
};

const persistedReducer = (history: BrowserHistory) =>
  persistReducer(config, createRootReducer(history));

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history: BrowserHistory) {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store: Store<any, any> = createStore(
    persistedReducer(history),
    composeEnhancers(...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  let persistor = persistStore(store);

  return { persistor, store };
}
