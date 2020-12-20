import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../features/userSlice";
import { auth } from "../firebase";

function Header() {
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <nav className="header__nav">
        <Link to="/" className="header__logo">
          <img src={logo} alt="" />
        </Link>
        <div className="header__links">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/donation">
              <li>Donation</li>
            </Link>
            <Link to="/events">
              <li>Events</li>
            </Link>
            <Link to="/blogs">
              <li>Blogs</li>
            </Link>

            <li>
              <Link onClick={() => auth.signOut()} to={!user && "/login"}>
                <button className="btn btn-primary btn-lg">
                  {user ? `logout` : `login`}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
