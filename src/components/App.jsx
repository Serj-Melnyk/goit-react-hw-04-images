
import { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyle";
import {ImageGallery} from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout/LayoutStyled";
import { Searchbar } from "./Searchbar/Searchbar";
import { Toaster } from "react-hot-toast";
import { threeDots } from "components/Loader/Loader";
import { getImages } from "components/services/GetImages";
import { Button} from "components/Button/Button";
import { toast } from "react-hot-toast";
import { nanoid } from "nanoid";


export const App = () => {

  const [textSearch, setTextSearch] = useState('')
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState('');
  const [loadButton, setLoadButton] = useState(false);
  const [reFetch, setReFetch] = useState(null)




  const handleLoadPage = () => {
    setPage((prevPage => prevPage + 1));
       
  };



  const handleSubmit = (textSearch) => {
    setTextSearch(textSearch);
    setPage(1);
    setImages([]);
    setLoading(true);
    setReFetch(nanoid())
  
  };


    
  useEffect(() => {

    if (!textSearch) {

        return;
    }
  

    getImages(textSearch, page)
      .then((response) => response.json())
      .then((images) => {
        if (images.total === 0) {
          return Promise.reject(new Error(toast.error('Incorrect request')))
        }
                
            
        setImages(prevState => ([...prevState, ...images.hits]));
               
                
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
    
  }, [ page, textSearch, reFetch ]);



  return (

    <Layout>

      <Toaster
        position="top-right"
        reverseOrder={false} />
        
      <Searchbar onSubmit={handleSubmit} />

      {loading && threeDots}

      <ImageGallery images={images} />


      {loadButton && images.length > 0
        && <Button onClick={handleLoadPage} />}

      
      <GlobalStyle />
        
    </Layout>
  );
};




 