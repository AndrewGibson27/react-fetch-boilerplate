import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/featured">Featured</NavLink>
      <NavLink to="/latest">Latest</NavLink>
    </nav>
  );
};

export default Nav;
