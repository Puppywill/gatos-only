import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel"; // Este es nuestro "Home"

function Home() {
  return <Carousel />; // Página principal
}

function App() {
  return (
    <Router>
      <Navbar /> {/* 👈 Navbar siempre visible */}
      <Routes>
        <Route path="/App" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
