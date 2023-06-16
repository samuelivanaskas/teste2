import { Modal, ModalContent } from './styles'

import pizza from '../../assets/Images/image_3.png'
import fechar from '../../assets/Images/close1.png'



const Gallery = () => {

    return (
        <Modal>
            <ModalContent className='container'>
                <img src={fechar} alt="pontão fechar" />
                <h4>Pizza Marguerita</h4>
                <img src={pizza} alt="" />
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>Adicionar ao carrinho</button>
            </ModalContent>
            <div className="overlay"></div>
        </Modal>
    )
}

export default Gallery