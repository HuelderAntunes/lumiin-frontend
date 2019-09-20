import React from 'react'
import { Form, Input, Button, Upload, Icon, message, InputNumber, Row, Col, Select } from 'antd'
import Avatar from '../../../images/avatar/leo.png'
import { useSelector } from 'react-redux'
import CountryInput from '../CountryInput'

const ContactForm = (props) => {
  const { getFieldDecorator } = props.form
  const profile = useSelector(state => state.user)
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
          <Form.Item label='Telefone'>
            {getFieldDecorator('phone', {
              initialValue: '',
              rules: [{ required: true, message: 'Digite o numero de telefone.', whitespace: false }]
            })(<Input label='UF' />)}

          </Form.Item>

          <Form.Item label='Celular'>
            {getFieldDecorator('cellphone', {
              initialValue: '',
              rules: [{ required: true, message: 'Digite o numero de celular.', whitespace: false }]
            })(<Input />)}
          </Form.Item>

          <Form.Item label='Email Comercial:'>
            {getFieldDecorator('comercialMail', {
              initialValue: '',
              rules: [{ required: true, message: 'Digite seu email comercial.', whitespace: false }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='Website:'>
            {getFieldDecorator('website', {
              initialValue: '',
              rules: [{ required: false, message: 'Digite o endereço de seu website.', whitespace: false }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='Linkedin:'>
            {getFieldDecorator('linkedin', {
              initialValue: '',
              rules: [{ required: false, message: 'Digite seu Linkedin.', whitespace: false }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='Facebook:'>
            {getFieldDecorator('facebook', {
              initialValue: '',
              rules: [{ required: false, message: 'Digite seu Facebook.', whitespace: false }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='Instagram:'>
            {getFieldDecorator('instagram', {
              initialValue: '',
              rules: [{ required: false, message: 'Digite seu Instagram.', whitespace: false }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='Twitter:'>
            {getFieldDecorator('twitter', {
              initialValue: '',
              rules: [{ required: false, message: 'Digite seu Twitter.', whitespace: false }]
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

export default Form.create({ name: 'address_form' })(ContactForm)
