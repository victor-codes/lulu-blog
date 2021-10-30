import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "./styles/main.scss";

import Home from "./pages/Home";
import { Helmet } from "react-helmet";
import PageNotFound from "./pages/PageNotFound";
import Category from "./pages/Category";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Home - Lulu Nwenyi</title>
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          {/* <Route exact path="/home">
            <Redirect to="/home/1" />
          </Route> */}
          <Route exact path="/home">
            <Home />
          </Route>

          {/* categories */}

          <Route exact path="/design">
            <Redirect to="/design/all" />
          </Route>
          <Route exact path="/design/all">
            <Category name="Design" />
          </Route>

          <Route exact path="/dev">
            <Redirect to="/dev/all" />
          </Route>

          <Route exact path="/dev/all">
            <Category name="Dev" />
          </Route>

          <Route exact path="/writing">
            <Category name="Writing" />
          </Route>

          <Route exact path="/resources">
            <Home />
          </Route>

          <Route exact path="/sponsor">
            <Home />
          </Route>

          <Route exact path="/:category/post/:slug">
            <SinglePost />
          </Route>

          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
