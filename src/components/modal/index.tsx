import { useEffect, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';


import './index.css';

const ROOT_MODAL_MOUNT_NODE = document.getElementById('modal-root');

interface ModalPropsInterface {
    children : React.ReactNode,
    onOverlayClick: () => void
}

const ModalWrapper = styled.div`
    width: 100px;
    heigth: 100px;
    background-color: red;
`;

const ESCAPE_KEY_CODE = 27;

function Modal(props: ModalPropsInterface) {
    const { children, onOverlayClick } = props;
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay')

/* todo@lbp: 
    - fix this 'any' shit (figure out how cover with ts keyboard events)
    - stop event propagation on content wrapper (to avoid modal closing by clicking on modal content)
*/
    const handleKeyUp = (event: any) => {
        console.log(event);
        console.log(event.code);
        
        if (event.keyCode === ESCAPE_KEY_CODE) {
            onOverlayClick();
        }
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp , false);
        overlay.addEventListener('click', onOverlayClick, false)

        ROOT_MODAL_MOUNT_NODE?.appendChild(overlay);

        return () => {
            window.removeEventListener('keyup', handleKeyUp , false);
            overlay.removeEventListener('click', onOverlayClick)

            ROOT_MODAL_MOUNT_NODE?.removeChild(overlay);
        }
    },[overlay, onOverlayClick]);

    const content = <ModalWrapper>{ children }</ModalWrapper>

    return createPortal(content, overlay);
}

export default Modal;