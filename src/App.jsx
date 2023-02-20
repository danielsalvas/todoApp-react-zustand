import { useState } from 'react'
import Title from './components/Title';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { useStore } from './stores';


function App() {

  const { todos } = useStore(
    (state) => ({
      todos: state.todos
    })
  );

  const { setTodos } = useStore();

  function addTodo(title) {

      const lastId = todos.length > 0 ? todos[todos.length -1].id : 1;
      
      const newTodo = {
        id: lastId + 1,
        title,
        completed: false
      }
  
      const todoList = [...todos]
      todoList.push(newTodo)
  
      setTodos(todoList);
  }

  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className='container flex flex-col max-w-xl'>
        <Title />
        <Input addTodo={addTodo} />
        <TodoList />
      </div>
    </div>
  )
}

export default App
