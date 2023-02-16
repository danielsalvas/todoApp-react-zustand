import { useState } from 'react'
import { shallow } from "zustand/shallow";
import { useStore } from './stores';

function App() {

  const { todo } = useStore(
    (state) => ({
      todo: state.todo
    }),
    shallow
  );

  const { setTodo } = useStore();

  return (
    <div className="App">
      {todo}
    </div>
  )
}

export default App
