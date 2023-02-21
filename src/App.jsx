import { useEffect } from 'react'
import Title from './components/Title';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { useStore } from './stores';

function App() {

  const { todos, activeFilter } = useStore(
    (state) => ({
      todos: state.todos,
      activeFilter: state.activeFilter
    })
  );

  const { setFilteredTodos } = useStore();

  useEffect(() => {
    if (activeFilter==='all') {
      setFilteredTodos(todos)
    } else if (activeFilter === 'active') {
      const activeTodos = todos.filter( todo => todo.completed === false)
      setFilteredTodos(activeTodos)
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter( todo => todo.completed === true)
      setFilteredTodos(completedTodos)
    }
  }, [activeFilter, todos])

  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className='container flex flex-col max-w-xl'>
        <Title />
        <Input />
        <TodoList />
      </div>
    </div>
  )
}

export default App
