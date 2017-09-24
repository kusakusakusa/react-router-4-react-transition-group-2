import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Content from '_components/Content'
import Home from '_components/Home'

const App = () => {
  return (~
    %main.grid-container
      .grid-x.grid-margin-x
        %Switch
          %Route(
            path="/:contentId"
            component={Content})
          %Route(
            path="/"
            exact=""
            component={Home})
  ~)
}

export default App