import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DoctorsList from "./pages/DoctorsList";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/search" element={<Search />} />
        <Route path="/doctorslist" element={<DoctorsList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
