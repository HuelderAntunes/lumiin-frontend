import React, { useState } from 'react'
import { Modal, Button } from 'antd'

function ProviderModal (props) {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setVisible(false)
    }, 3000)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <div>
      <Button style={{ padding: 0 }} type={props.buttonType || 'primary'} onClick={showModal}>
        {props.buttonText}
      </Button>
      <Modal
        visible={visible}
        title={props.title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            {props.cancelText}
          </Button>,
          <Button key='submit' type='primary' loading={loading} onClick={handleOk}>
            {props.submitText}
          </Button>
        ]}
      >
        { props.children }
      </Modal>
    </div>
  )
}

export default ProviderModal
