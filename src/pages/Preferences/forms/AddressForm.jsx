import React from 'react'
import {
  Form,
  Input,
  Button,
  Upload,
  Icon,
  message,
  InputNumber,
  Row,
  Col,
  Select
} from 'antd'
import Avatar from '../../../images/avatar/leo.png'
import { useSelector } from 'react-redux'
import CountryInput from '../CountryInput'

const AddressForm = props => {
  const { getFieldDecorator } = props.form
  const profile = useSelector(state => state.user.profile)
  const InputGroup = Input.Group
  const { Option } = Select
  function handleSubmit(e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col span={8}>
            <Form.Item label="País">
              {getFieldDecorator('country', {
                initialValue: '',
                rules: [
                  {
                    required: false,
                    message: 'Selecione o páis.',
                    whitespace: false
                  }
                ]
              })(<CountryInput />)}
            </Form.Item>
            <Form.Item label="Estado">
              {getFieldDecorator('state', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite a unidade federal.',
                    whitespace: false
                  }
                ]
              })(<Input label="UF" />)}
            </Form.Item>

            <Form.Item label="Cidade">
              {getFieldDecorator('city', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o nome da cidade.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Endereço:">
              {getFieldDecorator('address', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o endereço completo.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Complemento:">
              {getFieldDecorator('complement', {
                initialValue: '',
                rules: [
                  {
                    required: false,
                    message: 'Digite o complemento caso necessário.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Código Postal">
              {getFieldDecorator('postalCode', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o numero do CEP.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Salvar
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Form.create({ name: 'address_form' })(AddressForm)
