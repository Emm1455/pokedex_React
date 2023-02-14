import "./App.css";
import Card from "./components/Card";
import {useEffect, useState} from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function App() {

  const pokeApiUri = `https://pokeapi.co/api/v2/pokemon/`;  
  
  const [currentID,SetCurrentID] = useState(1);
  const [pokemon,SetPokemon] = useState({});
  const [isLoading,SetIsLoading] = useState(false);
  const [weaknesses, SetWeaknesses] = useState([]);

  const GetDamage = function (data){
    let result = [];
    // const doubleDamageData = data.damage_relations.double_damage_from;
    data.forEach(item => {
      result.push(item.name);
    });
    return result;
  }

  const FilterWeaknesses = function (doubleDamage,halfDamage){
    let result = [];
    doubleDamage.forEach(item => {
      if(!halfDamage.includes(item)){
        result.push(item);
      }
    });
    return result;    
  }

  const GetWeaknesses = function (data) {
    let doubleDamage = [];
    let halfDamage = [];
    let result = [];
    // let weaknesses = [];
    data.forEach(item => {
      fetch(item.type.url)
      .then(response => response.json())
      .then(typeData =>{
        doubleDamage = [...doubleDamage,...GetDamage(typeData.damage_relations.double_damage_from)];
        halfDamage = [...halfDamage,...GetDamage(typeData.damage_relations.half_damage_from)];
        result = FilterWeaknesses(doubleDamage,halfDamage);
        // console.log(result);
        SetWeaknesses(result);
      })
    });
  }

  useEffect(()=>{
    SetIsLoading(false);
    fetch(`${pokeApiUri}${currentID}`)
    .then(response => response.json())
    .then(pokemonData =>{
      SetCurrentID(pokemonData.id);
      SetPokemon(pokemonData);
      GetWeaknesses(pokemonData.types);
      // console.log(weaknesses);
      SetIsLoading(true);
    })
  }, [currentID]);

  return (
    <div className="App">
      {
        isLoading ? (<>
          <div><FaArrowLeft/></div>            
          <Card data={pokemon} weaknesses={weaknesses}/>      
          <div><FaArrowRight/></div>        
        </>
        ) : (<></>)
      }
      
    </div>
  );
}

export default App;
