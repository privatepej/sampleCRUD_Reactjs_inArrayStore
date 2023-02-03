import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("./todolist");
  };

  return (
    <div className="home-main">
      <h1>Welcome to my Todolist</h1>
      <button onClick={handleOnclick}>START NOW!</button>
    </div>
  );
};

export default Home;
