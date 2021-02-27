import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
// storing input list values
function TodoList() {
    const [todos, setTodos] = React.useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text))
        {
            return;
        }
        const newTodos = [todo, ...todos];// adding new value and iterating prev valules;
        setTodos(newTodos);
        console.log(newTodos);
    };
    const completeTodo=(id)=>{
        let updateTodos=todos.map(todo=>{
                if(todo.id === id)
                {
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
        });
        setTodos(updateTodos);
    };
    const removeTodo=(id)=>{
        let updatedArr=todos.filter(todo => todo.id !== id);
        setTodos(updatedArr);
    };

    const updateTodo = (id,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text))
        {
            return;
        }
        setTodos(prev => prev.map(item => item.id === id ? newValue : item));
        //! prev
    };
    return (
        <div>
            <h1>What`s the Plan for Today??</h1>
            <TodoForm addTodo={addTodo}/>
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList;
