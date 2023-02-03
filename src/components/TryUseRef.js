import React from "react";
import { useState, useRef, useEffect } from "react";

const TryUseRef = () => {
  const buttonref = useRef(null);

  useEffect(() => {
    if (buttonref.current) {
      setTimeout(() => {
        buttonref.current.style.display = "background-Color: red";
      }, 3000);
    }
  }, []);
  return (
    <div>
      mawawala button in 3sec
      <button ref={buttonref}>button</button>;
    </div>
  );
};

export default TryUseRef;
