import React from 'react'
import { Form, Input, Button, Upload, Icon, message, InputNumber, Row, Col, Select } from 'antd'
import Avatar from '../../../images/avatar/leo.png'
import { useSelector } from 'react-redux'
import CountryInput from '../CountryInput'

const BankForm = (props) => {
  const { getFieldDecorator } = props.form
  const profile = useSelector(state => state.user.profile)
  const InputGroup = Input.Group
  const { Option } = Select
  function handleSubmit (e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  return (<div>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col span={8}>
          <Form.Item label='Conta:'>
            {getFieldDecorator('account', {
              initialValue: '',
              rules: [{ required: true, message: 'Digite o numero da conta.', whitespace: false }]
            })(<Input />)}

          </Form.Item>
          <Form.Item label='Banco/Instituição:'>
            {getFieldDecorator('bank', {
              initialValue: '',
              rules: [{ required: true, message: 'Digite o nome do banco.', whitespace: false }]
            })(<Input />)}

          </Form.Item>

          <Form.Item label='Tipo de Conta:'>
            {getFieldDecorator('type', {
              initialValue: '',
              rules: [{ required: true, message: 'Digite o tipo de conta.', whitespace: false }]
            })(<Input />)}
          </Form.Item>

          <Form.Item label='Titular da Conta:'>
            {getFieldDecorator('name', {
              initialValue: '',
              rules: [{ required: true, message: 'Digite o nome do titular da conta.', whitespace: false }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='CPF do Titular:'>
            {getFieldDecorator('document', {
              initialValue: '',
              rules: [{ required: true, message: 'Digite o numero do documento.', whitespace: false }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='Agencia:'>
            {getFieldDecorator('agency', {
              initialValue: '',
              rules: [{ required: true, message: 'Digite o numero da agencia.', whitespace: false }]
            })(<Input />)}
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Salvar
            </Button>
          </Form.Item>

        </Col>

      </Row>
    </Form>

  </div>)
}

export default Form.create({ name: 'address_form' })(BankForm)
