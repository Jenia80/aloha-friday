import React from 'react';
import Logo from '../Logo/Logo';
import Copyright from '../Copyright/Copyright';
import './Footer.scss';
import '../Header/Header.scss';

const Footer = () => (
  <footer className="header footer">
    <div className="wrapper">
      <Copyright />
      <Logo />
    </div>
  </footer>
);

export default Footer;