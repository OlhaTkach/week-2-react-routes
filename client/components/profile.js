import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Profile = () => {
  const { username } = useParams()
  return (
    <div>
      <div id="title">Profile</div> 
      <div id="username">{username}</div> 
      <Link to="/dashboard"> Go To Root</Link>
      <Link to="/dashboard/main"> Go To Main </Link>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
