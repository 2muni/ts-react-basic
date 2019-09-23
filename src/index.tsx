import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import redux from './redux';
import App from './components/App';

const store = redux();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
