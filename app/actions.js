// Action types
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// Other constants
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

// Action creators
let nextTodoId = 0
export function addTodo (text, date) {
  return {
    type: ADD_TODO,
    text,
    date,
    id: nextTodoId ++
  }
}

export function deleteTodo (id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function setVisibilityFilter (filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
