import Component11 from "./component_1";
import { createContext, useState } from "react";
const IndexContext = createContext();
const UseContextIndex = () => {
  const [index_state, setIndexState] = useState(1);
  return (
    <div>
      <IndexContext.Provider>
        <Component11 index_state={index_state} />
      </IndexContext.Provider>
    </div>
  );
};
export default UseContextIndex;
