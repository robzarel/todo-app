import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './index.css';

const ROOT_MODAL = document.getElementById('modal-root');

interface ModalPropsInterface {
    children : React.ReactNode
}
//todo@lbp: 
// figure out how to style this modal with styled-components

function Modal(props: ModalPropsInterface) {
    const element = document.createElement('div');
    element.classList.add('modal-wrapper')

    useEffect(() => {
        ROOT_MODAL?.appendChild(element);

        return () => {
            ROOT_MODAL?.removeChild(element);
        }
    },[element]);

    return createPortal(props.children, element);
}

export default Modal;