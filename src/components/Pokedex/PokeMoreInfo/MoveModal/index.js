import React from 'react';
import { capitalizeFirstLetter } from '../../../../utils';
import { 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Grid,
    GridItem,
    Text,
    } from '@chakra-ui/react';

const MoveModal = ({moveName, move, loading, isOpen, onClose}) => {
  if (loading) return "" ;
  else return (
    <Modal isOpen={isOpen} isCentered onClose={onClose} size={["sm", "xl"]} bg="brand.primary">
    <ModalOverlay />
        <ModalContent>
          <ModalHeader>{capitalizeFirstLetter(moveName) + " - Move Stats"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Grid color="white" fontSize={["16px", "20px"]}
            templateRows={['repeat(4, 1fr)', 'repeat(3, 1fr)']}
            templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
            rowGap={[4, 8]}
            columnGap={[8, 4]}
            >
                <GridItem><Text>Accuracy: {(move.accuracy ? move.accuracy : "None")}</Text></GridItem>
                <GridItem><Text>Power: {(move.power ? move.power : "None")}</Text></GridItem>
                <GridItem><Text>Power points: {(move.pp ? move.pp : "None")}</Text></GridItem>
                <GridItem><Text>Type: {(move.type.name ? move.type.name : "None")}</Text></GridItem>
                <GridItem><Text>Target: {(move.target.name ? move.target.name : "None")}</Text></GridItem>
                <GridItem><Text>Effect chance: {(move.effect_chance ? move.effect_chance : "None")}</Text></GridItem>
                <GridItem rowSpan={1} colSpan={[2, 3]}><Text align="justify">Effect: {((move.effect_entries[0]) ? move.effect_entries[0].short_effect.replace("$effect_chance", move.effect_chance) : "None")}</Text></GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
    </Modal> 
  )
}

export default MoveModal;