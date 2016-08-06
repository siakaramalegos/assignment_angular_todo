import React from 'react'
import AddTodo from '../containers/AddTodo'
import FilterFrameContainer from '../containers/FilterFrameContainer'
import TodoListContainer from '../containers/TodoListContainer'

const App = () => {
  return (
    <div id="main">
      <h1>Yet Another Todo App</h1>
      <AddTodo />
      <br />
      <FilterFrameContainer />
      <br />
      <TodoListContainer />
    </div>
  )
}

export default App
