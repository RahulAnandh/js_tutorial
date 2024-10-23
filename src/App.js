import TypesIndex from "./components/types";
import OparatersIndex from "./components/oparaters";
import DataTypes from "./components/data_types";
import FunctionIndex from "./components/functions";
import ObjectIndex from "./components/objects";
import UseContextIndex from "./components/use_context.js";
function App() {
  return (
    <div>
      <TypesIndex />
      <br />
      <OparatersIndex />
      <br />
      <DataTypes />
      <br />
      <FunctionIndex />
      <br />
      <ObjectIndex />
      <br />
      <UseContextIndex />
    </div>
  );
}

export default App;
