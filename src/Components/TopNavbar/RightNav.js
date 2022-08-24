import { FaBell, FaPlus } from "react-icons/fa";

import SignInBtn from "./SignInBtn";
import UserInfo from "./UserInfo";
import HiddenSearchBar from "../Input/HiddenSearchBar";

export default function RightNav() {
  return (
    <nav>
      <p>{<FaPlus />}</p>
      <p>EN</p>
      <p>{<FaBell />}</p>
      <SignInBtn />
      <UserInfo />
      <HiddenSearchBar />
    </nav>
  );
}
