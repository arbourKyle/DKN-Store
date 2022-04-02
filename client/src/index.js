import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});
ReactDOM.render(
  <Auth0Provider
    domain="dev-xnlw15h5.us.auth0.com"
    clientId="ljAacqxUfHFmCdK9jjRJCr6TMlMqGlkK"
    redirectUri={window.location.origin}
  >
    <ApolloProvider client={client} >
    <App />
  </ApolloProvider >
  </Auth0Provider>,
  
  document.getElementById("root")
);
