import { useState, useEffect, useContext } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import { FirebaseContext } from "../../Config/firebase-context";
import User from "../../Components/User";
import Favorites from "../../Components/User/Favorites";

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const firebase = useContext(FirebaseContext);
  const userId = useParams().userId;

  useEffect(() => {
    firebase.getUserData(userId).then((data) => setUserData(data));
  }, [userId]);

  if (!userData) return;
  return (
    <Routes>
      <Route index element={<User userData={userData} />} />
      <Route path="watchlist" />
      <Route path="favorites" element={<Favorites moviesIds={} />} />
      <Route path="ratings" />
      <Route path="reviews" />
    </Routes>
  );
}

export default UserProfile;
