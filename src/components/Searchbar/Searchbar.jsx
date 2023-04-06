import PropTypes from "prop-types"

import { SearchHead, Form, Field, Button, } from "./SearchbarStyled";
import { GoSearch } from "react-icons/go";


import { Component } from "react";
import { toast } from "react-hot-toast";


export class Searchbar extends Component {

    state = {
        value: ''     
    }


    handleChange = ({ target: { value } }) => {
   
        this.setState({ value })    
    }


    // handleChange = (evt) => {
    //     this.setState({value : evt.currentTarget.value})
    // }

    handleSubmit = (evt) => {
        evt.preventDefault()
        if (!this.state.value.trim()) {
            return toast.success('The search field is empty');
         
        }

        this.props.onSubmit(this.state.value)
        this.setState({ value: '' })
        
    };

    
    render() {
        
        return (

            <SearchHead >

                <Form onSubmit={this.handleSubmit}>
                
                    <Button type="submit" className="button">
                        <span className="button-label"> <GoSearch /> </span>
                    </Button>

                    <Field
                        className="input"
                        type="text"
                        aria-label="search"
                        placeholder="Search images and photos"
                        value={this.state.value}
                        onChange={this.handleChange} />

                </Form>

             </SearchHead>
            
        );
    }
};

Searchbar.propTypes = {
    onChange: PropTypes.func
    
}

