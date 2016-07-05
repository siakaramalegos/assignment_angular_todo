import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'

// To delete:
import { addTodo, deleteTodo, toggleTodo, setVisibilityFilter } from './actions'

let store = createStore(todoApp)

console.log(store.getState())
store.dispatch(addTodo("make this app", new Date()))
store.dispatch(addTodo("get coffee", new Date()))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
store.dispatch(deleteTodo(0))
console.log(store.getState())
