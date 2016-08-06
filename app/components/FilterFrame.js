import React from 'react'

const FilterFrame = ({visibilityFilter, onFilterButtonClick}) => {
  let filterButton

  if (visibilityFilter === 'SHOW_ALL') {
    filterButton = <button onClick={() => {onFilterButtonClick('SHOW_ACTIVE')}}>Hide Completed</button>
  } else {
    filterButton = <button onClick={() => {onFilterButtonClick('SHOW_ALL')}}>Show All</button>
  }

  return (
    <div id="filter-frame">
      <h3>Filter Todos</h3>
      <p>
        { filterButton }

        <button>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          {' '}Clear Completed
        </button>
      </p>
    </div>
  )
}

export default FilterFrame
