import HeaderPerfil from '../../components/HeaderPerfil'
import GamePerfil from '../../models/GamePerfil'

import pizza from '../../assets/Images/image_3.png'
import ProductListPerfil from '../../components/ProductListPerfil'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'

const pizzaria: GamePerfil[] = [
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

const Perfil = () => (
  <>
    <HeaderPerfil />
    <Banner />
    <Gallery />
    <ProductListPerfil games={pizzaria} background="pink" />
  </>
)

export default Perfil
