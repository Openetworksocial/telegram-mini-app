import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Finish from "./pages/Finish";
import Home from "./pages/Home";
import Onboard from "./pages/Onboard";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import NFT from "./pages/NFT";

function App() {
  return (
    <div>
      <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/Openetworksocial/ton-manifest/main/ton-manifest.json">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
        </Router>
      </TonConnectUIProvider>
    </div>
  );
}

export default App;
