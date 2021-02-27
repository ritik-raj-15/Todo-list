import React,{useState} from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from "react-icons/ti";
import TodoForm from './TodoForm'
// printing list values
function Todo({todos,completeTodo,removeTodo,updateTodo}) {

    const [edit,setEdit] = useState({id:null,value:''});

    const submitUpdate = value =>{
        updateTodo(edit.id,value);
        setEdit({id:null,value:''});
    };
    
    if(edit.id)
    {
        return <TodoForm edit={edit} addTodo={submitUpdate}/>
    }

    return todos.map((todo,index)=>{
        return <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <RiCloseCircleLine
                    className="delete-icon" onClick={()=>{removeTodo(todo.id)}}
                    />
                    <TiEdit
                        className="edit-icon" onClick={()=>{setEdit({id:todo.id, value:todo.text})}}
                    />
                </div>
        </div>
    });
}

export default Todo;
//! isComplete
// * to pass parameters in function while calling event use annonymous function
// * otherwise if no parameter is passed we can call it by simple reference or by annonymous function