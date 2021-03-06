import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import reportWebVitals from "./tests/reportWebVitals";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// 2. declare your configuration, these are the defaults
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// 3. extend the theme
const customTheme = extendTheme({ config });
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
