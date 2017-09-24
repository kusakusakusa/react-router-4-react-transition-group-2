import '_stylesheets/main.sass'

import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from  'react-redux'
import reduxThunk from 'redux-thunk'

import reducers from '_reducers'

import App from '_components/App'

import WebFont from 'webfontloader'

import axios from 'axios'

axios.defaults.headers.common["Content-Type"] = "application/json"
axios.defaults.headers.common["Accept"] = "application/json"

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

const store = createStoreWithMiddleware(
  reducers)

WebFont.load({
  google: {
    families: ['Lato']
  }
})

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById("app"))