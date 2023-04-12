import PropTypes from "prop-types"

import { SearchHead, Form, Field, Button, } from "./SearchbarStyled";
import { GoSearch } from "react-icons/go";


import { useState } from "react";
import { toast } from "react-hot-toast";


export const Searchbar = ({onSubmit}) => {
    
    const [value, setValue] = useState('')




   const handleChange = (evt) => {
        setValue( evt.target.value)
    }

   const handleSubmit = (evt) => {
        evt.preventDefault()
        if (!value.trim()) {
            return toast.success('The search field is empty');
         
        }

        onSubmit(value)
        setValue( '' )
        
    };

    

        
    return (

        <SearchHead >

            <Form onSubmit={handleSubmit}>
                
                <Button type="submit" className="button">
                    <span className="button-label"> <GoSearch /> </span>
                </Button>

                <Field
                    className="input"
                    type="text"
                    aria-label="search"
                    placeholder="Search images and photos"
                    value={value}
                    onChange={handleChange} />

            </Form>

        </SearchHead>
            
    );
};


Searchbar.propTypes = {
    onChange: PropTypes.func
    
}

