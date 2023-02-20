

const TodoList = ({ children }) => {
  return (
    <div className='flex flex-col mt-7 rounded-xl overflow-hidden shadow-2xl'>
      {children}
    </div>
  )
}

export default TodoList
