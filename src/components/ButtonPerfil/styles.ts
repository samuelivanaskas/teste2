import styled from 'styled-components'

import { cores } from '../../styles'
import { Props } from '.'

export const ButtonPerfilBar = styled.button<Props>`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  width: 300px;
  height: 24px
  text-decoration: none;
`
