import PropTypes from "prop-types";

import React, { useState } from 'react';

 export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One punch');

    const onInputChange = (event) => {

        setInputValue(event.target.value)

    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return

        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

  return (
   
    <form aria-label="form" action="" onSubmit={onSubmit}>
        <input 
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={ onInputChange}
    />
    </form>
    
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}