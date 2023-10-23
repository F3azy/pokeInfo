import React from 'react';
import { Icon } from '@chakra-ui/react';

const BGPokeball = ({size}) => {
  return (
    <Icon width={size} height={size} position="absolute" transform="rotate(45deg);" viewBox="0 0 501 502" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M250.501 492C383.325 492 491 384.101 491 251C491 117.899 383.325 10 250.501 10C117.677 10 10.002 117.899 10.002 251C10.002 384.101 117.677 492 250.501 492Z" fill="#F2F2F2" stroke="#C7C7C7" strokeWidth="20"/>
        <path d="M489.998 235.938H9V266.063H489.998V235.938Z" fill="#C7C7C7"/>
        <path d="M250.501 314.221C285.376 314.221 313.611 285.896 313.611 251C313.611 216.104 285.376 187.779 250.501 187.779C215.627 187.779 187.391 216.104 187.391 251C187.391 285.896 215.627 314.221 250.501 314.221Z" fill="#F2F2F2" stroke="black" strokeWidth="20"/>
        <path d="M250.501 314.221C285.376 314.221 313.611 285.896 313.611 251C313.611 216.104 285.376 187.779 250.501 187.779C215.627 187.779 187.391 216.104 187.391 251C187.391 285.896 215.627 314.221 250.501 314.221Z" stroke="#C7C7C7" strokeWidth="20"/>
    </Icon>
  )
};

export default BGPokeball;