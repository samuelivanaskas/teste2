import GamePerfil from "../../models/GamePerfil"
import Banner from "../Banner"
import HeaderPerfil from "../HeaderPerfil"
import Section from "../Section"

import pizza from "../../assets/Images/image_3.png"


const restaurantes: GamePerfil[] = [
    {
        id: 1,
        title: 'Pizza Marguerita',
        description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        button: 'Adicionar ao carrinho'
    },
    {
        id: 2,
        title: 'Pizza Marguerita',
        description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        button: 'Adicionar ao carrinho'
    },
    {
        id: 3,
        title: 'Pizza Marguerita',
        description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        button: 'Adicionar ao carrinho'
    },
    {
        id: 4,
        title: 'Pizza Marguerita',
        description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        button: 'Adicionar ao carrinho'
    },
    {
        id: 5,
        title: 'Pizza Marguerita',
        description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        button: 'Adicionar ao carrinho'
    },
    {
        id: 6,
        title: 'Pizza Marguerita',
        description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        button: 'Adicionar ao carrinho'
    }
]


const Hero = () => {
    return (
        <>
            <HeaderPerfil  />
            <Banner />
            <Section games={restaurantes} background="pink" />
        </>
    )
}
export default Hero