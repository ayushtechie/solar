import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import EPC from "./pages/EPC";
import Nopage from "./pages/NoPage";
import SolarProducts from "./pages/SolarProducts";
import Estimator from "./pages/Estimater";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/estimater" element={<Estimator />} />
          <Route path="/epc" element={<EPC />} />
          <Route path="/solar-pannel" element={<SolarProducts />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
