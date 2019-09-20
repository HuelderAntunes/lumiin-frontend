import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'

export default function DefaultLayout ({ children }) {
  return (
    <React.Fragment>{ children }</React.Fragment>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}
