import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className='header'>
      <NavLink to="/" 
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">DN</p>
      </NavLink>
      <nav className="flex font-medium text-lg gap-7">
        <NavLink to="/about" 
          className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }
        >
          <span>About</span>
        </NavLink>
        <NavLink to="/projects" 
          className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }
        >
          <span>Projects</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar;