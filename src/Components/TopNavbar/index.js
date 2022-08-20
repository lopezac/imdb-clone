import SearchBar from "./SearchBar";
import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";
import UserInfo from "./UserInfo";

function TopNavbar() {
  return (
    <div>
      <SearchBar />
      <SignInBtn />
      <SignOutBtn />
      <UserInfo />
    </div>
  );
}

export default TopNavbar;
