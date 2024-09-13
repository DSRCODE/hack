import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SucessStory from "./Components/SucessStory";
import SportsDet from "./Pages/SportsDet";
import WomenEmpowerment from "./Pages/WomenEmpowerment";
import AwarenessPage from "./Pages/AwarenessPage";
import PlayerForm from "./Pages/PlayerForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/story" element={<SucessStory />} />
        <Route path="/sportDet" element={<SportsDet />} />
        <Route path="/empowerment" element={<WomenEmpowerment />} />
        <Route path="/awareness" element={<AwarenessPage />} />
        <Route path="/playerform" element={<PlayerForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
