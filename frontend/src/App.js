import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import SignUpScreen from "./screen/SignUpScreen.js";
import { useSelector } from "react-redux";
import Header from "./components/Header";

import "./App.css";
import HomeScreen from "./screen/HomeScreen";

function App() {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <BrowserRouter>
      {userInfo && <Header />}
      <div className="App">
        <Switch>
          {!userInfo && <Redirect exact from="/" to="/login" />}
          <Route component={LoginScreen} path="/login" exact />
          <Route component={SignUpScreen} path="/register" />
          <Route component={HomeScreen} path="/" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
