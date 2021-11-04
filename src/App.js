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
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Home - Lulu Nwenyi</title>
      </Helmet>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home/all" />
          </Route>
          <Route exact path="/home">
            <Redirect to="/home/all" />
          </Route>

          <Route exact path="/home/:subcategory">
            <Home />
          </Route>

          {/* categories */}

          <Route exact path="/design">
            <Redirect to="/design/all" />
          </Route>
          <Route exact path="/design/:subcategory">
            <Category name="Design" />
          </Route>

          <Route exact path="/dev">
            <Redirect to="/dev/all" />
          </Route>

          <Route exact path="/dev/:subcategory">
            <Category name="Dev" />
          </Route>
          <Route exact path="/cloud">
            <Redirect to="/cloud/all" />
          </Route>

          <Route exact path="/cloud/:subcategory">
            <Category name="DevOps" />
          </Route>

          <Route exact path="/writing">
            <Redirect to="/writing/all" />
          </Route>
          <Route exact path="/writing/:subcategory">
            <Category name="Writing" />
          </Route>

          <Route exact path="/resources">
            <Home />
          </Route>

          <Route exact path="/sponsor">
            <Home />
          </Route>

          <Route exact strict path="/:category/post/:slug">
            <SinglePost />
          </Route>

          <Route exact path="*">
            <PageNotFound />
          </Route>
          <Route exact path="/404">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
