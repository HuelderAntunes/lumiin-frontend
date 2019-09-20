import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { DefaultLayout, SidebarLayout } from '../pages'

import PropTypes from 'prop-types'
import { store } from '../store'

export default function RouteWrapper ({
  component: Component,
  isPrivate,
  roles,
  ...rest
}) {
  const { signed } = store.getState().auth

  if (!signed && isPrivate) {
    return <Redirect to='/' />
  }

  if (signed && !isPrivate) {
    return <Redirect to='/app' />
  }
  const Layout = signed ? SidebarLayout : DefaultLayout
  return (<Route {...rest} render={props => (<Layout {...props}><Component {...props} /></Layout>)} />)
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  roles: PropTypes.array
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  roles: []
}
