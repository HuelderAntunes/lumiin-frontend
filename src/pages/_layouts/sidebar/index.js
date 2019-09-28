import React, { useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import MenuCollapse from '../../../components/MenuCollapse'
import { useSelector, useDispatch } from 'react-redux'
import GlobalStyle from '../../../styles/global'
import colors from '../../../styles/colors'
import Avatar from '../../../images/avatar/leo.png'
import baseData from '../../../testData.json'
import { Page, Profile, ProfileItem, LoadingContainer } from '../../../styles/app'
import ExpandedButton from '../../../components/ExpandButton'
import { Menu, Dropdown, Layout, Breadcrumb, Icon } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { signOut } from '../../../store/modules/auth/actions'
import Logo from '../../../images/brand/logo.png'
import { Brand } from '../../../components/Sidebar/styles'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
function
SidebarLayout (props) {
  const sidebarState = useState(true)
  const profile = useSelector(state => state.user.profile)
  const [collapsed, setCollapsed] = sidebarState
  const dispatch = useDispatch()

  function handleSignOut () {
    dispatch(signOut(props.history))
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to={`${props.match.path}/profile`}>
          <ProfileItem >
              Preferências
          </ProfileItem>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <ProfileItem onClick={handleSignOut}>
          Logout
        </ProfileItem>
      </Menu.Item>
    </Menu>
  )
  const nameSplit = profile.name.split(/\s+/g)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  }

  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div style={{ textAlign: 'center' }}>
            <Brand src={Logo} className='brand-logo' alt='Brand Logo' />
          </div>
          <MenuCollapse menuItemList={baseData.menuitemList} state={sidebarState} match={props.match} />
        </Sider>
        <Layout>
          <Profile>
            <Dropdown overlay={menu}>
              <div className='ant-dropdown-link'>
                <ExpandedButton image={profile.avatar.url} text={`${nameSplit[0]} ${nameSplit.length > 1 ? (nameSplit[1][0] + '.') : ''}`} />
              </div>
            </Dropdown>
          </Profile>
          <Page collapse={collapsed}>
            { props.children }
          </Page>
        </Layout>
      </Layout>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default withRouter(SidebarLayout)
