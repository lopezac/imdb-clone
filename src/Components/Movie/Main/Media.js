import { useEffect, useState } from "react";
import { object } from "prop-types";

import { capitalize } from "../../../Utils/format";
import { getImg } from "../../../Utils/various";
import VideoCard from "../../Card/VideoCard";
import { Scroller, RowDotList } from "../../../Assets/Styles/List";
import { SectionDiv } from "../MovieDivs";
import {
  StrongMediumPara,
  SmallestSubTitle,
} from "../../../Assets/Styles/Para";
import { RowWrapper } from "../../../Assets/Styles/Wrapper";
import { RecommendImg } from "../../../Assets/Styles/Image";

function Media({ videos, images }) {
  const [media, setMedia] = useState([]);
  const [current, setCurrent] = useState("backdrops");
  const [content, setContent] = useState(null);

  useEffect(() => {
    setMedia(getMedia());
  }, [videos, images]);

  useEffect(() => {
    if (!current) return;
    const tempContent = media[current] ? media[current] : [];
    setContent(tempContent.slice(0, 25));
    console.log("current tempContent", current, tempContent, media);
  }, [media, current]);

  useEffect(() => {
    console.log("content", content);
  }, [content]);

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
    <SectionDiv>
      <RowWrapper>
        <SmallestSubTitle>Media</SmallestSubTitle>
        <RowDotList>
          {Object.entries(media).map(([name, mediaContent]) => {
            return (
              <li key={name} onClick={changeCurrent}>
                <StrongMediumPara>
                  {capitalize(name)} {mediaContent.length}
                </StrongMediumPara>
              </li>
            );
          })}
        </RowDotList>
      </RowWrapper>
      <Scroller>
        {content &&
          content.map((item) => {
            return (
              <li>
                {current === "videos" ? (
                  <VideoCard name={item.name} url={item.key} key={item.key} />
                ) : (
                  <RecommendImg src={getImg(item.file_path)} alt="Media img" />
                )}
              </li>
            );
          })}
      </Scroller>
    </SectionDiv>
  );
}

Media.propTypes = {
  videos: object,
  images: object,
};

export default Media;
