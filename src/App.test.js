import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import reducers from './reducers'

jest.mock('react-codemirror', () => 'textarea')

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(reducers)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
