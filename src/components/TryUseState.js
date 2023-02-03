import React, { useState } from "react";

const TryUseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  return (
    <div>
      count : {count}
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default TryUseState;
