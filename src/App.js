import './App.css';
import './components/AddTodoForm/AddTodoForm.js'
import AddTodoForm from './components/AddTodoForm/index.js';
import {useState} from 'react'
import TodoItem from './TodoItem/TodoItem';
import AddCategoriesForm from './components/AddCategoriesForm/AddCategoriesForm';
import AddStatusForm from './components/AddStatusForm/AddStatusForm';
import CategoryItem from './components/CategoryItem/CategoryItem';

function App() {
  const [list, setList] = useState([])
  const [categories, setCategory] = useState([
    "eğitim", 
    "ev işleri", 
    "spor"])
  
  const handleAddTodo = ({text, category})=>{
    setList((prev)=>[...prev, {
      text,
      category,
      date: new Date().toLocaleDateString(),
      status:"not-started",
    },])
    alert(text+" added and the date is "+new Date().toLocaleDateString())
  }

/*
  const handleAddCategories=({text})=>{
    setList((prev2)=>[...prev2, {
      ...text
    },])
    alert(text+" added  ")
    console.log(text)
  }*/
  const [statusList, setStatusList]=useState([
    "not-started",
    "started",
    "ongoing",
    "almost-done",
    "done"
  ])
  const handleStatusChange=(idx, status)=>{
    setList((prev)=>prev.map((item, itemIdx)=>({
      ...item,
      status: itemIdx===idx ? status: item.status
    })
     ))
  }
  
  return (
    <div className="App">
      <header className="App-header">Todo-App</header>
      <AddTodoForm categories={categories} defaultValue="" onAddTodo={handleAddTodo}/>
      <ul className="todo-listing">
      <h2>Todo List</h2>
        <li>{list.map((item,idx)=>
              <TodoItem key={idx} onStatusChange={handleStatusChange} item={item} index={idx} statusList={statusList}/>
              )}</li></ul>
      
      <AddCategoriesForm defaultValue="" 
      setCategory={setCategory}/>
      <AddStatusForm defaultValue="" setStatusList={setStatusList}/>
    </div>
  );
}

export default App;