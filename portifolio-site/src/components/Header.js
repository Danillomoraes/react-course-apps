import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>
    <NavLink to="/portifolio" activeClassName="is-active">Porttifolio</NavLink>
    <NavLink to="/portifolio/123" activeClassName="is-active">Portifolio with id</NavLink>
  </header>
)

export default Header