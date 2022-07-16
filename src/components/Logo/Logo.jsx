import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Logo.scss";

const Logo = () => (  
  <NavLink className="logo" to="home">
    <div className="logo--img"/>
    <p className="logo--name">
      aloha friday
    </p>
  </NavLink>
  );

export default Logo;
