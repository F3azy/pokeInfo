import React from 'react'
import "../styles/Header.css"

const Header = () => {
  return (
    <div className='siteHeader'>
      <header>
        <img src='images/PokeInfo.png' alt='PokeInfo Logo' width="120"/>
        <div>
            <input type="text" placeholder='Pokemon name...'/>
            <button>Search</button>
        </div>
      </header>
    </div>
  )
}

export default Header