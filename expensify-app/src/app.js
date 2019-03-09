import React from 'react';
import ReactDOM from 'react-dom';
import  AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from "./actions/filters";
import { getVisibleExpenses } from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import moment from 'moment';


const store = configureStore();


store.dispatch(addExpense({
  description: 'Water bill',
  amount: '2000',
  createAt: moment.now().valueOf()
}))

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: '1000',
  createAt: moment.now().valueOf()
}))

store.dispatch(addExpense({
  description: 'rent',
  amount: '2000',
  createAt: moment.now().valueOf()
}))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('app'))
