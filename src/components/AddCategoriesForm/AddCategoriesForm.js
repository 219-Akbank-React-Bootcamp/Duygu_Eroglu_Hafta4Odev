import React from 'react'
import "./AddCategoriesForm.css"
import { useState } from 'react'

const AddCategoriesForm = ({category,setCategory,}) => {
  const [categoryText, setCategoryText] = useState('');
    
    const handleSubmit = (e) => {
      setCategory((prev)=>[...prev, categoryText]);
      alert(categoryText+" category added")
      setCategoryText('');
      console.log(categoryText)
    };
  return (
    <div className="AddCategoriesForm">
        <h2>Add Category Form</h2>
        <input onChange={(e) => setCategoryText(e.target.value)} 
        type="text" 
        name="text" 
        value={categoryText} />
        <button onClick={handleSubmit}>Add Category</button>
        <p style={{visibility:"hidden"}}>{categoryText}</p>
    </div>
  )
}

export default AddCategoriesForm