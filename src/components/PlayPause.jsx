import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa';

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) =>
// if the song is active and the song title matches the current active song title we can display the pause icon
(isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
  size={35}
  className="text-gray-300"
  onClick={handlePause}
  />
  ):( 
    // else we display the play icon
  <FaPlayCircle
  size={35}
  className="text-gray-300"
  onClick={handlePlay}
  />)  
);

export default PlayPause;
