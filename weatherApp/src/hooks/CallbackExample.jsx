import React, { useState, useCallback } from "react";

// Child component
const Child = React.memo(({ handleClick }) => {
  console.log("Child Rendered");
  return (
    <button onClick={handleClick}>
      Click Child Button
    </button>
  );
});

const CallbackExample = () => {
  const [count, setCount] = useState(0);

  // useCallback use kiya
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>useCallback Example</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <br /><br />

      <Child handleClick={handleClick} />
    </div>
  );
};

export default CallbackExample;