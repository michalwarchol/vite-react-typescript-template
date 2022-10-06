import React, { useState } from 'react';
import "./Button.scss";

const Button: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="buttonRoot"
      onClick={() => setCount(count + 1)}
    >
      Click count: {count}
    </button>
  );
}

export default Button;
