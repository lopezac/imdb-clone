import { useEffect, useState } from "react";
import { object } from "prop-types";

import { capitalize } from "../../../Utils/format";
import { Scroller } from "../../../Assets/Styles/Scroller";
import VideoCard from "../../Card/VideoCard";
import PosterCard from "../../Card/PosterCard";

function Media({ videos, images }) {
  const [media, setMedia] = useState([]);
  const [current, setCurrent] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setMedia(getMedia());
  }, [videos, images]);

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
        <Scroller>
          {content &&
            content.map((item) => {
              return (
                <li>
                  {current === "videos" ? (
                    <VideoCard name={item.name} url={item.key} />
                  ) : (
                    <PosterCard url={item.file_path} />
                  )}
                </li>
              );
            })}
        </Scroller>
      </div>
    </div>
  );
}

Media.propTypes = {
  videos: object,
  images: object,
};

export default Media;
