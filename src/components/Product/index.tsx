import ButtonHome from '../Button'
import Tag from '../Tag'

import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  button: string
}

const Product = ({ title, description, infos, image, button }: Props) => (
  <Card>
    <img className="image" src={image} alt="Comida Japonesa" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <ButtonHome>{button}</ButtonHome>
  </Card>
)

export default Product
