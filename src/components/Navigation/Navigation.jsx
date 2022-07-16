import React from 'react';
import { NavLink} from 'react-router-dom';
import { Shop } from '../Shop/Shop';
import "./Navigation.scss";

const Navigation = () => (
    <nav className="navigation">
      <NavLink className="navigation__link" to="contact">Contact</NavLink>
      <NavLink className="navigation__link" to="auth">LogIn</NavLink>
      <Shop />
    </nav>
);

export default Navigation;