import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import React from "react";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar">
        <div className="container">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=" "
            />
            <Link to="/" className="link">
              <span>Homepage</span>
            </Link>

            <Link to="/series" className="link">
              <span>Series</span>
            </Link>
            <Link to="/movies" className="link">
              <span>Movies</span>
            </Link>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <Search className="icon" />
            <Notifications className="icon" />
            <img
              src="http://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZ2iWyDq0fR9TY_uztNZ4TcwWkPPdS2NdTtUt3EHjC_rkiEAexSxSUfbrAYTaiI5pcHVs5QMIAhgo1tVaDJr67VjRcr_ZCw.png?r=cad"
              alt=""
            />
            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
