import { Button } from '@chakra-ui/react';
import React from 'react';
import { capitalizeFirstLetter } from '../../../../utils';

const Move = ({moveName, fun}) => {
    // console.log(this);

  return (
    <Button value={moveName} onClick={fun} bg="brand.tertiary" _hover={{ bg: "brand.quaternary" }} flexBasis={["48%", "12.5%"]}>{capitalizeFirstLetter(moveName)}</Button>
  )
}

export default Move;