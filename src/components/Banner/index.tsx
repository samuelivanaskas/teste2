import { Image, TextImage, Titulo } from './style'

import bannerImg from '../../assets/Images/imagem_fundo.png'

export const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <TextImage>Italiana</TextImage>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Image>
)

export default Banner
