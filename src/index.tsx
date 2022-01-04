import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { store } from './store'
import * as React from 'react'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.querySelector('#root'),
);
