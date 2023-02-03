import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Home from "./components/Home";
import Todolist from "./components/Todolist";
import TryUseState from "./components/TryUseState";
import TryUseRef from "./components/TryUseRef";
import TryUseEffect from "./components/TryUseEffect";
import TryUseCallBack from "./components/TryUseCallBack";
import TryuseMemo from "./components/TryUseMemo";

const App = () => {
  return (
    <div className="app-main">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/tryusestate" element={<TryUseState />} />
        <Route path="/tryuseref" element={<TryUseRef />} />
        <Route path="/tryuseeffect" element={<TryUseEffect />} />
        <Route path="/tryusememo" element={<TryuseMemo />} />
        <Route path="/tryusecallback" element={<TryUseCallBack />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
