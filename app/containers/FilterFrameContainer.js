import { connect } from 'react-redux'
import React from 'react'
import { setVisibilityFilter } from '../actions'
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
    }
  }
}

const FilterFrameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterFrame)

export default FilterFrameContainer
