import React from 'react'
import { Container } from './styles'
import { Badge, Avatar } from 'antd'

function ExpandedButton(props) {
  return (
    <Container>
      <span>{props.text}</span>
      <Badge count={3}>
        <Avatar icon="user" src={props.image} />
      </Badge>
    </Container>
  )
}

export default ExpandedButton
