import React, { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches";
import axios from "axios";

function App() {
  const [screen, setScreen] = useState("Home");
  const [profile, setProfile] = useState({});

  const chooseScreen = () => {
    switch (screen) {
      case "Home":
        return <Home getProfile={getProfile} changePage={selectScreen} profile={profile} />;
      case "Matches":
        return <Matches changePage={selectSecondScreen} profile={profile} />;
      default:
        return <Home changePage={selectScreen} />;
    }
  };

  const selectScreen = () => {
    setScreen("Matches");
  };

  const selectSecondScreen = () => {
    setScreen("Home");
  };

  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-correia-lovelace/person";

  const getProfile = () => {
    axios
      .get(url)

      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => getProfile(), []);

  return (
    <div>
      <h1>Astromatch</h1>
      {chooseScreen()}
    </div>
  );
}
export default App;
