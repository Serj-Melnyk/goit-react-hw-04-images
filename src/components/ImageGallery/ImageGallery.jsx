import { useEffect, useState } from "react";
import { ImageList } from "./ImageGalleryStyled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { getImages } from "components/services/GetImages";
import { threeDots } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types"



// export class ImageGallery extends Component {

//     state = {
//         searchQuery: '',
//         images: [],
//         loading: false,
//         error: '',
//         loadButton: false,
//         page: null,

//     }

export const ImageGallery = ({ value }) => {

    // const [searchQuery, setSearchQuery] = useState([]);
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [, setError] = useState('');
    const [loadButton, setLoadButton] = useState(false)

    useEffect(() => {

        if (!value ) {
            
            return; 
        }

        setLoading(true);
  
          


        getImages(value, page)
            .then((response) => response.json())
            .then((images) => {
                if (images.total === 0) {
                    return Promise.reject(new Error(toast.error('Incorrect request')))
                }
            
                setImages (prevState => ([...prevState, ...images.hits]));
              

                 
                if (images.hits.length !== 12) {
                   return setLoadButton(false)
                }

               setLoadButton(true);
                    
            })


            .catch((error) => {
                console.log('error :>> ', error)
                setError(error);
            })
                
          
            .finally(() => {
                setLoading(false)
            })
    


    }, [page, value]);


    useEffect(() => {
        if (page && page!== 1) {
            return;
        }
        setPage(1)
        
        
    }, [page])
    

    const handleLoadPage = () => {
        setPage((prevPage => prevPage + 1));
       
    };

    



    // componentDidUpdate(prevProps, prevState) {

    // if (prevValue !== value) {
            
    //     this.setState({
    //         images: [],
    //         page: 1,
    //         value: this.props.value,

    //     });
    // }
        

    // if (prevState.value !== this.state.value
    //     ||
    //     (prevPage !== page && page !== 1)) {

    //     this.setState({
    //         loading: true,
    //         page: this.state.page
    //     })
                
            

    //     getImages(value, page)
    //         .then((response) => response.json())
    //         .then((images) => {
    //             if (images.total === 0) {
    //                 return Promise.reject(new Error(toast.error('Incorrect request')))
    //             }
                   
    //            setImages({images: [...images, ...images.hits],
                       
    //             })

                 
    //             if (images.hits.length !== 12) {
    //                 return this.setState({ loadButton: false })
    //             }

    //             this.setState({ loadButton: true });
                    
    //         })


    //         .catch((error) => {
    //             console.log('error :>> ', error)
    //             setError( error )
    //         })
                
          
    //         .finally(() => {
    //             setLoading( false )
    //         })
    // }
          


    // const handleLoadPage = () => {
    //     setPage((prevPage => prevPage + 1));
    // };


 
    
    return (

        <div>

            {loading && threeDots}

            <ImageList>
                    
                {images.length > 0 && images.map((image) => {

                    return (
 
                        <ImageGalleryItem
                            image={image}
                            key={image.id} />
 
                    )
                })}

                {loadButton && images.length > 0
                    && <Button onClick={handleLoadPage} />}
             
            </ImageList>
                
        </div>
           
    )
 

}

ImageGallery.propTypes = {
   value:  PropTypes.string.isRequired

}

