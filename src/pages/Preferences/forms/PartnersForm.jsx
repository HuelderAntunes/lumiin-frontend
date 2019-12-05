import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd'

const PartnersForm = props => {
  const { getFieldDecorator } = props.form
  function handleSubmit(e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  //personalData: Sequelize.INTEGER,
  //contacts: Sequelize.INTEGER,
  //documents: Sequelize.INTEGER
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col span={8}>
            <Form.Item label="Dados Pessoais">
              {getFieldDecorator('dados pessoais', {
                initialValue: '',
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
              {getFieldDecorator('contatos', {
                initialValue: '',
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
