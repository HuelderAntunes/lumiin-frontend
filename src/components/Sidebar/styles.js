import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.aside`
  height: 100%;
  width: ${({ collapse }) => (!collapse ? '240px' : '70px')};
  background: ${colors.secondary};
  color: ${colors.gray};

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  float: left;
  position: fixed;

  font-size: 17px;

  button {
    margin-top: 10px;
    position: absolute;
  }

  img {
    width: ${({ collapse }) => (!collapse ? '250px' : '150px')};
  }
`

export const CollapseButton = styled.button`
  background-color: ${colors.secondary};
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  color: ${colors.primary};
  left: 16px;
  transition: all 0.2s;
  &:hover {
    color: ${colors.white};
  }
`

export const Brand = styled.img`
  width: 64px;
  padding: 5px;

`

export const Menu = styled.ul`
  list-style: none;
`

export const MenuItem = styled.li`
  padding: 10px;
  font-weight: ${({ active }) => (active ? `bold` : 'none')};
  color: ${colors.gray};

  span {
    margin-left: 20px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: ${colors.primary};
  }
`
