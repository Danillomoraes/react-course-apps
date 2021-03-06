import React from 'react'
import { BrowserRouter, NavLink, Link, Switch, Route } from 'react-router-dom'

import NotFoundPage from '../components/NotFoundPage'
import HelpPage from '../components/HelpPage'
import EditExpensePage from '../components/EditExpansePage'
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';

import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage}/>
        <Route path="/create" component = {AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;