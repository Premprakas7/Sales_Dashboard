import React from 'react'
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar'
import "./Dashboard.css"
import Frame from '../Components/Frame/Frame'

const Dashboard = () => {
  return (
    <div>
        <Header/>
        <div className='main'>
            <div className='side'><Sidebar/></div>
            <div><Frame/></div>
        </div>
    </div>
  )
}

export default Dashboard
