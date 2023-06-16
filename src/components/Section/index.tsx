import GamePerfil from "../../models/GamePerfil"
import ProductPerfil from "../ProductPerfil"
import { Container, List } from "./styles"

export type Props = {
    background: 'pink' | 'whiteback'
    games: GamePerfil[]
}

const Section = ({ background, games }: Props) => {
    
    return (
        <Container background={background}>
            <div className="container">
                <List>
                    {games.map((game) => (
                        <ProductPerfil
                        key={game.id}
                        title={game.title}
                        description={game.description}
                        image={game.image}
                        button={game.button}
                />
                ))}
            </List>
        </div>
        </Container>
    )
}

export default Section 