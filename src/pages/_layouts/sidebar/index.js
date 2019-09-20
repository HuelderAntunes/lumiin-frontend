import React, { useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import GlobalStyle from '../../../styles/global'
import colors from '../../../styles/colors'
import Avatar from '../../../images/avatar/leo.png'
import baseData from '../../../testData.json'
import { Page, Profile, ProfileItem, LoadingContainer } from '../../../styles/app'
import ExpandedButton from '../../../components/ExpandButton'
import { Menu, Dropdown } from 'antd'
import { withRouter, Link } from 'react-router-dom'

import Loader from 'react-loader-spinner'
import { signOut } from '../../../store/modules/auth/actions'
function SidebarLayout (props) {
  const sidebarState = useState(true)
  const profile = useSelector(state => state.user.profile)
  const [collapse] = sidebarState
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
  return (
    <React.Fragment>

      <Sidebar menuItemList={baseData.menuitemList} state={sidebarState} match={props.match} />
      <Profile>
        <Dropdown overlay={menu}>
          <div className='ant-dropdown-link'>
            <ExpandedButton image={profile.avatar.url} text={`${nameSplit[0]} ${nameSplit.length > 1 ? (nameSplit[1][0] + '.') : ''}`} />
          </div>
        </Dropdown>
      </Profile>
      <Page collapse={collapse}>
        { props.children }
      </Page>

      <GlobalStyle />
    </React.Fragment>
  )
}

export default withRouter(SidebarLayout)
