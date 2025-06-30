import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import Finalpage from "./Finalpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Secondpage" element={<Secondpage />} />
        <Route path="/Thirdpage" element={<Thirdpage />} />
        <Route path="/Finalpage" element={<Finalpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
