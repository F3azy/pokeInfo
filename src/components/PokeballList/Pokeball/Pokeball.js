import React from 'react'
import PokeballIcon from '../../../icons/PokeballIcon';
import '../../../styles/Pokeball.css'

function Pokeball({name, size}) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

  return (
    <div className='pokeball'>
        <PokeballIcon size={size}/>
        <h2>{capitalizeFirstLetter(name)}</h2>
    </div>
  )
}

export default Pokeball