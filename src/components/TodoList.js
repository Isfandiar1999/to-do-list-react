import React,{useState} from 'react'

const TodoList = ({ todos, setTodos }) => {

    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id!==id))
    }
    const[search, setSearch] = useState("");

  return (
    <div>
        <input placeholder='Search..' className='search_input' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        {
            todos.filter(todo=>todo.netice.toLowerCase().includes(search.toLowerCase())).map((todo) => (
                <li className='list-item' key={todo.id}>
                    <input 
                        type="text" 
                        value={todo.netice} 
                        className="list" 
                        onChange={(event)=>event.preventDefault()} 
                    />
                    <div>
                        
                        <button 
                            className='button-delete task-button' 
                            onClick={()=>handleDelete(todo)}>
                            del
                        </button>
                    </div>
                </li>
            ))
        }
    </div>
  )
}

export default TodoList