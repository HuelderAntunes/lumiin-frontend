import React from 'react'
import { Form, Input, Button, Upload, Icon, message, Row, Col } from 'antd'
import Avatar from '../../../images/avatar/leo.png'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfileRequest } from '../../../store/modules/user/actions'

function PasswordForm (props) {
  const dispatch = useDispatch()
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form
  const passwordError = isFieldTouched('password') && getFieldError('password')
  const { email } = useSelector(state => state.user.profile)
  function handleSubmit (e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        values = { ...values, email }
        dispatch(updateProfileRequest(values))
        props.form.resetFields()
      }
    })
  }

  return (<div>
    <Row>
      <Col span={8}>
        <Form onSubmit={handleSubmit}>
          <Form.Item label='Old Password' validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
            {getFieldDecorator('oldPassword', {
              rules: [{ required: true, message: 'Please input your old password!' }]
            })(
              <Input
                prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                type='password'
                placeholder='Password'
              />
            )}
          </Form.Item>
          <Form.Item label='New Password' validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your new password!' }]
            })(
              <Input
                prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                type='password'
                placeholder='Password'
              />
            )}
          </Form.Item>
          <Form.Item label='Confirm New Password' validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
            {getFieldDecorator('confirmPassword', {
              rules: [{ required: true, message: 'Please confirm new password!' }]
            })(
              <Input
                prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                type='password'
                placeholder='Password'
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Salvar
            </Button>
          </Form.Item>

        </Form>
      </Col>
    </Row>
  </div>)
}

export default Form.create({ name: 'password_form' })(PasswordForm)
