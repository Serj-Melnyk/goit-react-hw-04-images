import PropTypes from "prop-types"
import { Component } from "react";
import { ImageItem, Img } from "./ImageGalleryItemStyled";
import { Modal } from "components/Modal/Modal";


export class ImageGalleryItem extends Component {


    state = {
         showModal: false,
    }


     toggleModal = () => {
    this.setState(({ showModal })=> ({
      showModal: !showModal
    }))
  };

    render() {

        const { image: { webformatURL ,largeImageURL} } = this.props

        return  (

            <ImageItem>
                  
                <Img
                    src={webformatURL} 
                    alt="picture"
                    onClick={this.toggleModal } />

                {this.state.showModal &&
                    
                    (< Modal
          
                     onClose={this.toggleModal}
                    largeImage={largeImageURL} >

                    </Modal>)} 
                
            </ImageItem>

        );

    } 
    
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    }).isRequired
}