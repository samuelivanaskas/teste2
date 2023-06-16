import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'



export const Container = styled.section<Omit<Props, 'games'>>`
    padding: 80px 180px;
    background-color: ${cores.brancoBack};
    opacity: 0.80;
    ${Card} {
        background-color: ${(props) =>
        props.background === 'pink' ? cores.rosa : cores.brancoBack};
}
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
    border: 2px solid ${cores.rosa};
`

