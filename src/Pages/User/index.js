import { useState, useEffect, useContext } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import { FirebaseContext } from "../../Config/firebase-context";
import User from "../../Components/User";
import UserSection from "../../Components/User/UserSection";

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
      <Route path="/" element={<User userData={userData} />}>
        <Route path="watchlist" element={<UserSection section="watchlist" />} />
        <Route path="favorites" element={<UserSection section="favorites" />} />
        <Route path="ratings" element={<UserSection section="ratings" />} />
      </Route>
    </Routes>
  );
}

export default UserProfile;
