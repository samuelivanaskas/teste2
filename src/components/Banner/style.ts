import styled from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 360px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.80;

  .container {
    position: relative;
    padding-top: 270px;
    opacity: 0.80;
  }
`
export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: bold;
  max-width: 400px;
  color: ${cores.branco};
`
export const TextImage = styled.p`
  position: absolute;
  top: 32px;
  font-size: 18px;
  font-weight: bold;
  max-width: 150px;
  color: ${cores.branco};
`
