import React, { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  // Heavy calculation function
  const expensiveCalculation = (n) => {
    console.log("Heavy calculation running...");
    for (let i = 0; i < 100000000; i++) {} // fake heavy work
    return n * 2;
  };

  // useMemo use kiya
  const result = useMemo(() => {
    return expensiveCalculation(num);
  }, [num]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>useMemo Example</h2>

      <h3>Number: {num}</h3>
      <h3>Result: {result}</h3>

      <button onClick={() => setNum(num + 1)}>
        Change Number
      </button>

      <br /><br />

      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>
    </div>
  );
};

export default UseMemoExample;