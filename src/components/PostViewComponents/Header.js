import React from 'react'
import '../../stylecss/postviewHeader.css'
import logo from '../../images/icon.png'
import camera from '../../images/camera.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='containerheader'>
      <div className='boxheader'><img className='logo' alt='logo' src={logo}/></div>
      <div className='instacloneText boxheader'>Instaclone</div>
      <div className='boxheader'>
        <Link to='/form'>
        <img className='camera' alt='camera' src={camera}/></Link></div>
    </div>
  )
}
export default Header
