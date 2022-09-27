import React, {useEffect, useState} from 'react'
import "./AddTodoForm.css"
import  '../../App'
const AddTodoForm = (props) => {
  const [value, setValue] = useState({
    text: props.defaultValue,
    category: 'eğitim',
    done:false
  })  //"" is for string operations, [value, setter]
  const handleChange = (event)=>{
    
    setValue((prev)=>({
      ...prev,
      [event.target.name]:event.target.value,
    }))
  }
  const handleClick=()=>{
    props.onAddTodo(value)
    setValue('')
  }
  return (
    <div className="AddTodoForm">
        <h2>Todo Adding Form</h2>
        <input 
        onChange={handleChange} 
        type="text" 
        name="text" 
        value={value.text}/>
        <select name="category" onChange={handleChange}>
          {props.categories.map((category, idx)=>(
            <option key={idx} value={category}>{category}</option>))}
        </select>
        <button onClick={handleClick}>Add Todo</button>
        
    </div>
  )
}

export default AddTodoForm

