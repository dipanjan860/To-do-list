import { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  const getLocalTasks = () => {
    let task = localStorage.getItem("tasks");
    if(task){
      return JSON.parse(localStorage.getItem("tasks"));
    }
    else{
      return [];
    }
  };

  const [todos, setTodos] = useState(getLocalTasks());

  const removeTodo = (id) => {
    // console.log(id);
    const newTodos = todos.filter((data, index) => {
      if(index !== id) return true;
      else return false;
    });
    setTodos(newTodos);
  };

  const addTodoHandler = (item) => {
    setTodos(
      [
        ...todos,
        item
      ]
    )
  };
  // console.log(todos);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='bg-blue-950 min-h-screen p-3 flex align-middle'>
      <div className='bg-white min-w-[600px] m-auto rounded-xl p-3'>
        <Input handler={addTodoHandler}/>
        <Todo data={todos} removeHandler={removeTodo}/>
      </div>
    </div>
  );
}

export default App;
