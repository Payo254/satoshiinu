import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { MoralisProvider } from "react-moralis";
ReactDOM.render(
  <MoralisProvider appId="https://yl9rozkuq7lt.usemoralis.com:2053/server" serverUrl="zeDezJRpzElpDheMFUpEkVMPnjEQZNVp2Kls5OEb">
    <App />
  </MoralisProvider>,
  document.getElementById("root"),
);
