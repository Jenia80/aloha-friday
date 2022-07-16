import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Logo.scss";

const Logo = () => (  
  <NavLink className="logo" to="/">
    <div className="logo--img"/>
    <p className="logo--name">
      aloha friday
    </p>
  </NavLink>
  );

export default Logo;
