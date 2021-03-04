import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import SignUpScreen from "./screen/SignUpScreen.js";
import { useSelector } from "react-redux";

import Header from "./components/Header";

import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import DetailsScreen from "./screen/details/DetailsScreen";
import PostDetails from "./screen/details/PostDetailsScreen";
import DocumentsScreen from "./screen/documents/DocumentsScreen";
import PostDocuments from "./screen/documents/PostDocumentsScreen";
import CareerScreen from "./screen/career/CareerScreen";
import PostCareer from "./screen/career/PostCareerScreen";
import EducationScreen from "./screen/education/EducationScreen";
import PostEducation from "./screen/education/PostEducationScreen";
import FinanceScreen from "./screen/finance/FinanceScreen";

function App() {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <BrowserRouter>
      {userInfo && <Header />}
      <div className="App">
        <Switch>
          {!userInfo && <Redirect exact from="/" to="/login" />}
          {!userInfo && <Redirect exact from="/post/details" to="/login" />}
          <Route path="/details" component={DetailsScreen} />
          <Route path="/home/post/details" component={PostDetails} />
          <Route path="/documents" component={DocumentsScreen} />
          <Route path="/home/post/documents" component={PostDocuments} />
          <Route path="/career" component={CareerScreen} />
          <Route path="/home/post/career" component={PostCareer} />
          <Route path="/education" component={EducationScreen} />
          <Route path="/home/post/education" component={PostEducation} />
          <Route path="/finance" component={FinanceScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={SignUpScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
