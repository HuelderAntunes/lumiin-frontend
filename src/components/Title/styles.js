import styled from 'styled-components'
import colors from '../../styles/colors'

export const BottomBorder = styled.h1`

  font-weight: normal;

  font-size: 25px;
  padding: 25px;

  span {
    border-bottom: 2px solid;
    border-bottom-color: ${colors.primary};
  }
`
