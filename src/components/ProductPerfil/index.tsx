import ButtonPerfil from '../ButtonPerfil'
import { Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
  button: string
}

const ProductPerfil = ({ title, description, image, button }: Props) => (
  <Card>
    <img className="image" src={image} alt="Pizza" />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <ButtonPerfil>{button}</ButtonPerfil>
  </Card>
)


export default ProductPerfil
