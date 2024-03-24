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
  const { moveDetails, moveName, loading } = props;

  return (
    <Modal {...props} preserveScrollBarGap isCentered size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {!loading && moveName
            ? capitalizeFirstLetter(moveName)
            : "Loading..."}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {loading && (
            <Flex w={"100%"} h={"250px"} justify={"center"} align={"center"}>
              <Spinner size={"xl"} />
            </Flex>
          )}
          {moveDetails && <MoveDetailList moveDetails={moveDetails} />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MoveModal;
