import React, { PropTypes } from 'react'

const TodoList = ({todos, onCheckboxClick, onDeleteLinkClick}) => {
  const todoRows = todos.map( (todo) => {
    return (
      <tr key={todo.id}>
        <td onClick={() => onCheckboxClick(todo.id)}>
          {todo.completed ? <i className="fa fa-check-square-o" aria-hidden="true"></i> : <i className="fa fa-square-o" aria-hidden="true"></i>}
        </td>
        <td>{todo.text}</td>
        <td>{todo.date}</td>
        <td onClick={() => onDeleteLinkClick(todo.id)}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </td>
      </tr>
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Completed?</th>
          <th>Description</th>
          <th>Due</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todoRows}
      </tbody>
    </table>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired//,
    // date: PropTypes.date.isRequired
  }).isRequired).isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  onDeleteLinkClick: PropTypes.func.isRequired
}

export default TodoList
