import React from 'react'
import cus from "../../assets/new customers.svg"
import div from "../../assets/div.svg"
import div1 from "../../assets/div (1).svg"
import div2 from "../../assets/div (2).svg"
import div3 from "../../assets/div (3).svg"
import bar from "../../assets/div.card.svg"
import pie from "../../assets/div.card (1).svg"
import active from "../../assets/active users.svg"
import "./Frame.css"

const Frame = () => {
  return (
    <div>
        <div className='wel'>
            <p className='wel_text'>Welcome Back</p>
            <input className='date' type="date" placeholder='4/15 05:00 AM - 4/16 01:00 PM' id="" />
        </div>

        <div className='wallet'>
            <img src={div} className='w_img' alt="" />
            <img src={div1}className='w_img' alt="" />
            <img src={div2} className='w_img' alt="" />
            <img src={div3} className='w_img' alt="" />
        </div>

        <div className='bar_div'>
            <img src={bar} className='bar' alt="" />
            <img src={pie} className='pie' alt="" />
        </div>

        <div className='world'>
            <img src={active} className='ac' alt="" />

        </div>

        <div >
            <img src={cus} className='new' alt="" />
        </div>
      
    </div>
  )
}

export default Frame
