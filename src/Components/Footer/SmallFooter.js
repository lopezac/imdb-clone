import { FaGithub } from "react-icons/fa";

import { GithubLink } from "../../Assets/Styles/Link";
import { AlignedPara } from "../../Assets/Styles/Para";
import { SmallFooterDiv } from "./FooterStyle";

export default function SmallFooter() {
  return (
    <SmallFooterDiv>
      <AlignedPara>
        Axel C.Lopez @Copyright 2022{" "}
        <GithubLink href="https://www.github.com/lopezac/imdb-clone">
          <FaGithub />
        </GithubLink>
      </AlignedPara>
    </SmallFooterDiv>
  );
}
