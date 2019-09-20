import styled from 'styled-components'
import colors from '../../styles/colors'

import Background from '../../images/media/bg-ambient.jpg'
export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${Background});
  background-repeat: none;
  background-position: fixed;
  background-attachment: fixed;
  background-size: cover;

  h3 {
    color: ${colors.primary};
  }

  div {
    text-align: center;
    img{
      margin: 20px;
    }


  }


`
