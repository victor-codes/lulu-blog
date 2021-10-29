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

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Home - Lulu Nwenyi</title>
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home/1" />
          </Route>
          <Route exact path="/home">
            <Redirect to="/home/1" />
          </Route>
          <Route exact path="/home/:page">
            <Home />
          </Route>

          {/* categories */}

          <Route exact path="/category/design">
            <Redirect to="/category/design/all" />
          </Route>
          <Route exact path="/category/design/all">
            <Category name="Design" />
          </Route>

          <Route exact path="/category/dev">
            <Redirect to="/category/dev/all" />
          </Route>
          
          <Route exact path="/category/dev/all">
            <Category name="Dev" />
          </Route>

          <Route exact path="/category/writing">
            <Category name="Writing" />
          </Route>

          <Route exact path="/resources">
            <Home />
          </Route>

          <Route exact path="/sponsor">
            <Home />
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
