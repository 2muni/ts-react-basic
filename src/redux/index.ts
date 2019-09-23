import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import modules from './modules';

export default () => {
  const store = createStore(modules, composeWithDevTools());

  return store;
};
