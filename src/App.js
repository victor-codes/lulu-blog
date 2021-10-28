import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "./styles/main.scss";

import Home from "./pages/Home";
import { Helmet } from "react-helmet";
import PageNotFound from "./pages/PageNotFound";

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
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/design">
            <Home />
          </Route>
          <Route exact path="/dev">
            <Home />
          </Route>
          <Route exact path="/writing">
            <Home />
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
