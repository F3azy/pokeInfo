import { capitalizeFirstLetter } from "../../../utils";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import MoveDetailList from "./MoveDetailList";

const MoveModal = (props) => {
  const { move, loading } = props;

  const moveDetails = [
    {
      label: "Accuracy",
      value: move?.accuracy || "None",
    },
    {
      label: "Power",
      value: move?.power || "None",
    },
    {
      label: "Type",
      value: move?.type?.name || "None",
    },
    {
      label: "Effect chance",
      value: move?.effect_chance || "None",
    },
    {
      label: "Power points",
      value: move?.pp || "None",
    },
    {
      label: "Target",
      value: move?.target?.name || "None",
    },
    {
      label: "Effect",
      value:
        move?.effect_entries[0]?.short_effect.replace(
          "$effect_chance",
          move?.effect_chance
        ) || "None",
    },
  ];

  return (
    <Modal
      {...props}
      isCentered
      size={{ base: "sm", lg: "xl" }}
      bg="brand.primary"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {move?.name
            ? capitalizeFirstLetter(move.name) + " - Move Stats"
            : "Loading..."}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {loading && (
            <Flex w={"100%"} h={"250px"} justify={"center"} align={"center"}>
              <Spinner size={"xl"} />
            </Flex>
          )}
          {move && <MoveDetailList moveDetails={moveDetails} />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MoveModal;
