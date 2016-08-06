import { connect } from 'react-redux'
import React from 'react'
import { toggleTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckboxClick: (id) => {
      dispatch(toggleTodo(id))
    },

    onDeleteLinkClick: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
