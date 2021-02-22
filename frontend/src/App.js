import { BrowserRouter, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route component={LoginScreen} path="/" />
      </div>
    </BrowserRouter>
  );
}

export default App;
