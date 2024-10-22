import MemoComponant from "./memo_component";
import { useState } from "react";
const MemoIndex = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Memo+
      </button>
      <MemoComponant />
    </>
  );
};
