import "./App.css";
import Card from "./components/Card";
import {useEffect, useState} from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function App() {

  

  const pokeApiUri = `https://pokeapi.co/api/v2/pokemon/`;
  
  const [currentID,SetCurrentID] = useState(1);
  const [pokemon,SetPokemon] = useState({});

  useEffect(()=>{
    fetch(`${pokeApiUri}${currentID}`)
    .then(response => response.json())
    .then(pokemonData =>{
      console.log(pokemonData);
      SetCurrentID(pokemonData.id);
      SetPokemon(pokemonData);
    })
  }, [currentID]);

  return (
    <div className="App">
      <div><FaArrowLeft/></div>
      <Card data={pokemon}/>
      <div><FaArrowRight/></div>
    </div>
  );
}

export default App;
