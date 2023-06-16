import styled from 'styled-components'

import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.brancoBack};
  padding: 8px;
  position: relative;

  .image {
    width: 310px;
    height: 160px;
    display: block;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  displau: block;
  margin-top: 16px;
`
