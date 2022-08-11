import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../constants/navLinks'

export const NavBar = () => {
  return (
    <nav>
        <ul>
            {navLinks.map(navLink => (
                <li><NavLink to={navLink.url} >{ navLink.name }</NavLink></li>
            ))}
        </ul>
    </nav>
  )
}
