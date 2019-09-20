import React from 'react'
import { Form, Input, Button, Col, Row, Radio } from 'antd'
import ProviderModal from './ProviderModal'
import { useSelector, useDispatch } from 'react-redux'
import { inviteUserRequest } from '../../store/modules/user/actions'
import roles from '../../config/roles'
import generator from 'generate-password'
const MailForm = (props) => {
  const dispatch = useDispatch()
  const { getFieldDecorator } = props.form
  function handleSubmit (e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        values = { ...values, password: generator.generate({ length: 10, numbers: true }) }
        dispatch(inviteUserRequest(values))
        props.form.resetFields()
      }
    })
  }
  return (<div>
    <Row>
      <Col span={12}>
        <Form onSubmit={handleSubmit}>
          <Form.Item label='Nome:'>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Insira um nome.'
                }
              ]
            })(<Input />)}

          </Form.Item>
          <Form.Item label='E-mail:'>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Email inválido.'
                }
              ]
            })(<Input />)}

          </Form.Item>
          <Form.Item label='Role'>
            {getFieldDecorator('role', {
              rules: [
                {
                  required: true,
                  message: 'Role inválida.'
                }
              ]
            })(
              <Radio.Group>
                <Radio.Button value={roles.PROVIDER}>Fornecedor</Radio.Button>
                <Radio.Button value={roles.CLIENT}>Cliente</Radio.Button>
                <Radio.Button value={roles.MANAGER}>Admin</Radio.Button>
              </Radio.Group>)}
          </Form.Item>
          <Button type='primary' htmlType='submit'>
              Enviar
          </Button>
        </Form>
      </Col>
    </Row>
  </div>)
}

export default Form.create({ name: 'profile_form' })(MailForm)
