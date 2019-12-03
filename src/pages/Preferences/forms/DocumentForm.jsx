import React, { useState } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'

const DocumentForm = props => {
  const { getFieldDecorator } = props.form
  const [forms, setForms] = useState([
    { label: 'Documento', value: '' },
    { label: 'Foto', value: '' }
  ])
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
            {forms.map(form => (
              <Form.Item label={form.label}>
                {getFieldDecorator('document', {
                  initialValue: form.value,
                  rules: [
                    {
                      required: true,
                      message: 'Digite um documento válido.',
                      whitespace: false
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            ))}
            <Button
              type="primary"
              icon="plus"
              onClick={() =>
                setForms([
                  ...forms,
                  { label: 'Documento', value: '' },
                  { label: 'Foto', value: '' }
                ])
              }
            >
              Adicionar novo documento
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Form.create({ name: 'document_form' })(DocumentForm)
