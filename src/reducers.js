/**
 * reducers
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Types
import type { BrowserHistory } from 'history/createBrowserHistory';
import type { ConnectRouter } from 'connected-react-router';

type RootReducer = ConnectRouter;

export default (history: BrowserHistory): RootReducer =>
  combineReducers({
    router: connectRouter(history)
  });
