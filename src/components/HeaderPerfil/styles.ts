import styled from 'styled-components'

export const HeaderBarPerfil = styled.div`
  background-color: rgba(0, 0, 0, 0.8)
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  .image {
    align-items: center;
    justify-content: space-between;
  }
`
export const Item = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 32px;
`

export const Cart = styled.a`
  display: flex;
  margin-left: 32px;
`
