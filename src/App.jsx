import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Finish from "./pages/Finish";
import Home from "./pages/Home";
import Onboard from "./pages/Onboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Finish />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
