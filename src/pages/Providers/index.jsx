import React from 'react'
import Title from '../../components/Title'
import { Card, Col, Row, Tabs } from 'antd'
import { Container } from './styles'
import MailForm from './MailForm'
import ProviderList from './ProviderList'

export const Home = props => {
  const { TabPane } = Tabs

  return (
    <React.Fragment>
      <Title>FORNECEDORES</Title>
      <Container>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='Lista' key='1'>
            <ProviderList />

          </TabPane>
          <TabPane tab='Convidar' key='2'>
            <MailForm />
          </TabPane>
          <TabPane tab='Pendentes' key='3'>
      Lista de Pendentes
          </TabPane>
        </Tabs>

      </Container>

    </React.Fragment>
  )
}

export default Home
