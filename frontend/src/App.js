import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import SignUpScreen from "./screen/SignUpScreen.js";
import { useSelector } from "react-redux";

import "./App.css";

function App() {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {!userInfo && <Redirect exact from="/" to="/login" />}
          <Route path="/login" component={LoginScreen} exact />
          <Route component={SignUpScreen} path="/register" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
