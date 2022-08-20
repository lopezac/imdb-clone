import {Outlet} from "react-router-dom";

import TopNavbar from "../TopNavbar/index";
import Footer from "../Footer/index";

function Layout() {
  return (
    <>
      <TopNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;

