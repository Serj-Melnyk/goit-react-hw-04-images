
import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout/LayoutStyled";
import { Searchbar } from "./Searchbar/Searchbar";
import { Toaster } from "react-hot-toast";


export class App extends Component {

  state = {
    textSearch: ''
  };


  handleSubmit = (textSearch) => {
    this.setState({ textSearch })
  };

  
  render() {
    
    const { textSearch} = this.state


    return (

      <Layout>  

        <Toaster
           position="top-right"
           reverseOrder={false} />
        
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery value={textSearch} />

      
        <GlobalStyle />
        
    </Layout>
    );
    
  }
  
};



 