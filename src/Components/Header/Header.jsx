import React from 'react'
import "./Header.css"
import circle from "../../assets/Rectangle 4.svg"
import ham from "../../assets/03.svg"

const Header = () => {
  return (
    <div className='header'>
      <div className='sales'>
        <img src={circle} alt='circle' className='circle' />
        <p className='stext'>Sales</p>
        <div className='ham_div'>
          <img src={ham} alt="" />
          <img src={ham} alt="" />
          <img src={ham} alt="" />
        </div>
      </div>
      <div>
        <div>P</div>
        <div>p</div>
        <div>p</div>
      </div>
    </div>
  )
}

export default Header
