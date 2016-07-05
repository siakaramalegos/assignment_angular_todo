import React from 'react'
import AddTodo from '../containers/AddTodo'
// import FilterFrame from './FilterFrame'
import TodoListContainer from '../containers/TodoListContainer'

const App = () => {
  return (
    <div id="main">
      <h1>Yet Another Todo App</h1>
      <AddTodo />
      <br />
      <TodoListContainer />
    </div>
  )
}

export default App
