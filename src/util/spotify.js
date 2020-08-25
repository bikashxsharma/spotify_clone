import { CLIENT_ID } from './config'
export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:3000/"

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//get response and save access token an object
export const getTokenFromResponse = () => {
  //http://localhost:3000/#access_token=BQBePtj5a9VTLNZm4_8XgZnTFl3I_sBeUPNuztlPMnP8g10R7SuiFreJJWd2mZIZVwEV2OyEehb1-n-QViiF9RFaSYJf-aOYj7zwnWJnBmS4uhvXw498oFTnAMX6CHuTQRaMe8BIloAbMbGKdSghWNIZc8Jo&token_type=Bearer&expires_in=3600
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {

      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;