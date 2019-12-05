import React, { useState } from 'react'
import { Form, message, Input, Icon, Button, Row, Col, Upload } from 'antd'
const { Dragger } = Upload

const DocumentForm = props => {
  const { getFieldDecorator } = props.form
  const [forms, setForms] = useState([
    { label: 'Documento', value: '', type: 'form' },
    { label: 'Foto', value: '', type: 'image' }
  ])
  function handleSubmit(e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  function handleForm(form) {
    if (form.type === 'form') {
      return (
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
      )
    } else if (form.type === 'image') {
      return (
        <Dragger
          name="file"
          multiple={true}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          onChange={info => {
            const { status } = info.file
            if (status !== 'uploading') {
              console.log(info.file, info.fileList)
            }
            if (status === 'done') {
              message.success(`${info.file.name} file uploaded successfully`)
            } else if (status === 'error') {
              message.error(`${info.file.name} file uploaded failed.`)
            }
          }}
        >
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            Clique ou arraste o arquivo para esta área
          </p>
          <p className="ant-upload-hint">
            Suporte apenas para unicos uploads ou uploads em massa. Estritamente
            proibido fazer upload de arquivos de empresas ou outros tipos.
          </p>
        </Dragger>
      )
    }
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col span={10}>
            {forms.map(form => handleForm(form))}
            <Row type="flex" justify="end">
              <Button
                type="ghost"
                icon="plus"
                style={{ alignSelf: 'flex-end', marginTop: 10 }}
                onClick={() =>
                  setForms([
                    ...forms,
                    { label: 'Documento', value: '', type: 'form' },
                    { label: 'Foto', value: '', type: 'image' }
                  ])
                }
              >
                Adicionar novo documento
              </Button>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Form.create({ name: 'document_form' })(DocumentForm)
