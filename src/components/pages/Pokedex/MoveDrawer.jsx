import { capitalizeFirstLetter } from "../../../utils";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import MoveDetailList from "./MoveDetailList";

const MoveDrawer = (props) => {
  const { moveDetails, moveName, loading } = props;

  return (
    <Drawer {...props} placement="bottom">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          {!loading && moveName
            ? capitalizeFirstLetter(moveName)
            : "Loading..."}
        </DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody>
          {loading && (
            <Flex w={"100%"} h={"250px"} justify={"center"} align={"center"}>
              <Spinner size={"xl"} />
            </Flex>
          )}
          {moveDetails && <MoveDetailList moveDetails={moveDetails} />}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MoveDrawer;
