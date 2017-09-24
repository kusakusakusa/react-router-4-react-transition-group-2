import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Content from '_components/Content'
import Home from '_components/Home'

const App = () => {
  return (
    <main className='grid-container'>
      <div className='grid-x grid-margin-x'>
        <Switch>
          <Route
            path="/:contentId"
            component={Content} />
          <Route
            path="/"
            exact
            component={Home} />
        </Switch>
      </div>
    </main>
  )
}

export default App