import React from 'react'
import { Form, Button } from 'antd'

import BankRow from './BankRow'

const BankForm = (props) => {
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
      <BankRow />
      <Form.Item>
        <Button type='primary' htmlType='submit'>
              Salvar
        </Button>
      </Form.Item>
    </Form>

  </div>)
}

export default Form.create({ name: 'address_form' })(BankForm)
