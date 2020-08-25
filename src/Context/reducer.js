import { DISCOVER_WEEKLY_ID } from '../util/config'
export const initialState = {
  user: null,
  // change token to null after development //TODO
  //token: null,
  //token: "BQASXBPdLbRV5jWV7xRCpzySxufE9v0-VuKbLQG_uIWfCPoZ5RpJiKPALoKNCiZuDTeVOEAhn_ygZY_eIRw26Wd4JeAoKPuI23XeCS2hyUXkI8fqwtDbiXM-XXiISDbUwvF-I249u6jpzJJzkeAkhg0B0K3aLrTUzQ",
  playlists: [],
  spotify: null,
  playing: false,
  item: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  playlist_id: DISCOVER_WEEKLY_ID,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      }

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      }

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      }

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      }

    case "SET_PLAYLIST_ID":
      return {
        ...state,
        playlist_id: action.id,
      }
    default:
      return state

  }

}

export default reducer;