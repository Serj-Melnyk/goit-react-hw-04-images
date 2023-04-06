import PropTypes from "prop-types"
import { useState } from "react";
import { ImageItem, Img } from "./ImageGalleryItemStyled";
import { Modal } from "components/Modal/Modal";


export const ImageGalleryItem = ({ image: { webformatURL, largeImageURL } }) => {
    
    const [showModal, setShowModal] = useState(false);


    const toggleModal = () => {

        setShowModal((showModal) => (!showModal))
    };

    return (

        <ImageItem>
                  
            <Img
                src={webformatURL}
                alt="picture"
                onClick={toggleModal} />

            {showModal &&
                    
                (< Modal
          
                    onClose={toggleModal}
                    largeImage={largeImageURL} >

                </Modal>)}
                
        </ImageItem>

    );

};
    


ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    }).isRequired
}