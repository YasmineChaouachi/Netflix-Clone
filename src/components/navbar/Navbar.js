import { Notifications, Search } from '@mui/icons-material'
import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
          <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=" "/>
            <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
          </div>
          <div className="right">
            <Search/>
            <Notifications/>
            
          </div>
        </div>
        </div>
  )
}

export default Navbar