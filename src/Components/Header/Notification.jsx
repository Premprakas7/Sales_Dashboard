import React from 'react'
import not from "../../assets/Vector.svg"
import chat from "../../assets/Vector (1).svg"
import promo from "../../assets/Vector (2).svg"
import setting from "../../assets/Vector (3).svg"
import "./not.css"

const Notification = () => {
  return (
    <div className='notification'>
        <div>
            <img src={not} alt="" />
        </div>
        <div>
            <img src={chat} alt="" />
        </div>
        <div>
            <img src={promo} alt="" />
        </div>
        <div>
            <img src={setting} alt="" />
        </div>
    </div>
  )
}

export default Notification
