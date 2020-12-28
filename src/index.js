import ReactDOM from "react-dom";
import React from "react";
import { Route, Router } from "react-router-dom";

import "./styles/App.css";

import { Auth0Provider } from "./components/Auth/react-auth0-spa";
import history from "./utils/history";
import { AUTH_CONFIG } from "./components/Auth/auth0-variables";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const mainRoutes = (
  <Router history={history}>
    <Route
      path="/"
      render={props => (
        <Auth0Provider
          domain={AUTH_CONFIG.domain}
          client_id={AUTH_CONFIG.clientId}
          redirect_uri={AUTH_CONFIG.callbackUrl}
          onRedirectCallback={onRedirectCallback}
        />
      )}
    />
  </Router>
);

ReactDOM.render(mainRoutes, document.getElementById("root"));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // import { ApolloClient, InMemoryCache } from '@apollo/client';
// // import { gql } from '@apollo/client';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import { ApolloProvider } from '@apollo/react-hooks';
//
// const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: 'http://localhost:3000/graphql',
//   headers: {
//     Authorization: `Bearer ${authToken}`
//     // 'Content-Type': 'application/json',
//     // 'Access-Control-Allow-Origin': '*',
//     // 'Access-Control-Allow-Credentials': true,
//
//   },
//   fetch,
//   // fetchOptions: {
//   //   mode: 'no-cors',
//   // },
//   // uri: 'https://graphql-pokemon.now.sh/'
// })
//
// const client = new ApolloClient({
//   cache,
//   link
// })
//
// // const client = new ApolloClient({
// //   uri: 'https://48p1r2roz4.sse.codesandbox.io',
// //   cache: new InMemoryCache()
// // });
// //
// // client
// //   .query({
// //     query: gql`
// //       query GetRates {
// //         rates(currency: "USD") {
// //           currency
// //         }
// //       }
// //     `
// //   })
// //   .then(result => console.log(result));
//
// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );
//
// ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));
//
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
