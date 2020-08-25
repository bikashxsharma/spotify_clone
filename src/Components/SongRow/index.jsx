import React from 'react'

import { useStateProviderValue } from '../../Context/StateProvider'
import './style.css'

function SongRow({ track, playSong }) {
  const [{ item }, dispatch] = useStateProviderValue();
  return (
    <div className="songRow" onClick={() => playSong(track.uri)}>
      <img src={track.album.images[0].url} alt="" className="songRow__album" />
      <div className={`songRow__info ${item && item.id === track.id ? 'active__song' : ''}`}>
        <h1>{track.name}</h1>
        {/* <p>{track.artists?.map((artist,id)=>artist.name.join("•"))}</p> */}
        <p>{track.artists?.map((artist) => artist.name).join(" • ")}</p>
      </div>


    </div>
  )
}

export default SongRow
