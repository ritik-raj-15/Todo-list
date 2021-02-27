import React,{useState,useEffect,useRef} from 'react';
// taking input and sending in todolist component
function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value :'');// hooks the first index element stores the value, and 2nd index is a function which updates 1st index element itself;
   
    const inputRef= useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    });
    
    const handleChange=(e)=>{
        setInput(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();

        props.addTodo({
            id:Math.floor(Math.random()*10000),
            text:input
        });
        setInput('');
    };


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
            <>
            <input type="text" 
              placeholder="Update your todo" 
              name="text" 
              value={input} 
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
              />  
              <button className="todo-button edit">Add todo</button>
              </>
                 ) : 
              (
                  <>
              <input type="text" 
              placeholder="Add a todo" 
              name="text" 
              value={input} 
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
              />  
              <button className="todo-button">Add todo</button>
              </>
              )
              }
        </form>
    )
}

export default TodoForm;
