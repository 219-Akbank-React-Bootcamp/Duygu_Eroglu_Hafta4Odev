import React from 'react'

const TodoItem = (props) => {
    const handleStatusChange=(event)=>{
        props.onStatusChange(props.index, event.target.value)
    }
  return (
    <p key={props.index} className={props.item.status}>
                  {props.item.text} - {props.item.category} - {props.item.date} - 
                  <select defaultValue={props.item.status} onChange={handleStatusChange} >
                    {props.statusList.map((status, idx)=>(
                  <option key={idx} {...(status===props.item.status?{selected:true}:{})} value={status}>
                    {status}
                    </option>
                    ))}
                </select>
              </p>
  )
}

export default TodoItem