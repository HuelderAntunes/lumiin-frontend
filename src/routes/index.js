import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

import Login from '../pages/Login'
import ForgotPass from '../pages/ForgotPass'
import Route from './Route'

function BaseRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/app" component={Dashboard} isPrivate />
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={ForgotPass} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  )
}

export default BaseRouter
