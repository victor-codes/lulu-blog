import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "./styles/main.scss";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Category from "./pages/Category";
import SinglePost from "./pages/SinglePost";
import Header from "./components/Header";
import Resources from "./pages/Resources";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} key={0} />
          <Route exact path="/blog/1">
            <Redirect to="/" />
          </Route>
          <Route exact path="/blog/:page" component={Home} />
          {/* categories */}
          <Route exact path="/design">
            <Redirect to="/design/all" />
          </Route>
          <Route exact path="/design/:subcategory" key={1}>
            <Category name="Design" />
          </Route>
          <Route exact path="/dev">
            <Redirect to="/dev/all" />
          </Route>
          <Route exact path="/dev/:subcategory">
            <Category name="Dev" />
          </Route>
          <Route exact path="/devops">
            <Redirect to="/devops/all" />
          </Route>
          <Route exact path="/devops/devops">
            <Redirect to="/devops/all" />
          </Route>
          <Route exact path="/devops/:subcategory">
            <Category name="DevOps" />
          </Route>
          <Route exact path="/psych">
            <Redirect to="/psych/all" />
          </Route>
          <Route exact path="/psych/:subcategory">
            <Category name="Psych" />
          </Route>
          <Route exact path="/resources">
            <Redirect to="/resources/all" />
          </Route>
          <Route exact path="/resources/:subcategory">
            <Resources />
          </Route>
          <Route
            exact
            strict
            path="/:category/post/:slug"
            component={SinglePost}
          />
          <Route exact path="*" component={PageNotFound} />
          <Route exact path="/404" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
