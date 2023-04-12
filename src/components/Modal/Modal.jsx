import PropTypes from "prop-types"
import { useEffect } from "react";
import { Overlay, ModalStyle } from "./ModalStyled"
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, largeImage, }) => {


    useEffect(() => {


        const handleKeyDown = evt => {

            if (evt.code === 'Escape') {
                onClose();
            }
        };


        window.addEventListener('keydown', handleKeyDown);

        return () => {

            window.removeEventListener('keydown', handleKeyDown)
        }

    }, [onClose]);
    

   const handleTabOverlay = evt => {
        if (evt.currentTarget === evt.target) {
            onClose();
        }
    };



    return createPortal(<Overlay
            
        onClick={handleTabOverlay} >

        <ModalStyle className="modal">
            <img src={largeImage} alt="" />
        </ModalStyle>
                
    </Overlay>, modalRoot);
             
};

  

Modal.propTypes = {
    largeImage: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onClose: PropTypes.func
}
