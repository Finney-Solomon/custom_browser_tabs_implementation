
import { createStore } from 'redux';
import tabsReducer from './reducer';

const configureStore = () => {
  return createStore(tabsReducer);
};

export default configureStore;
