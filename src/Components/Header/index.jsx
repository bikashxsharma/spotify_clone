import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from "@material-ui/core"

import { useStateProviderValue } from '../../Context/StateProvider'

import './style.css'

function Header({ spotify }) {

  const [{ user }, dispatch] = useStateProviderValue()
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs, or Album.." type="text" />
      </div>
      {user ? (<div className="header__right">
        <Avatar src={user.images[0].url} />
        <h4>{user.display_name}</h4>

      </div>) : (<div className="header__right"><Avatar /><h4>Login</h4></div>)}

    </div>
  )
}

export default Header
