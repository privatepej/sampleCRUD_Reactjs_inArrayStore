import React, { useCallback, useMemo, useState } from "react";

const TryuseMemo = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 5);
  const compute = () => {
    console.log("Compute");
  };
  const memoizedCompute = useMemo(() => {
    console.log("memoizedCompute");
    return 100;
  }, []);

  const test = useCallback(() => {
    return "test";
  }, []);
  const memoizedCompute2 = useMemo(() => {
    test();
    console.log("memoizedCompute2");
  }, [test]);

  return (
    <div>
      CHECK CONSOLE compute: {compute()}
      memoizedCompute: {memoizedCompute}
      memoizedCompute2: {memoizedCompute2}
      count : {count}
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default TryuseMemo;
