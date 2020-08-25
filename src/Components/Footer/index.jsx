import React, { useEffect } from 'react'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

import { useStateProviderValue } from '../../Context/StateProvider'

import './style.css'

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useStateProviderValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((res) => {
      console.log(res)

      dispatch({
        type: "SET_PLAYING",
        playing: res.is_playing,
      })

      dispatch({
        type: "SET_ITEM",
        item: res.item,
      })
    })
  }, [spotify])

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause()
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      })
    } else {
      spotify.play()
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      })
    }
  }

  const skipNext = () => {
    spotify.skipToNext()
    spotify.getMyCurrentPlayingTrack().then((res) => {
      dispatch({
        type: "SET_ITEM",
        item: res.item,
      })
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      })
    })
  }

  const skipPrevious = () => {
    spotify.skipToPrevious()
    spotify.getMyCurrentPlayingTrack().then((res) => {
      dispatch({
        type: "SET_ITEM",
        item: res.item,
      })
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      })
    })
  }
  return (
    <div className="footer">
      <div className="footer__left">
        <img src={item?.album.images[0].url} alt={item?.name} className="footer__albumLogo" />
        {item ? (<div className="footer__songInfo">
          <h4>{item?.name}</h4>
          <p>{item.artists?.map((artist) => artist.name).join(" • ")}</p>
        </div>
        ) :
          (<div className="footer__songInfo">
            <h4>No songs</h4>
            <p>No songs currenly playing</p>
          </div>
          )}
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" onClick={skipPrevious} />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />

        ) : (<PlayCircleOutlineIcon fontSize="large" className="footer__icon" onClick={handlePlayPause} />)}


        <SkipNextIcon className="footer__icon" onClick={skipNext} />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
