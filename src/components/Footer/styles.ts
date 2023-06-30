import styled from 'styled-components'

import { cores } from '../../styles'

export const FooterBar = styled.div`
  background-color: ${cores.rosaClaro};
  opacity: 0.8;
  padding: 60px;
  border-radius: 16px;
  margin-bottom: 80px;
  text-align: center;
  align-items: center;
  margin-bottom: 32px;
`

export const Logos = styled.ul`
  display: grid;
  grid-template-columns: 0.05fr 0.05fr 0.05fr;
  align-items: center;
`

export const TextFooter = styled.p`
  display: block;
  color: ${cores.rosa};
  font-weight: bold;
  margin-top: 40px;
`
