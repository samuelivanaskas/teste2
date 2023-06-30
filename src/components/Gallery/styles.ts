import styled from 'styled-components'
import { cores } from '../../styles'


export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 400px;
    display: none;
    background-color: ${cores.rosa};
    color: ${cores.rosaClaro};
    font-weight: bold;
    z-index: 1;

    &:: visible {
        display: flex;
    }
    
    overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.80);
    }
`
    
export const ModalContent = styled.div`
    max-width: 520px;
    position: relative;
    z-index: 1;

.container {
    z=index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;

    header {
        display: flex;
        margin-bottom: 24px;
    }
    
    h2 {
        font-size: 18px;
    }

    p {
        font-size: 14px;
        margin: 16px 0;
    }

    image {
        display: block;
        height: 280px;
        width: 100%;
        margin: 32px;
    }
    button {
        background-color: ${cores.rosaClaro};
        height: 26px;
        width: 204px;
        margin-top: 20px;
        margin-left: 30px;
    }
}
`