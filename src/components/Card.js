import React from 'react';
import "../styles/Card.css";
import PokeInfo from '../components/PokeInfo'

function Card({data,weaknesses}) {

  let obj = data.sprites.other;
             
  return (
    <div className='Card'>
        <div className='title'>{data.name}</div>
        <div className='figure'><img src={obj['official-artwork'].front_default} alt="Pokemón"></img></div>
        <PokeInfo pokeData={data} weaknesses={weaknesses}/>
    </div>
  )
}

export default Card;