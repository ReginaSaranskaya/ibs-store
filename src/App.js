import React from "react";

import CatalogPage from "./Pages/CatalogPage";
import Provider from "./context/Search/Provider";


function App() {
  return (
      <Provider>
        <div className="App">
          <CatalogPage />
        </div>
      </Provider>
  );
}

export default App;
