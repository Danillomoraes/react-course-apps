import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from "../actions/expenses";
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, id, dispatch, history}) => (
  <div>
    {description && 
      <Link to={`/edit/${id}`}>
        <h1>{description}</h1>
      </Link>
    }
    {amount && <p>Amount: {amount}</p>}
    {createdAt && <p>Created: {createdAt}</p>}
    <button onClick={() => remove(dispatch, id)}>Remove</button>
  </div>
)

const remove = (dispatch, id) => {
  dispatch(removeExpense({id}))
}

export default connect()(ExpenseListItem)