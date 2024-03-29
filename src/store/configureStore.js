import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from '../reducers';
import api from '../middleware/api';
import promise from '../middleware/promise';
import storage from '../middleware/storage';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});


const GMBStore = applyMiddleware(thunk, promise, api, storage, logger)(createStore);

export default function configureStore(onComplete) {
  const store = autoRehydrate()(GMBStore)(rootReducer);
  persistStore(store, { storage: AsyncStorage }, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}
