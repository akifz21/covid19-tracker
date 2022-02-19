import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <h1>Covid-19 Data</h1>
        <ul id='header-ul'>
            <li><a href="https://github.com/akifz21" target="_blank"> <i class="fab fa-github"></i> Github</a> </li>
            <li><NavLink activeclassname="active" to={"/"}>Home</NavLink></li>
            <li><NavLink activeclassname="active" to={"/countries"}>Countries</NavLink></li>
        </ul>
    </header>
  )
}

export default Header