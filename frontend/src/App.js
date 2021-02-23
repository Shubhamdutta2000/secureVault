import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import SignUpScreen from "./screen/SignUpScreen.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" exact>
            <LoginScreen />
          </Route>
          <Route component={SignUpScreen} path="/register" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
