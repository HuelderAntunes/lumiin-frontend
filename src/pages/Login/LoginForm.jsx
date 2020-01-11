import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { FormContainer } from './styles'
import './Form.css'
import { useDispatch, useSelector } from 'react-redux'
import { signInRequest } from '../../store/modules/auth/actions'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

function NormalLoginForm(props) {
  const { getFieldDecorator } = props.form
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        const { email, password } = values
        dispatch(signInRequest(email, password, props.history))
      }
    })
  }
  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not a valid e-mail!'
            },
            {
              required: true,
              message: 'Please input a valid e-mail!'
            }
          ]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true
        })(<Checkbox style={{ float: 'left' }}>Lembre de mim</Checkbox>)}
        <Link to="/forgot">
          <a style={{ float: 'right' }} href="#">
            Esqueci a senha
          </a>
        </Link>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Acessar
        </Button>
      </Form.Item>
    </Form>
  )
}

export default withRouter(
  Form.create({ name: 'profile_form' })(NormalLoginForm)
)
