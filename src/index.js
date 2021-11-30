import React, { lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Suspense } from "react";

const App = lazy(() => import("./App"));

const styles = {
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#121212",
  width: "100%",
  height: "100%",
  fontSize: "3vw",
  color: "#f2f2f2",
};

const Load = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="loading" style={styles}>
          Welcome to my Blog!
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Load>
      <App />
    </Load>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
