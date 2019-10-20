import React from 'react'
import { useSelector } from 'react-redux'
import { Menu, Icon, Button } from 'antd'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

const MenuCollapse = function (props) {
  const profile = useSelector(state => state.user.profile)
  return (
    <Menu theme='dark' selectedKeys={[window.location.pathname.split('/').slice(-1).pop()]} mode='inline'>

      {props.menuItemList.map((menuItem, index) => {
        if (!menuItem.roles.includes(profile.role) && menuItem.roles.length > 0) { return }
        return (
          <Menu.Item key={menuItem.route}>
            <Link to={`${props.match.path}/${menuItem.route}`}>
              <Icon type={menuItem.icon || 'link'} size='20' />
              <span>{menuItem.title}</span>
            </Link>
          </Menu.Item>
        )
      })}

    </Menu>
  )
}

export default MenuCollapse
