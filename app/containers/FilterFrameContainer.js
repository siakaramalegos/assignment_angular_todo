import { connect } from 'react-redux'
import React from 'react'
import { setVisibilityFilter, deleteCompleted } from '../actions'
import FilterFrame from '../components/FilterFrame'

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterButtonClick: (filter) => {
      dispatch(setVisibilityFilter(filter))
    },

    onDeleteButtonClick: () => {
      dispatch(deleteCompleted())
    }
  }
}

const FilterFrameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterFrame)

export default FilterFrameContainer
