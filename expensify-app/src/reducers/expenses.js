// Expenses Reduces

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      let expenses = state
      return expenses.filter(expense => expense.id != action.id);
    case 'EDIT_EXPENSE':
    state.map(expense => {
      if(expense.id === action.update.id) {
        console.log(action)
          return {
            ...expense,
            ...action.update
          }
        } else {
          return expense
        }
      })
    default:
      return state;
  }
}
