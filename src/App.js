import logo from './logo.svg';
import './App.css';

import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_USER_INFO = gql`
{
    allUsers {
      id
      firstName
      
    }
  }`
// const GET_POKEMON_INFO = gql`
// {
//     pokemons(first: 150) {
//       id
//       number
//       name,
//       image,
//       evolutions {
//         id,
//         number,
//         name,
//         image
//       }
//     }
//   }`

function App() {
  // const { data, loading, error } = useQuery(GET_POKEMON_INFO);
  const { data, loading, error } = useQuery(GET_USER_INFO);
  // debugger
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  // debugger
  return (
    <div className="App">

    </div>
  );
}

export default App;
