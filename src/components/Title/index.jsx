import React from 'react'
import { BottomBorder } from './styles'
import { PageHeader } from 'antd'

const Title = props => {
  return (
    <BottomBorder>
      <span>{props.children}</span>
    </BottomBorder>
  )
}

export default Title
