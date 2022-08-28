import { string, object } from "prop-types";
import { GrFacebook, GrInstagram, GrTwitter, GrHome } from "react-icons/gr";

import { RowDotList } from "../../../Assets/Styles/List";
import { SocialMediaLink } from "../../../Assets/Styles/Link";

function SocialMedia({ homepage, ids }) {
  return (
    <RowDotList>
      <SocialMediaLink href={`https://facebook.com/${ids.facebook_id}`}>
        <GrFacebook />
      </SocialMediaLink>
      <SocialMediaLink href={`https://instagram.com/${ids.instagram_id}`}>
        <GrInstagram />
      </SocialMediaLink>
      <SocialMediaLink href={`https://twitter.com/${ids.twitter_id}`}>
        <GrTwitter />
      </SocialMediaLink>
      <SocialMediaLink href={homepage}>
        <GrHome />
      </SocialMediaLink>
    </RowDotList>
  );
}

SocialMedia.propTypes = {
  homepage: string,
  ids: object,
};

export default SocialMedia;
