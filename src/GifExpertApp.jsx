import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])

    const onAddCategory = (newCategory) => { 

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }
    
    
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input  */}
        <AddCategory
        
        onNewCategory={ onAddCategory }
         />

        {/* Listado de gifs  */}
        {/* <button onClick={onAddCategory} >Agregar</button> */}
        
            { 
            categories.map( category => (
                <GifGrid category={category} key={category}/>
            ))
            }

    </>
  )
}

