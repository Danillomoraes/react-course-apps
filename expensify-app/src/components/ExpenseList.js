import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import GetExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses && props.expenses.map((element, i) => (
      <ExpenseListItem key={i} {...element} />
    ))}
  </div>
);

const mapStateToProps = (state) => {

  return {
    expenses: GetExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);