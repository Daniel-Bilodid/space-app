import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg'
import './nav.scss'
const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <div className="nav__wrapper">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="nav__bar">
              <div className='hr'></div>
            <ul className='nav__list'>
              <li className='nav__list-item active'> <Link to={'/'} className='route__link' ><span>00</span>Home </Link></li>
              <li className='nav__list-item'> <Link to={'/destination'} className='route__link' > <span>01</span>Destination </Link></li>
              <li className='nav__list-item'> <Link to={'/crew'} className='route__link' > <span>02</span>Crew </Link></li>
              <li className='nav__list-item'> <Link to={'/tech'} className='route__link' >  <span>03</span>Technology </Link></li>
            </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav