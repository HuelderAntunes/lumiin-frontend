import React from 'react'
import { Form, Input, Row, Col } from 'antd'

const BankForm = (props) => {
  const { getFieldDecorator } = props.form
  return (
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

      </Col>

    </Row>)
}

export default BankForm
