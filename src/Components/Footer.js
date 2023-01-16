import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className='siteFooter'>
      <footer>
        <ul>
            <li>Copyright © {new Date().getFullYear()} </li>
            <li>PokeInfo | Design by Francesco Carvelli</li>
            <li>Powered by <a target="_blank" href='https://reactjs.org/'>React</a> and <a target="_blank" href='https://pokeapi.co/'>PokeAPI</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer