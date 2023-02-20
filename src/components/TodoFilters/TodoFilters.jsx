import React from 'react'

const TodoFilters = () => {
  return (
    <div>
      <FiltersContainer>
        <ItemsLeft />
        <FilterButtonContainer>
            <FilterButton action={() => {}} active="All" filter="All" />
            <FilterButton action={() => {}} active="All" filter="Active" />
            <FilterButton action={() => {}} active="All" filter="Completed" />
        </FilterButtonContainer>

        <button className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out'>
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

const ItemsLeft = ({ total = 0 }) => {
    return (
        <p className="text-gray-400 text-sm">
            {total} items left
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
        <button className={`hover:text-white text-gray-400 cursor-pointer transition-all duration-300 ease-in-out ${active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-gray-400'}`}>
            {filter}
        </button>
    )
}
