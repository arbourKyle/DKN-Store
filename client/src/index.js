import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Auth0Provider
    domain="dev-xnlw15h5.us.auth0.com"
    clientId="ljAacqxUfHFmCdK9jjRJCr6TMlMqGlkK"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
