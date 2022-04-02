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
const PRODUCT_INFO = gql `query Product {
  products {
  
    name
   price
    units
    long_desc
    image
  }
}`

export default function ProductInfo () {
  const { loading, error, data } = useQuery(PRODUCT_INFO)
  if (loading) return <p>Please wait .... Loading products</p>;
  if (error) return <p>{error.message}</p>;

  return data.products.map(({ name, price, units, image, long_desc }) => (
    <div>
      <p>
       <h1>{name}<br></br></h1> 
      <h2>  Cost: ${price}  <br></br></h2>
                                 <h3> Qnty: {units}:<br></br></h3> 
                             <img src={image}></img><br></br>
     <h5>{long_desc}</h5>
      </p>
      <br></br><br></br><br></br><br></br>
    </div>
    
  ));
}

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
