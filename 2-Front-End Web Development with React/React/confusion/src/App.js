import React from "react";
import {Main} from "./components/MainComponent";
import "./App.css";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Main></Main>
    </div>
    </BrowserRouter>
  );
}

export default App;
