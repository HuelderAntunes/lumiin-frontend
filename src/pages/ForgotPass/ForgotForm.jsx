import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
// import { FormContainer } from './styles'
import './Form.css'
import { useDispatch } from 'react-redux'
import { signInRequest } from '../../store/modules/auth/actions'
import { withRouter } from 'react-router-dom'

function NormalForgotForm(props) {
  const { isFieldTouched, getFieldError, validateFields } = props.form
  const { getFieldDecorator } = props.form
  const dispatch = useDispatch()
  const passwordError = isFieldTouched('password') && getFieldError('password')

  const handleSubmit = e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        const { email, password } = values
        dispatch(signInRequest(email, password, props.history))
      }
    })
  }
  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
      <Form.Item
        label="Old Password"
        validateStatus={passwordError ? 'error' : ''}
        help={passwordError || ''}
      >
        {getFieldDecorator('oldPassword', {
          rules: [
            { required: true, message: 'Please input your old password!' }
          ]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item
        label="New Password"
        validateStatus={passwordError ? 'error' : ''}
        help={passwordError || ''}
      >
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: 'Please input your new password!' }
          ]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="New Password"
          />
        )}
      </Form.Item>
      <Form.Item
        label="Confirm New Password"
        validateStatus={passwordError ? 'error' : ''}
        help={passwordError || ''}
      >
        {getFieldDecorator('confirmPassword', {
          rules: [{ required: true, message: 'Please confirm new password!' }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Confirm new password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Redefinir senha
        </Button>
      </Form.Item>
    </Form>
  )
}

export default withRouter(
  Form.create({ name: 'profile_form' })(NormalForgotForm)
)
