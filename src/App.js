import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Home from "./components/Home";
import Todolist from "./components/Todolist";

const App = () => {
  return (
    <div className="app-main">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
