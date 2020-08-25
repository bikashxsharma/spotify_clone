import React from 'react'

import './style.css'

function SideBarOption({ title, Icon, id, setPlaylistId }) {
  return (
    <div className="sideBarOption" onClick={() => setPlaylistId(id)}>
      {Icon && <div className="sideBarOption__icon"><Icon /></div>}
      {Icon ? (<h4>{title} </h4>) : (<p>{title} </p>)}
    </div>
  )
}

export default SideBarOption