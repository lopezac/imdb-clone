import { SpaceBetweenNav } from "../../Assets/Styles/Navbar";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

function TopNavbar() {
  return (
    <SpaceBetweenNav>
      <LeftNav />
      <RightNav />
    </SpaceBetweenNav>
  );
}

export default TopNavbar;
