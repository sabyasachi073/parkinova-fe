import "./Header.css";
import logo from "../../assets/logo.png";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "../../services";

import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  async function handleLogout() {
    try {
      const result = await signOut();

      toast.success("Signout successful!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    setLoggedIn(false);
    navigate("/");
  }

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="logoContainer">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="menu">
          <ul>
            <li className={location.pathname === "/" ? "header-active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li
              className={
                location.pathname === "/dashboard" ? "header-active" : ""
              }
            >
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li
              className={location.pathname === "/upload" ? "header-active" : ""}
            >
              <Link to="/upload">Upload</Link>
            </li>

            {loggedIn ? (
              <li>
                <Link onClick={handleLogout}>Signout</Link>
              </li>
            ) : (
              <>
                <li
                  className={
                    location.pathname === "/signin" ? "header-active" : ""
                  }
                >
                  <Link to="/signin">Signin</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
