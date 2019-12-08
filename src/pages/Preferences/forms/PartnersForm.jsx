import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import api from '../../../services/api'
import { useSelector } from 'react-redux'

const PartnersForm = props => {
  const { getFieldDecorator } = props.form
  const { token } = useSelector(state => state.auth)
  function handleSubmit(e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)

        const authStr = 'Bearer ' + token

        const { personalData, contacts, documents } = values

        const body = {
          personalData,
          contacts,
          documents
        }

        const config = {
          headers: { Authorization: authStr }
        }

        api.post('/partners', body, config).then(res => console.log(res))
      }
    })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col span={8}>
            <Form.Item label="Dados Pessoais">
              {getFieldDecorator('personalData', {
                initialValue: '',
                type: 'number',
                rules: [
                  {
                    required: true,
                    message: 'Digite uma informação válida',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Contatos">
              {getFieldDecorator('contacts', {
                initialValue: '',
                type: 'number',
                rules: [
                  {
                    required: true,
                    message: 'Digite uma informação válida',
                    whitespace: false
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Documentos">
              {getFieldDecorator('documents', {
                initialValue: '',
                type: 'number',
                rules: [
                  {
                    required: true,
                    message: 'Digite uma informação válida',
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

export default Form.create({ name: 'partners_form' })(PartnersForm)
