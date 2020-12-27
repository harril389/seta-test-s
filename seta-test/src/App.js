import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import { renderRoutes } from "react-router-config";
import { renderRoutes } from "react-router-config";
import routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </div>
  );
}
export default App;
