import React from 'react'
import "./Sidebar.css"
import deal from "../../assets/apps.svg"
import users from "../../assets/users.svg"
import computer from "../../assets/computer.svg"

const Sidebar = () => {
  return (
    <div>
        <div> 
            <div className='inner'>
            <img src="https://cdn.icon-icons.com/icons2/2569/PNG/512/house_highlight_home_icon_153763.png" className='home' alt="" />
            <p className='d_text'>Dashboard</p>
         </div>
        </div>

        <div className='deal'>
            <div>
                <img src="https://cdn.icon-icons.com/icons2/2622/PNG/512/gui_content_icon_158492.png" className='home' alt="" />
                <p className='leads'>Leads</p>
            </div>
            <div>
            <img src={deal} className='home' alt="" />
                <p className='leads'>Deals</p>
            </div>
            <div>
            <img src={deal} className='home' alt="" />
                <p className='leads'>Contacts</p>
            </div>
            <div>
            <img src={users} className='home' alt="" />
                <p className='leads'>Contenders</p>
            </div>
            <div>
            <img src="" alt="" />
                <p className='leads'>Activities</p>
            </div>
            <div>
            <img src={computer} className='home' alt="" />
                <p className='leads'>Analytics</p>
            </div>
            <div>
            <img src={computer} className='home' alt="" />
                <p className='leads'>Setting</p>
            </div>
        </div>

      
    </div>
  )
}

export default Sidebar
