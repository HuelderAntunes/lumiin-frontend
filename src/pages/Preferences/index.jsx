import React from 'react'
import { Tabs } from 'antd'
import Title from '../../components/Title'
import ProfileForm from './forms/ProfileForm'
import PasswordForm from './forms/PasswordForm'
import PersonalDataForm from './forms/PersonalDataForm'
import AddressForm from './forms/AddressForm'
import ContactForm from './forms/ContactForm'
import DocumentForm from './forms/DocumentForm'
import PartnersForm from './forms/PartnersForm'
import BankForm from './forms/BankForm'
import { FormContainer } from './styles'

const Preferences = () => {
  const { TabPane } = Tabs
  return (<div>
    <Title>PERFIL</Title>

    <FormContainer>
      <Tabs defaultActiveKey='1'>
        <TabPane tab='Login' key='1'>
          <ProfileForm />
        </TabPane>
        <TabPane tab='Senha' key='2'>
          <PasswordForm />
        </TabPane>
        <TabPane tab='Dados Pessoais' key='3'>
          <PersonalDataForm />
        </TabPane>
        <TabPane tab='Endereço' key='4'>
          <AddressForm />
        </TabPane>
        <TabPane tab='Contatos' key='5'>
          <ContactForm />
        </TabPane>
        <TabPane tab='Sócios' key='6'>
          <PartnersForm />
        </TabPane>
        <TabPane tab='Documentos' key='7'>
          <DocumentForm />
        </TabPane>
        <TabPane tab='Dados Bancários' key='8'>
          <BankForm />
        </TabPane>
      </Tabs>
    </FormContainer>

  </div>)
}

export default Preferences
