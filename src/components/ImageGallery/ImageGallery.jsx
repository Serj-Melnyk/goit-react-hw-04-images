import { Component } from "react";
import { ImageList } from "./ImageGalleryStyled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { getImages } from "components/services/GetImages";
import { threeDots } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types"



export class ImageGallery extends Component {

    state = {
        searchQuery: '',
        images: [],
        loading: false,
        error: '',
        loadButton: false,
        page: null,

    }


    componentDidUpdate(prevProps, prevState) {

        if (prevProps.value !== this.props.value) {
            
            this.setState({
                images: [],
                page: 1,
                searchQuery: this.props.value,

            });
          }
        

            if (prevState.searchQuery !== this.state.searchQuery
                ||
              (prevState.page !== this.state.page && this.state.page !== 1)) {

                this.setState({
                    loading: true,
                    page: this.state.page
                })
                
            

             getImages(this.props.value, this.state.page)
                .then((response) => response.json())
                .then((images) => {
                    if (images.total === 0) {
                        return Promise.reject(new Error(toast.error('Incorrect request')))
                    }
                   
                    this.setState({
                        images: [...this.state.images, ...images.hits],
                       
                    })

                 
                    if (images.hits.length !== 12) {
                        return this.setState({ loadButton: false })
                    }

                    this.setState({ loadButton: true });
                    
                })


                .catch((error) => {
                    console.log('error :>> ', error)
                    this.setState({ error })
                })
                
          
                .finally(() => {
                    this.setState({ loading: false })
                })
            }
          
    };

    handleLoadPage = () => {
        this.setState((prevState) => {
            return {
                page: prevState.page + 1
            }
        });
    };


    render() {
    
        return (

            <div>

                   {this.state.loading && threeDots }

                <ImageList>
                    
                {this.state.images.length > 0 && this.state.images.map((image) => {

                    return (
 
                        <ImageGalleryItem   
                            image={image}
                            key={image.id} />
 
                    )
                })}

                {this.state.loadButton && this.state.images.length > 0
                        && <Button onClick={this.handleLoadPage} />}
             
                </ImageList>
                
                </div>
           
        )
 
    };

};


ImageGallery.propTypes = {
   value:  PropTypes.string.isRequired

}




