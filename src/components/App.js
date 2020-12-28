import React from "react";

import Header from "./Header";
// import TodoPrivateWrapper from "./Todo/TodoPrivateWrapper";
// import TodoPublicWrapper from "./Todo/TodoPublicWrapper";
// import OnlineUsersWrapper from "./OnlineUsers/OnlineUsersWrapper";
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';


import { useAuth0 } from "./Auth/react-auth0-spa";

const createApolloClient = (authToken) => {
 return new ApolloClient({
   link: new HttpLink({
     uri: 'http://localhost:3000/graphql',
     headers: {
       Authorization: `Bearer ${authToken}`
     }
   }),
   cache: new InMemoryCache(),
 });
};

const App = ({ idToken }) => {
  const { loading, logout } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  const client = createApolloClient(idToken);
  debugger
  return (
    <ApolloProvider client={client}>
    <div>
      <Header logoutHandler={logout} />
      <div className="row container-fluid p-left-right-0 m-left-right-0">
        <div className="row col-md-9 p-left-right-0 m-left-right-0">
          <div className="col-md-6 sliderMenu p-30">
          </div>
          <div className="col-md-6 sliderMenu p-30 bg-gray border-right">
          </div>
        </div>
        <div className="col-md-3 p-left-right-0">
          <div className="col-md-12 sliderMenu p-30 bg-gray">
          </div>
        </div>
      </div>
    </div>
    </ApolloProvider>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';
// // import Routes from './helpers/Routes'
//
// // import { useQuery } from '@apollo/react-hooks';
// // import gql from "graphql-tag";
//
// // const GET_USER_INFO = gql`
// // {
// //     allUsers {
// //       id
// //       firstName
// //
// //     }
// //   }`
// // const GET_POKEMON_INFO = gql`
// // {
// //     pokemons(first: 150) {
// //       id
// //       number
// //       name,
// //       image,
// //       evolutions {
// //         id,
// //         number,
// //         name,
// //         image
// //       }
// //     }
// //   }`
//
// function App() {
//   // const { data, loading, error } = useQuery(GET_POKEMON_INFO);
//   // const { data, loading, error } = useQuery(GET_USER_INFO);
//   // // debugger
//   // if (loading) return <p>Loading...</p>;
//   // if (error) return <p>Error</p>;
//   // debugger
//   return (
//     <div className="App">
//
//     </div>
//   );
// }
//
// export default App;
