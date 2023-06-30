import { Cart, HeaderBarPerfil, Item, LinkItem } from './styles'

import logo from '../../assets/Images/logo.svg'

const HeaderPerfil = () => (
  <HeaderBarPerfil>
    <img className="image" src={logo} alt="EFOOD" />
    <nav>
      <Item>
        <LinkItem>Restaurantes</LinkItem>
        <Cart>0 produto(s) no carrinho</Cart>
      </Item>
    </nav>
  </HeaderBarPerfil>
)

export default HeaderPerfil
