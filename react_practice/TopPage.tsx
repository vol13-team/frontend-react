import { useState } from "react";

const TopPage: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>TopPage</h1>
        <p>{count}</p>
        <button onClick={handleCount}>Increment</button>
      </div>
    </>
  );
};

export default TopPage;
