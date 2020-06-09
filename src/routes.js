import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Banter, GraceShopper, Graze, Home, Orderista } from './components'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/banter' component={Banter} />
      <Route exact path='/grace-shopper' component={GraceShopper} />
      <Route exact path='/graze' component={Graze} />
      <Route exact path='/orderista' component={Orderista} />
    </Switch>
  )
}

export default Routes
