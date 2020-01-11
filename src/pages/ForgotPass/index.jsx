import React from 'react'
import { Container } from './styles'
import Logo from '../../images/brand/logo.png'
import ForgotForm from './ForgotForm'

const Login = () => {
  return (
    <Container>
      <div>
        <img src={Logo} alt="Logo" />
        <ForgotForm />
      </div>
    </Container>
  )
}

export default Login
