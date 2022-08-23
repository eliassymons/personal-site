import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Parks from "./components/Parks";

const RouteTree = function (props) {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/parks" element={<Parks />} />
    </Routes>
  );
};

export default RouteTree;
