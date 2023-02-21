import React from "react";
import { useEffect, useState } from "react";

function UseGetData(initialID) {
  const pokemonUri = `https://pokeapi.co/api/v2/pokemon/`;
  const [currentID, SetCurrentID] = useState(initialID);
  const [pokemon, SetPokemon] = useState({});
  const [isLoading, SetIsLoading] = useState(false);
  const [weaknesses, SetWeaknesses] = useState([]);
  const [info,SetInfo] = useState('');

  const limitMaker = function (limit,type){
    if(!type){ // false for lower limit
      if(currentID > limit){
        SetCurrentID(currentID-1);
      }
    }
    else{
      if(currentID <= limit){
        SetCurrentID(currentID+1);
      }
    }
  }

  useEffect(() => {
    SetIsLoading(false);
    fetch(`${pokemonUri}${currentID}`)
      .then((response) => response.json() )
      .then((pokemonData) => {
        // SetCurrentID(pokemonData.id); PARECE NO SER NECESARIO
        SetPokemon(pokemonData);
        GetWeaknesses(pokemonData.types);
        GetInfo(pokemonData.species.url);
        SetIsLoading(true);
      });
  }, [currentID]);

  const GetInfo= function(data){
    fetch(data)
    .then(response => response.json())
    .then(specie => specie.flavor_text_entries)
    .then(entries => {
      const version = CheckVersion(entries);
      console.log(version);
      const result = entries.filter(entry => entry.language.name == 'en' && entry.version.name == version)[0];
      SetInfo(result.flavor_text);
    });
  }

  const CheckVersion = function(data) {
    const versions = data.map(item => item.version.name);
    let result;
    versions.includes('sword')? result = 'sword' : result = 'lets-go-pikachu';
    return result;
  }

  const GetWeaknesses = function (data) {
    let doubleDamage = [];
    let halfDamage = [];
    let result = [];
    data.forEach((item) => {
      fetch(item.type.url)
      .then((response) => response.json())
      .then((typeData) => {
        doubleDamage = [
          ...doubleDamage,
          ...GetDamage(typeData.damage_relations.double_damage_from),
          ];
          halfDamage = [
            ...halfDamage,
            ...GetDamage(typeData.damage_relations.half_damage_from),
          ];
          result = FilterWeaknesses(doubleDamage, halfDamage);
          SetWeaknesses(result);
        });
      });
    };
    
    const GetDamage = function (data) {
      let result = [];
      data.forEach((item) => {
        result.push(item.name);
      });
      return result;
    };
  
    const FilterWeaknesses = function (doubleDamage, halfDamage) {
      let result = [];
      doubleDamage.forEach((item) => {
        if (!halfDamage.includes(item)) {
          result.push(item);
        }
      });
      return result;
    };
  
  return [pokemon, weaknesses ,isLoading, info ,limitMaker];
}

export default UseGetData;
