
import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout/LayoutStyled";
import { Searchbar } from "./Searchbar/Searchbar";
import { Toaster } from "react-hot-toast";


export const App = () => {

  const [textSearch, setTextSearch] = useState('')


  const handleSubmit = (textSearch) => {
    setTextSearch( textSearch )
  };

  return (

    <Layout>

      <Toaster
        position="top-right"
        reverseOrder={false} />
        
      <Searchbar onSubmit={handleSubmit} />

      <ImageGallery value={textSearch} />

      
      <GlobalStyle />
        
    </Layout>
  );
    
};



 