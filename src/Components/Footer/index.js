import LogoColumn from "./LogoColumn";
import ListsColumns from "./ListsColumns";
import { FooterDiv, NavWrapper } from "./FooterStyle";
import SmallFooter from "./SmallFooter";

function Footer() {
  return (
    <>
      <FooterDiv>
        <NavWrapper>
          <LogoColumn />
          <ListsColumns />
        </NavWrapper>
      </FooterDiv>
      <SmallFooter />
    </>
  );
}

export default Footer;
