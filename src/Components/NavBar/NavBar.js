import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

const NavBar = () => {

  return (
    <div className="flex justify-between px-9 p-4 bg-orange-400 sticky top-0">
        <div className="gfont text-2xl">IQ knowledge</div>
      <div className="link">
        <NavLink className={({isActive}) => isActive ? 'color' : undefined} to="/">Topics</NavLink>
        <NavLink className={({isActive}) => isActive ? 'color' : undefined} to="/static">Statistic</NavLink>
        <NavLink className={({isActive}) => isActive ? 'color' : undefined} to="/blog">Blog</NavLink>
      </div>
    </div>
  );
};
export default NavBar;
