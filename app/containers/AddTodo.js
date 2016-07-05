import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      text: '',
      date: new Date().toISOString().slice(0,10)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { text, date } = this.state
    const { dispatch } = this.props
    dispatch(addTodo(text, date))
    this.setState({
      text: '',
      date: new Date().toISOString().slice(0,10)
    })
  }

  handleTextChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleDateChange = (e) => {
    this.setState({date: e.target.value})
  }

  render () {
    return (
      <form id="add-todo">
        <label>Description</label>
        <input
          type='text'
          value={this.state.text}
          onChange={this.handleTextChange}
          placeholder='Make groceries' />
        <br />
        <label>Due Date</label>
        <input
          type='date'
          value={this.state.date}
          onChange={this.handleDateChange} />
        <br />
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    )
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(AddTodo)
