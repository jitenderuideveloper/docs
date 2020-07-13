import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store/index";
//import { addArticle } from "./actions/index";
import App from "./components/App";

//window.store = store;
//window.addArticle = addArticle;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
