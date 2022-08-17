import { string, object } from "prop-types";
import { GrFacebook, GrInstagram, GrTwitter, GrHome } from "react-icons/gr";

function SocialMedia({ homepage, ids }) {
  return (
    <nav>
      <a href={`https://facebook.com/${ids.facebook_id}`}>
        <GrFacebook />
      </a>
      <a href={`https://instagram.com/${ids.instagram_id}`}>
        <GrInstagram />
      </a>
      <a href={`https://twitter.com/${ids.twitter_id}`}>
        <GrTwitter />
      </a>
      <a href={homepage}>
        <GrHome />
      </a>
    </nav>
  );
}

SocialMedia.propTypes = {
  homepage: string,
  ids: object,
};

export default SocialMedia;
