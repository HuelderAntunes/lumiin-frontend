import React from 'react'
import { Container } from './styles'
import Logo from '../../images/brand/logo.png'
import LoginForm from './LoginForm'

const Login = props => {
  return (
    <Container>

      <div>
        <img src={Logo} alt='Logo' />
        <LoginForm />
      </div>

    </Container>
  )
}

export default Login
