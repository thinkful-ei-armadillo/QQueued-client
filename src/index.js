import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoudary';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
