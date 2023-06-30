import logo from '../../assets/Images/logo.svg'
import logoFacebook from '../../assets/Images/Vector.png'
import logoTwitter from '../../assets/Images/Vector_2.png'
import logoInsta from '../../assets/Images/Vector_3.png'
import { FooterBar, Logos, TextFooter } from './styles'

const Footer = () => (
  <FooterBar>
    <img src={logo} alt="Logo" />
    <Logos>
      <img src={logoFacebook} alt="logoFacebook" />
      <img src={logoTwitter} alt="logoTwitter" />
      <img src={logoInsta} alt="logoInsta" />
    </Logos>
    <TextFooter>
      A efood é uma plataforma para Fulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </TextFooter>
  </FooterBar>
)

export default Footer
