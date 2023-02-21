import TodoFilters from "./TodoFilters/TodoFilters"
import Todo from "./Todo";
import { useStore } from "../stores";

const TodoList = () => {

  const { todos } = useStore(
    (state) => ({
      todos: state.todos
    })
  );

  return (
    <div className='flex flex-col mt-7 rounded-xl overflow-hidden shadow-2xl'>
      { todos.map( (todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <TodoFilters />
    </div>
  )
}

export default TodoList
