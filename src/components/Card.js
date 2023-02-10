import React from 'react';
import "../styles/Card.css";
import PokeInfo from '../components/PokeInfo'

function Card({data}) {
  return (
    <div className='Card'>
        <div className='title'>{data.name}</div>
        <div><img src="null" alt="Pokemón"></img></div>
        <PokeInfo pokeData={data}/>
    </div>
  )
}

export default Card;