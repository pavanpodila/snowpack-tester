import React, { useState } from 'react';

export function HelloWorld() {
  const [count, setCount] = useState(0);
  return (
    <div className="m-4">
      <div className="text-2xl">
        Hello World: <span className="text-blue-800 font-bold">{count}</span>
      </div>
      <button onClick={() => setCount(count + 1)} className="bg-blue-600 px-4 py-2 text-white rounded shadow-md">
        Increment
      </button>
    </div>
  );
}
