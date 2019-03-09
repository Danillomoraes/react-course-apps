import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => dispatchChange(props,e)} />
    <select value={props.filters.sortBy} onChange={(e) => {dispatchSortBy(props,e)}}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const dispatchSortBy = (props, e) => {
  e.target.value === 'amount' ? props.dispatch(sortByAmount()) : props.dispatch(sortByDate())
}

const dispatchChange = (props, e) => {
  props.dispatch(setTextFilter(e.target.value))
}

export default connect(mapStateToProps)(ExpenseListFilters);