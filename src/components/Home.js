import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("./todolist");
  };

  const UseStateOnclick = () => {
    navigate("./tryusestate");
  };

  const UseRefOnclick = () => {
    navigate("./tryuseref");
  };
  const UseRefEffect = () => {
    navigate("./tryuseeffect");
  };

  const UseRef_UseMemo = () => {
    navigate("./tryusememo");
  };

  const UseRef_UseCallBack = () => {
    navigate("./tryusecallback");
  };

  return (
    <div className="home-main">
      <h1>Welcome to my Todolist</h1>
      <button onClick={handleOnclick}>START NOW!</button>
      <button onClick={UseStateOnclick}>Learn Use State</button>
      <button onClick={UseRefOnclick}>Learn Use Ref</button>
      <button onClick={UseRefEffect}>Learn Use useEffect</button>
      <button onClick={UseRef_UseMemo}>Learn Use useMemo</button>
      <button onClick={UseRef_UseCallBack}>Learn Use useCallBack</button>
    </div>
  );
};

export default Home;
