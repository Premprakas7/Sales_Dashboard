import React from 'react'
import "./Header.css"
import circle from "../../assets/Rectangle 4.svg"
import sicon from "../../assets/search.svg"
import Notification from './Notification'


const Header = () => {
  return (
    <div className='header'>
      <div className='sales'>
        <img src={circle} alt='circle' className='circle' />
        <p className='stext'>Sales</p>
        <div className='ham_div'>
          <img className='ham' src="https://cdn4.iconfinder.com/data/icons/website-library/32/hamburger_List_hamburger_right_menu_website-256.png" alt="" />         
        </div>
      </div>
      <div className='dash'>
        <div>
          <p className='dash_text'>Dashboard</p>
          <p className='wel'>Welcome to Davor Admin!</p>
        </div>
        <div className='search_div'>
          <input type="text" placeholder='Search here' className='inp' />
          <img src={sicon} alt="ic" className='simg' />
        </div>
        <div><Notification/></div>
      </div>
    </div>
  )
}

export default Header
