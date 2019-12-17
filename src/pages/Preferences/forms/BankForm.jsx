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
import api from '../../../services/api'
import Avatar from '../../../images/avatar/leo.png'
import { useSelector } from 'react-redux'
import CountryInput from '../CountryInput'

const BankForm = props => {
  const { getFieldDecorator } = props.form
  const { token } = useSelector(state => state.auth)
  const profile = useSelector(state => state.user.profile)
  const InputGroup = Input.Group
  const { Option } = Select
  function handleSubmit(e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        const { account, bank, type, name, document, agency } = values
        console.log({ account, bank, type, name, document, agency })

        const authStr = 'Bearer ' + token
        //cpf: '48371574835',
        //holder: 'test',
        //account: 'test',
        //bank_branch: 'test',
        //bank: 'nubank'

        const body = {
          cpf: document,
          holder: name,
          account,
          bank_branch: type,
          bank
        }

        const config = {
          headers: { Authorization: authStr }
        }

        api
          .post('/bankData', body, config)
          .then(res => console.log(res))
          .catch(e => console.log(e))
      }
    })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col span={8}>
            <Form.Item label="Conta:">
              {getFieldDecorator('account', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o numero da conta.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Banco/Instituição:">
              {getFieldDecorator('bank', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o nome do banco.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Tipo de Conta:">
              {getFieldDecorator('type', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o tipo de conta.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Titular da Conta:">
              {getFieldDecorator('name', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o nome do titular da conta.',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="CPF do Titular:">
              {getFieldDecorator('document', {
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
            <Form.Item label="Agencia:">
              {getFieldDecorator('agency', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Digite o numero da agencia.',
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

export default Form.create({ name: 'address_form' })(BankForm)
