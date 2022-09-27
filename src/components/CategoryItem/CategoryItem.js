import React from 'react'

const CategoryItem = (props) => {
    
  return (
    <p key={props.text} className={props.item.index}></p>
  )
}

export default CategoryItem