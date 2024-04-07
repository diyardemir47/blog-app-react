import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/auth';
import { FaBook, FaPlus, FaSignOutAlt } from 'react-icons/fa'; // İkonları içe aktarın
import 'bulma/css/bulma.min.css';



const Header = () => {
  return (
    <nav className="navbar is-success" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          Blog App
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <NavLink className="navbar-item" to="/blogs" activeClassName="is-active">
            <span className="icon">
              <FaBook />
            </span>
            Blogs
          </NavLink>
          <NavLink className="navbar-item" to="/create" activeClassName="is-active">
            <span className="icon">
              <FaPlus />
            </span>
            Create
          </NavLink>
          <a className="navbar-item" onClick={logout}>
            <span className="icon">
              <FaSignOutAlt />
            </span>
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
