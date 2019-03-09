import { createStore, combineReducers } from "redux";
import uuid from 'uuid'

// ADD_EXPENSE

const addExpense = (
  { description = '',
    note = '', 
    amount = 0, 
    createAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
})

// REMOVE_EXPENSE

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE

const editExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  update
})

// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reduces

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      let expenses = state
      return expenses.filter(expense => expense.id != action.id);
    case 'EDIT_EXPENSE':
      state.map(expense => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state;
  }
}

// Filter Reduces

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default: 
      return state
  }
}
// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState())
});

let expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
let expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))

store.dispatch(editExpense({ id: expenseTwo.expense.id }, { amount: 400 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

console.log(store.getState())

const demoState = {
  expenses: [
    {
      id: 'asdasdasd',
      description: 'January Rent',
      note: 'This was the final paymant for that address',
      amount: 54500,
      createAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

