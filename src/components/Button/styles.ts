import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const ButtonLink = styled.button<Props>`
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  text-decoration: none;
`
