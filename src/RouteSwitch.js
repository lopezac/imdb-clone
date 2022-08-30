import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/index";
import Movie from "./Pages/Movie";
import Person from "./Pages/Person";
import Tv from "./Pages/Tv";
import ScrollToTop from "./Utils/ScrollToTop";
import Layout from "./Components/Layouts/index";
import Search from "./Pages/Search/index";
import { Firebase } from "./Config/firebase-config";
import { FirebaseContext } from "./Config/firebase-context";
import UserProfile from "./Pages/User";

function RouteSwitch() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <FirebaseContext.Provider value={Firebase()}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="search">
              <Route path=":query" element={<Search />} />
            </Route>

            <Route path="movie">
              <Route path=":movieId/*" element={<Movie />} />
            </Route>

            <Route path="tv">
              <Route path=":tvId/*" element={<Tv />} />
            </Route>

            <Route path="person">
              <Route path=":personId/*" element={<Person />} />
            </Route>

            <Route path="user">
              <Route path=":userId/*" element={<UserProfile />} />
            </Route>
          </Route>
        </Routes>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default RouteSwitch;
