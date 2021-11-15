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
import CategoryProvider from "./context/Category";
import Meta from "./components/Meta";

function App() {
  return (
    <div className="App">
      <Meta />
      <Router>
        <CategoryProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} key={0} />

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
              <Category name="Dev" key={2} />
            </Route>

            <Route exact path="/cloud">
              <Redirect to="/cloud/all" />
            </Route>

            <Route exact path="/cloud/devops">
              <Redirect to="/cloud/all" />
            </Route>

            <Route exact path="/cloud/:subcategory">
              <Category name="DevOps" key={3} />
            </Route>

            <Route exact path="/psych">
              <Redirect to="/psych/all" />
            </Route>
            <Route exact path="/psych/:subcategory">
              <Category name="Psych" key={4} />
            </Route>

            <Route exact path="/resources">
              <Redirect to="/resources/all" />
            </Route>
            <Route exact path="/resources/:subcategory" key={5}>
              <Category name="Resources" />
            </Route>
            <Route exact path="/sponsor" key={6} />

            <Route
              exact
              strict
              path="/:category/post/:slug"
              component={SinglePost}
              key={7}
            />

            <Route exact path="*" component={PageNotFound} key={8} />
            <Route exact path="/404" component={PageNotFound} key={9} />
          </Switch>
        </CategoryProvider>
      </Router>
    </div>
  );
}

export default App;
