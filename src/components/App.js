import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TransitionGroup from 'react-transition-group/TransitionGroup'

import Content from '_components/Content'
import Home from '_components/Home'

const App = () => {
  return (~
    %main.grid-container
      .grid-x.grid-margin-x
        %TransitionGroup
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