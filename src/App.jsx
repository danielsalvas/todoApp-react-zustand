import { useState } from 'react'
import Title from './components/Title';
import Input from './components/Input';
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
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className='container flex flex-col max-w-xl'>
        <Title />
        <Input />
      </div>
    </div>
  )
}

export default App
