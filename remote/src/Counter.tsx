import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-900 text-white p-5">
      <div>Count = {count}</div>
      <button
        className="bg-red-900 p-2 rounded-lg"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
