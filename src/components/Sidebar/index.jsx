import React from 'react'
import { Container, Brand, Menu, MenuItem, CollapseButton } from './styles'
import Logo from '../../images/brand/logo.png'
import { Icon } from 'react-icons-kit'
import * as FontAwesome from 'react-icons-kit/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = props => {
  const [collapsed, setCollapsed] = props.state
  const profile = useSelector(state => state.user.profile)
  return (
    <Container collapse={collapsed}>

      <CollapseButton onClick={() => setCollapsed(!collapsed)}>
        <Icon icon={FontAwesome.alignJustify} />
      </CollapseButton>

      <Brand src={Logo} className='brand-logo' alt='Brand Logo' />
      <Menu>

        {props.menuItemList.map((menuItem, index) => {
          if (!menuItem.roles.includes(profile.role) && menuItem.roles.length > 0) { return }
          return (
            <MenuItem active={window.location.pathname.split('/').includes(menuItem.route)} key={index}>
              <Link to={`${props.match.path}/${menuItem.route}`}>
                <Icon
                  icon={FontAwesome[menuItem.icon] || FontAwesome['thLarge']}
                  size={20}
                />
                {!collapsed ? <span>{menuItem.title}</span> : ''}
              </Link>
            </MenuItem>
          )
        })}
      </Menu>
    </Container>
  )
}

export default Sidebar
