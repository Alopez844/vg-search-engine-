import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/profile">Profile</Link>
        <Link to="/games">Games</Link>
    </div>
  )
}

export default Navbar