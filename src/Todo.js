import React, {useState} from "react";

/* 필요한 기능
1. 현재 Todo 리스트를 관리하는 상태
2. 새로운 Todo 아이템의 텍스트를 관리하는 상태
3. 입력 필드의 값이 변경될 때 호출되는 함수 
4. Add Item 버튼 클릭시 호출되는 함수 
5. Enter 키를 눌렀을 때 호출되는 함수 
6. Todo 아이템의 완료 상태를 토글하는 함수 
7. Todo 아이템을 삭제하는 함수*/

const Todo = ()=> {
    //1. 현재 Todo 리스트를 관리하는 상태
    const[todos, setTodos] = useState([]);
    
    //2. 새로운 Todo 아이템의 텍스트를 관리하는 상태
    const [newTodo, setNewTodo] = useState('');

    //3. 입력 필드의 값이 변경될 때 호출되는 함수 
    const handleInputChange = (e)=> {
        setNewTodo(e.target.value);
    };

    //4. Add Item 버튼 클릭시 호출되는 함수
    const handleAddTodo = ()=> {
        if(newTodo.trim()) {
            setTodos([...todos, {text:newTodo, completed:false}]);
            setNewTodo('');
        }
    };

    //5. Enter 키를 눌렀을 때 호출되는 함수
    const handleKeyPress = (e)=> {
        if(e.key === 'Enter'){
            handleAddTodo();
        }
    };

    //6. Todo 아이템의 완료 상태를 토글하는 함수
    const handleToggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i)=> i === index? {...todo, completed:! todo.completed}:todo);
        setTodos(updatedTodos);
    };

    //7. Todo 아이템을 삭제하는 함수*/
    const handleRemoveTodo = (index)=>{
        const updatedTodos = todos.filter((_, i)=>i!==index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
             type="text"
             value={newTodo}
             onChange={handleInputChange}
             onKeyPress={handleKeyPress}
            />
            <button onClick={handleAddTodo}>Add Item</button>
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index} style={{textDecoration:todo.completed? 'line-through' : 'none', color:todo.completed? 'green':'white'}}>
                        {todo.text}
                        <button onClick={()=>handleToggleComplete(index)}>
                            {todo.completed ? 'Undo':'Completed'}
                        </button>
                        <button onClick={()=>handleRemoveTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;