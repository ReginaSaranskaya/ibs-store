import React from "react";
import { Route, Routes } from "react-router";
import Provider from "./context/Search/Provider";

import Layout from "./components/Layout/Layout";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";

function App() {
  return (
    <Provider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Catalog />} />
            <Route path="/item" element={<Product />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
