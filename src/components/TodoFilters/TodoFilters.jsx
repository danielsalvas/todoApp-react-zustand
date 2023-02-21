import React from 'react'
import { useStore } from '../../stores';

const TodoFilters = () => {

    const { activeFilter } = useStore(
        (state) => ({
          activeFilter: state.activeFilter
        })
      );

      const { showAllTodos, showActiveTodos, showCompletedTodos, handleClearCompleted } = useStore();

    return (
        <div>
        <FiltersContainer>
            <ItemsLeft />
            <FilterButtonContainer>
                <FilterButton action={() => showAllTodos()} active={activeFilter} filter="All" />
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter="Active" />
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter="Completed" />
            </FilterButtonContainer>

            <button onClick={() => handleClearCompleted()} className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out'>
                Clear Completed
            </button>
        </FiltersContainer>
        </div>
  )
}

export default TodoFilters

//Children Filter Components

const FiltersContainer = ( { children } ) => {
    return (
        <div className='flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600'>
            { children }
        </div>
    )
}

const ItemsLeft = () => {

    const { todos } = useStore(
        (state) => ({
          todos: state.todos,
        })
      );

    return (
        <p className="text-gray-400 text-sm">
            {todos.length} items left
        </p>
    )
}

const FilterButtonContainer = ({ children }) => {
    return (
        <div className='flex items-center space-x-2'>
            { children }
        </div>
    )
}

const FilterButton = ({ action, active, filter }) => {
    return (
        <button onClick={action} className={`hover:text-white text-gray-400 cursor-pointer transition-all duration-300 ease-in-out ${active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-600' : 'text-gray-400'}`}>
            {filter}
        </button>
    )
}
