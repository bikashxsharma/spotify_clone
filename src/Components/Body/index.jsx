import React from 'react'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { DISCOVER_WEEKLY_ID } from '../../util/config'
import { useStateProviderValue } from '../../Context/StateProvider'
import Header from '../Header'
import SongRow from '../SongRow'

import './style.css'

function Body({ spotify }) {

  const [{ discover_weekly, playing }, dispatch] = useStateProviderValue();
  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:${DISCOVER_WEEKLY_ID}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
        })
      })
  }

  const pausePlaylist = () => {
    spotify.pause()
    dispatch({
      type: "SET_PLAYING",
      playing: false,
    })
  }

  const playSong = (uri) => {
    spotify
      .play({
        uris: [uri],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          })
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
        })
      })
  }
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt={discover_weekly?.name} />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          {playing ? (
            <PauseCircleFilledIcon className="body__shuffle icon__green" onClick={pausePlaylist} />
          ) : (
              <PlayCircleFilledIcon className="body__shuffle icon__green" onClick={playPlaylist} />
            )}

          <FavoriteIcon fontSize="large" className="icon__green" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item, id) =>
          <div key={id}><SongRow track={item.track} playSong={playSong} /></div>
        )}
      </div>
    </div>
  )
}

export default Body
