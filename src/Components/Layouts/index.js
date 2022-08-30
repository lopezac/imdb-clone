import { Outlet } from "react-router-dom";

import TopNavbar from "../TopNavbar/index";
import Footer from "../Footer/index";
import { PageMainDiv, FooterMainDiv } from "../../Assets/Styles/GlobalStyle";

function Layout() {
  return (
    <PageMainDiv>
      <div>
        <TopNavbar />
      </div>
      <div>
        <Outlet />
      </div>
      <FooterMainDiv>
        <Footer />
      </FooterMainDiv>
    </PageMainDiv>
  );
}

export default Layout;
