import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Home, Preferences, Providers } from '../../pages'

export default function Dashboard (props) {
  return (
    <React.Fragment> <Switch>
      <Route path={`${props.match.path}/home`} component={Home} />
      <Route path={`${props.match.path}/profile`} component={Preferences} />
      <Route path={`${props.match.path}/providers`} component={Providers} />

      <Redirect from='*' to={`${props.match.path}/home`} />
    </Switch> </React.Fragment>
  )
}
