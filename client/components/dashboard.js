import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/d71e4430-5383-4865-9f7c-5edfdbccb2da">Go To Profile</Link>
      <Link to="/dashboard">Go To Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
