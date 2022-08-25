import { FaBell, FaPlus } from "react-icons/fa";

import SignInBtn from "./SignInBtn";
import UserInfo from "./UserInfo";
import HiddenSearchBar from "../Input/HiddenSearchBar";
import { Navbar } from "../../Assets/Styles/Navbar";

export default function RightNav() {
  return (
    <Navbar>
      <p>{<FaPlus />}</p>
      <p>EN</p>
      <p>{<FaBell />}</p>
      <SignInBtn />
      <UserInfo />
      <HiddenSearchBar />
    </Navbar>
  );
}
