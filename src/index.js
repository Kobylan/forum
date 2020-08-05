import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Routes from "./routes";

import "./index.scss";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
