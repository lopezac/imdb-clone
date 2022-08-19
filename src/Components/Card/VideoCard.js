import {string} from "prop-types";
import ReactPlayer from "react-player";

function VideoCard({name, url}) {
  return (
    <>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${url}`} alt={name}/>
    </>
  );
}

VideoCard.propTypes = {
  name: string,
  url: string
}

export default VideoCard;
