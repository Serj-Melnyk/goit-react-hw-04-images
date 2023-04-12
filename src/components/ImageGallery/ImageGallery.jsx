
import { ImageList } from "./ImageGalleryStyled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types"


export const ImageGallery = ({ images }) => {


    return (

        <div>

            <ImageList>
                    
                {images.length > 0 && images.map((image) => {

                    return (
 
                        <ImageGalleryItem
                            image={image}
                            key={image.id} />
 
                    )
                })}

               
            </ImageList>
                
        </div>
           
    )
 

};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
           id: PropTypes.number.isRequired
       })
   ).isRequired

}

