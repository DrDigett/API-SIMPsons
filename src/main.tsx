import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { Layout } from "./components/layout/layout";
import logo from "./assets/react.svg";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <link rel="icon" type="image/svg+xml" href={logo} />
    <Layout>
      <App/>
    </Layout>  
  </React.StrictMode>
);
