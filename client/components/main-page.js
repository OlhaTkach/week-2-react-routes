import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div id="title">Main
      <Link to="/dashboard/profile/d71e4430-5383-4865-9f7c-5edfdbccb2da">Go To Profile</Link>
      <Link to="/dashboard">Go To Root</Link>
    </div>    
  )
}

MainPage.propTypes = {}

export default MainPage
