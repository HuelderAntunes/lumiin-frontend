import React, { useState } from 'react'
import { Form, Input, Button, Upload, Icon, message, Row, Col } from 'antd'
import externalAssets from '../../../config/externalassets'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfileRequest } from '../../../store/modules/user/actions'
import api from '../../../services/api'
function getBase64 (img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload (file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const ProfileForm = (props) => {
  const dispatch = useDispatch()
  const { getFieldDecorator } = props.form
  const profile = useSelector(state => state.user.profile)
  const [loading, setLoading] = useState(false)
  const avatarUrl = profile.avatar ? profile.avatar.url : null
  const [imageUrl, setImageUrl] = useState(avatarUrl || externalAssets.anonUserAvatar)
  const [fileSource, setFileSource] = useState(profile.avatar ? profile.avatar.id : 0)
  console.log(profile)

  function handleChange (info) {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setLoading(false)
        setImageUrl(imageUrl)
      }
      )
    }
  };
  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className='ant-upload-text'>Upload</div>
    </div>
  )
  function handleSubmit (e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      values.avatar_id = fileSource
      if (!err) {
        console.log('Received values of form: ', values)

        dispatch(updateProfileRequest(values))
      }
    })
  }
  async function handleAction ({ file, onSuccess }) {
    const data = new FormData()
    data.append('file', file)
    const response = await api.post('files', data)

    const { id, url } = response.data
    setImageUrl(url)
    setFileSource(id)
  }

  return (<div>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col span={8}>
          <Form.Item label='Nickname'>
            {getFieldDecorator('name', {
              initialValue: profile.name,
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: false }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='E-mail'>
            {getFieldDecorator('email', {
              initialValue: profile.email,
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]
            })(<Input />)}
            <span style={{ marginLeft: '10px' }}>{true ? 'Email Verified.' : 'Email Not Verified.'}</span>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Salvar
            </Button>
          </Form.Item>

        </Col>
        <Col span={16} >
          <Form.Item label='Avatar' style={{ float: 'left', marginLeft: '20px' }}>

            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              beforeUpload={beforeUpload}
              customRequest={handleAction}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: '150px', height: '150px' }} /> : uploadButton}
            </Upload>

          </Form.Item>
        </Col>
      </Row>
    </Form>

  </div>)
}

export default Form.create({ name: 'profile_form' })(ProfileForm)
