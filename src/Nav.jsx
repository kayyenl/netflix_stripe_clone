import React from 'react'
import NetflixLogo from './images/netflix_logo.png'
import AvatarLogo from './images/netflix_avatar_1.png'
import { useState, useEffect } from 'react'


function Nav() {

  const [show, handleShow] = useState(true)

  function transitionNavBar() {
    if (window.scrollY > 100) {
      handleShow(false);
    } else {
      handleShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img src={NetflixLogo} alt="" className='nav__logo'/>
        <img src={AvatarLogo} alt="" className='nav__avatar'/>
      </div>
    </div> 
  )
}
 
export default Nav