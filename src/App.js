import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './Components/Login'
import Player from './Views/Player'
import { DISCOVER_WEEKLY_ID } from './util/config'
import { getTokenFromResponse } from './util/spotify'
import { useStateProviderValue } from './Context/StateProvider'

import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, playlist_id }, dispatch] = useStateProviderValue();
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.getPlaylist(playlist_id).then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      )

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      )

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      })

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch])
  return (

    <div className="app">
      {
        token ? (<>
          <Player spotify={spotify} />
        </>
        ) : (<Login />)
      }

    </div>
  );
}

export default App;
