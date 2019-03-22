/**
 * sagas
 */
import { all } from 'redux-saga/effects';

// Types
import type { Saga } from 'redux-saga';

const rootSaga = function* rootSagas(): Saga<void> {
  yield all([
    // ...HomeContainerSaga,
  ]);
};

export default rootSaga;
