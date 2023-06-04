import React from "react";
import { Route, Routes } from "react-router";

import Provider from "./context/Search/Provider";
import Layout from "@/components/Layout/Layout";
import Product from "./pages/Product/Product";
import Catalog from "./pages/Catalog/Catalog";

const App = () => (
  <Provider>
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Catalog />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  </Provider>
);

export default App;
