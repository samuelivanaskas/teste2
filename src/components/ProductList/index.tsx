import Game from '../../models/Game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  background: 'pink' | 'whiteback'
  games: Game[]
}

const ProductList = ({ background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            description={game.description}
            image={game.image}
            infos={game.infos}
            button={game.button}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
