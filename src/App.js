
import './App.css';
import './Animate.css'
import React, { useState } from 'react';
import Header from './components/Header';
import NewTask from './components/NewTask';
import TaskContainer from './components/TaskContainer';
import Task from './components/Task';
import logo from './assets/Logo.png';
function App() {
    // State variables for storing the todos and the input text
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');

    //event handler for input changes
    const handleInputChange=(e)=>
    {
      setInputText(e.target.value);
    };


  //event handler for form submition 
    const handleFormSubmit=(e)=>
    {
      //for stop page from handling form submition we use preventdefault method
      e.preventDefault();
      if(inputText.trim() !='')
      {
        const newTodo =
        {
          //generate new unique id for to do item
          id:Date.now(),
          //set to do item value from input field
          text:inputText,
          completed: false
        }
        //save new todo item in todos array with spread syntax
        setTodos([...todos,newTodo]);
        //reset input text
        setInputText("");
      }
    };

    //event handler for set status of task to completed 
    const handleCheckboxChange = (id) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      );
    };
    
    //event handler for deleting todo
    const handleTodoDelete=(id)=>{
      //remove todo item with same id
      setTodos(todos.filter((todo)=>todo.id!==id));
    }

  return (
    <div className="App" >
      
      <Header text="ToDo" src={logo} />
      <NewTask onSubmit={handleFormSubmit} value={inputText} onChange={handleInputChange} placeholder="Enter a todo" type="submit"/>
      <TaskContainer>
        
        {todos.map((todo) => 
        (
        <Task key={todo.id} text={todo.text} onClick={() => handleTodoDelete(todo.id)} checked={todo.completed}
        onChange={() => handleCheckboxChange(todo.id)}/>
        ))}
      </TaskContainer>
      
    
    </div>
  );
}

export default App;
