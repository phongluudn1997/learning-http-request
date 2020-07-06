import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common.Authorization = "AUTH TOKEN";

axios.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
