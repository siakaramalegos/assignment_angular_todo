import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  DELETE_COMPLETED,
  VisibilityFilters
} from './actions'
import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          date: action.date,
          completed: false,
          id: action.id
        }
      ]
    case DELETE_TODO:
      return state.filter( (todo) => {
        return todo.id !== action.id
      })
    case DELETE_COMPLETED:
      return state.filter( (todo) =>{
        return !todo.completed
      })
    case TOGGLE_TODO:
      return state.map( (todo) => {
        if(todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
