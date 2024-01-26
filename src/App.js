import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import EPC from "./pages/EPC";
import Nopage from "./pages/NoPage";
import SolarProducts from "./pages/SolarProducts";
import Estimator from "./pages/Estimater";
import SolarModule from "./pages/SolarModule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/estimater" element={<Estimator />} />
          <Route path="/epc" element={<EPC />} />
          <Route path="/solar-panel" element={<SolarProducts />} />
          <Route path="/solar-panel/solar-module" element={<SolarModule />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
