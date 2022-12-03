import React from 'react'
import NetflixLogo from './images/netflix_logo.png'
import AvatarLogo from './images/netflix_avatar_1.png'



function Nav() {
  return (
    <div className='nav nav_black'>
      <div className="nav__contents">
        <img src={NetflixLogo} alt="" className='nav__logo'/>
        <img src={AvatarLogo} alt="" className='nav__avatar'/>
      </div>
    </div> 
  )
}

export default Nav