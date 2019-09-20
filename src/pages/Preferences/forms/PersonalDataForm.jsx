import React from 'react'
import { Form, Input, Button, Upload, Icon, message, Row, Col } from 'antd'
import Avatar from '../../../images/avatar/leo.png'
import { useSelector } from 'react-redux'

const PersonalDataForm = (props) => {
  const { getFieldDecorator } = props.form
  const profile = useSelector(state => state.user.profile)

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
          <Form.Item label='Nome Completo'>
            {getFieldDecorator('name', {
              initialValue: '',
              rules: [{ required: true, message: 'Digite seu nome completo.', whitespace: false }]
            })(<Input />)}
          </Form.Item>

          <Form.Item label='Nome Fantasia'>
            {getFieldDecorator('name', {
              initialValue: '',
              rules: [{ required: false, message: 'Digite o nome fantasia.', whitespace: false }]
            })(<Input />)}
          </Form.Item>

          <Form.Item label='CPF/CNPJ'>
            {getFieldDecorator('identityNumber', {
              initialValue: '',
              rules: [{ required: true, message: 'Digite o numero do documento.', whitespace: false }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='Inscrição Estadual'>
            {getFieldDecorator('stateDocument', {
              initialValue: '',
              rules: [{ required: false, message: 'Digite o numero do documento.', whitespace: false }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='Inscrição Municipal'>
            {getFieldDecorator('cityDocument', {
              initialValue: '',
              rules: [{ required: false, message: 'Digite o numero do documento.', whitespace: false }]
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

export default Form.create({ name: 'personaldata_form' })(PersonalDataForm)
