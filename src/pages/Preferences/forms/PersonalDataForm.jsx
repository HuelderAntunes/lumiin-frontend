import React from 'react'
import CountryInput from '../CountryInput'
import {
  Form,
  Input,
  DatePicker,
  Button,
  Upload,
  Icon,
  message,
  Row,
  Col
} from 'antd'
import Avatar from '../../../images/avatar/leo.png'
import { useSelector } from 'react-redux'
import api from '../../../services/api'

const PersonalDataForm = props => {
  const { getFieldDecorator } = props.form
  const profile = useSelector(state => state.user.profile)
  const { token } = useSelector(state => state.auth)

  function handleSubmit(e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)

        const authStr = 'Bearer ' + token

        const {
          name,
          birthDate,
          identityNumber,
          rg,
          street,
          houseNumber,
          complement,
          neighborhood,
          city,
          cityDocument,
          country,
          stateDocument,
          state
        } = values

        const body = {
          name,
          birth_date: birthDate,
          cpf_cnpj: identityNumber,
          rg,
          street,
          house_number: houseNumber,
          house_complement: complement,
          neighborhood,
          city,
          state,
          country,
          state_subscription: stateDocument,
          civic_subscription: cityDocument
        }

        const config = {
          headers: { Authorization: authStr }
        }

        api.post('/personalData', body, config).then(res => console.log(res))
      }
    })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col span={8}>
            <Form.Item label="Nome Completo">
              {getFieldDecorator('name', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite seu nome completo.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Nome Fantasia">
              {getFieldDecorator('fantasyName', {
                initialValue: '',
                rules: [
                  {
                    required: false,
                    message: 'Digite o nome fantasia.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Data de Nascimento">
              {getFieldDecorator('birthDate', {
                initialValue: '',
                rules: [
                  {
                    type: 'object',
                    required: false,
                    message: 'Informe sua data de nascimento',
                    whitespace: false
                  }
                ]
              })(<DatePicker format="DD/MM/YYYY" />)}
            </Form.Item>

            <Form.Item label="CPF/CNPJ">
              {getFieldDecorator('identityNumber', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o numero do documento.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="RG">
              {getFieldDecorator('rg', {
                initialValue: '',
                rules: [
                  {
                    required: false,
                    message: 'Digite o numero do documento.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Rua">
              {getFieldDecorator('street', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o nome da rua',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Número">
              {getFieldDecorator('houseNumber', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o numero da casa',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Complemento">
              {getFieldDecorator('complement', {
                initialValue: '',
                rules: [
                  {
                    required: false,
                    message: 'Digite o complemento da casa',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Bairro">
              {getFieldDecorator('neighborhood', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o bairro da casa',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Cidade">
              {getFieldDecorator('city', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite a cidade da casa',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

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

            <Form.Item label="Inscrição Estadual">
              {getFieldDecorator('stateDocument', {
                initialValue: '',
                rules: [
                  {
                    required: false,
                    message: 'Digite o numero do documento.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Inscrição Municipal">
              {getFieldDecorator('cityDocument', {
                initialValue: '',
                rules: [
                  {
                    required: false,
                    message: 'Digite o numero do documento.',
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

export default Form.create({ name: 'personaldata_form' })(PersonalDataForm)
