import { NavLink } from 'react-router-dom'
import navLinks from './navLinks'

const NavBar = () => {
  return (
    <nav>
        <ul>
            {navLinks.map(navLink => (
                <li key={navLink.name}><NavLink to={navLink.url} >{ navLink.name }</NavLink></li>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar
