import { HeaderBar, TextHeader } from './styles'

import logo from '../../assets/Images/logo.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="EFOOD" />
    <TextHeader>
      Viva experiências gastronômicas no conforto da sua casa
    </TextHeader>
  </HeaderBar>
)

export default Header
