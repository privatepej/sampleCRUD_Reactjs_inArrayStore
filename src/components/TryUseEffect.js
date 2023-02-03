import React, { useEffect, useState } from "react";

const TryUseEffect = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);

  useEffect(() => {
    console.log("palagi mag run");
  });
  useEffect(() => {
    console.log("isang beses lang mag run");
  }, []);
  useEffect(() => {
    console.log("mag rurun lang pag mag babago ung count state");
  }, [count]);

  return (
    <div>
      count: {count}
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

export default TryUseEffect;
