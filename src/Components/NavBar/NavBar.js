import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const NavBar = () => {
  return (
    <div className="flex justify-between px-9 p-4 bg-orange-400 sticky top-0">
        <div className="gfont text-2xl">IQ knowledge</div>
      <div>
        <Link className="mr-4" to="/">Topics</Link>
        <Link className="mr-4" to="/static">Statistic</Link>
        <Link className="mr-4" to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default NavBar;
