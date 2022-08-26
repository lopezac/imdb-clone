import LogoColumn from "./LogoColumn";
import ListsColumns from "./ListsColumns";
import { FooterDiv, NavWrapper } from "./FooterStyle";

function Footer() {
  return (
    <FooterDiv>
      <NavWrapper>
        <LogoColumn />
        <ListsColumns />
      </NavWrapper>
    </FooterDiv>
  );
}

export default Footer;
