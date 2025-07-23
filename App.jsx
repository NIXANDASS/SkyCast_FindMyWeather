// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import City from "./City";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<City />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
      <div className="footer">Nixan Dass A - 212222040109</div>
    </div>
  );
}

export default App;
