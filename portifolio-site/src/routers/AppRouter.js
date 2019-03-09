import React from 'react'
import { BrowserRouter, NavLink, Link, Switch, Route } from 'react-router-dom'

import NotFoundPage from '../components/NotFoundPage'
import HomePage from '../components/HomePage'
import Header from '../components/Header';
import PortifolioPage from '../components/PortifolioPage';


const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
      <Switch>
        <Route path="/portifolio/:id" component={PortifolioPage} />
        <Route path="/portifolio" component={PortifolioPage} />
        <Route path="/" exact={true} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;