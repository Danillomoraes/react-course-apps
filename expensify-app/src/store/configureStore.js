import { createStore, combineReducers } from 'redux';
import expensesReducers from '../reducers/expenses';
import filtersRedicer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducers,
      filters: filtersRedicer
    })
  )

  return store;
}

