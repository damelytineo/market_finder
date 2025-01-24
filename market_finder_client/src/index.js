import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import "./output.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import client from './apolloClient'
import store from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);
