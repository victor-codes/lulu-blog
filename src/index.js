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
          <svg
            className="App-logo"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            strokeWidth="0.75"
            stroke="#808080"
            fill="none"
            strokeLinejoin="arcs"
            strokeLinecap="square"
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <rect
                width="24"
                height="24"
                style={{ stroke: "rgba(0,0,0,0)" }}
              ></rect>
              <path
                d="M12,2 L12,6 M12,18 L12,22 M4.93,4.93 L7.76,7.76 M16.24,16.24 L19.07,19.07 M2,12 L6,12 M18,12 L22,12 M4.93,19.07 L7.76,16.24 M16.24,7.76 L19.07,4.93"
                stroke="#808080"
              ></path>
            </g>
          </svg>
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
