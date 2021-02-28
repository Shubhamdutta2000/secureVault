import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import SignUpScreen from "./screen/SignUpScreen.js";
import { useSelector } from "react-redux";

import Header from "./components/Header";

import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import DetailsScreen from "./screen/detailsScreen";
import PostDetails from "./screen/PostDetails";

function App() {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <BrowserRouter>
      {userInfo && <Header />}
      <div className="App">
        <Switch>
          {!userInfo && <Redirect exact from="/" to="/login" />}
          {!userInfo && <Redirect exact from="/post/details" to="/login" />}
          <Route path="/home/post/details" component={PostDetails} />
          <Route component={DetailsScreen} path="/details" />
          <Route path="/" component={HomeScreen} exact />
          <Route component={LoginScreen} path="/login" />
          <Route component={SignUpScreen} path="/register" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
