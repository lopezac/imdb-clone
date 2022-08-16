import { useEffect, useState } from "react";
import { object } from "prop-types";

import { capitalize } from "../../Utils/format";
import { Scroller } from "../../Styles/Scroller";

function Media({ videos, images }) {
  const [media, setMedia] = useState([]);
  const [current, setCurrent] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setMedia(getMedia());
  }, []);

  useEffect(() => {
    if (!current) return;
    setContent(media[current]);
  }, [current]);

  function getMedia() {
    return {
      videos: videos.results,
      backdrops: images.backdrops,
      posters: images.posters,
    };
  }

  function changeCurrent(e) {
    setCurrent(e.target.firstChild.data.toLowerCase());
  }

  return (
    <div>
      <div>
        <h2>Media</h2>
        <ul>
          {Object.entries(media).map(([name, content]) => {
            return (
              <li key={name} onClick={changeCurrent}>
                {capitalize(name)} {content.length}
              </li>
            );
          })}
        </ul>
        <Scroller></Scroller>
      </div>
    </div>
  );
}

Media.propTypes = {
  videos: object,
  images: object,
};

export default Media;
