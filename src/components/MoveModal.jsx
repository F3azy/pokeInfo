import React from "react";
import { capitalizeFirstLetter } from "../utils";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Grid,
  GridItem,
  Spinner,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

const MoveModal = ({ moveName, move, isOpen, onClose, loading }) => {
  return (
    <Modal
      isOpen={isOpen}
      isCentered
      onClose={onClose}
      size={{ base: "sm", lg: "xl" }}
      bg="brand.primary"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {capitalizeFirstLetter(moveName) + " - Move Stats"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {loading ? (
            <Flex w={"100%"} h={"250px"} justify={"center"} align={"center"}>
              <Spinner size={"xl"} />
            </Flex>
          ) : (
            <Grid
              color="white"
              fontSize={{ base: "16px", lg: "20px" }}
              templateRows={{ base: "repeat(4, 1fr)", lg: "repeat(3, 1fr)" }}
              templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, auto)" }}
              rowGap={{ base: 4, lg: 8 }}
              columnGap={{base: 10, lg: 2}}
              justifyContent={{base: "start",lg: "space-between"}}
            >
              <GridItem>
                <Stat>
                  <StatLabel color="brand.quaternary">Accuracy:</StatLabel>
                  <StatNumber>{move?.accuracy || "None"}</StatNumber>
                </Stat>
              </GridItem>
              <GridItem>
                <Stat>
                  <StatLabel color="brand.quaternary">Power:</StatLabel>
                  <StatNumber>{move?.power || "None"}</StatNumber>
                </Stat>
              </GridItem>
              <GridItem>
                <Stat>
                  <StatLabel color="brand.quaternary">Type:</StatLabel>
                  <StatNumber>{move?.type?.name || "None"}</StatNumber>
                </Stat>
              </GridItem>
              <GridItem>
                <Stat>
                  <StatLabel color="brand.quaternary">Effect chance:</StatLabel>
                  <StatNumber>{move?.effect_chance  || "None"}</StatNumber>
                </Stat>
              </GridItem>
              <GridItem>
                <Stat>
                  <StatLabel color="brand.quaternary">Power points:</StatLabel>
                  <StatNumber>{move?.pp || "None"}</StatNumber>
                </Stat>
              </GridItem>
              <GridItem>
                <Stat>
                  <StatLabel color="brand.quaternary">Target:</StatLabel>
                  <StatNumber>{move?.target?.name || "None"}</StatNumber>
                </Stat>
              </GridItem>
              <GridItem rowSpan={1} colSpan={{ base: 2, lg: 3 }}>
                <Stat>
                  <StatLabel color="brand.quaternary">Effect:</StatLabel>
                  <StatNumber>{move?.effect_entries ? move?.effect_entries[0].short_effect.replace("$effect_chance",move?.effect_chance)  : "None"}</StatNumber>
                </Stat>
              </GridItem>
            </Grid>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MoveModal;
