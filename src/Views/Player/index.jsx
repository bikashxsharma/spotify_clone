import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Body from '../../Components/Body'
import Footer from '../../Components/Footer'

import './style.css'

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  )
}

export default Player
