import React from 'react'
import SideBarOption from '../SideBarOption'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import { useStateProviderValue } from '../../Context/StateProvider'

import './style.css'

function Sidebar() {
  const [{ playlists }, dispatch] = useStateProviderValue()
  const setPlaylistId = (id) => {
    dispatch({
      type: "SET_PLAYLIST_ID",
      id: id,
    })
  }

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spoitfy logo"
      />
      <SideBarOption title="Home" Icon={HomeIcon} />
      <SideBarOption title="Search" Icon={SearchIcon} />
      <SideBarOption title="Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      {playlists?.items?.map((playlist, id) => (
        <div key={id}><SideBarOption title={playlist.name} id={playlist.id} setPlaylistId={setPlaylistId} /> </div>
      ))}

    </div>
  )
}

export default Sidebar
