import { Button, Input, InputGroup, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobilePagesRange = ({ totalPages, currentPage }) => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  function inputChange(ev) {
    if (ev.target.value.length <= totalPages.toString().length)
      setInputValue(ev.target.value);
  }

  function goToPageOnEnter(ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      ev.target.blur();
      goToPage();
    }
  }

  function goToPage() {
    if (inputValue > totalPages || inputValue < 1) return;
    navigate(`/${inputValue}`);
  }

  return (
    <InputGroup
      display={{ base: "flex", lg: "none" }}
      w="auto"
      size={{ base: "sm", md: "lg" }}
      borderRadius="full"
      overflow="hidden"
      fontWeight="600"
      bg="transparent"
      alignItems="center"
    >
      <Text color="yellow" p="0 4px">
        Page
      </Text>
      <Input
        w={{ base: "44px", md: "60px" }}
        type="number"
        min={0}
        max={totalPages}
        step={1}
        color="yellow"
        fontWeight="600"
        borderColor="brand.quaternary"
        onChange={(e) => inputChange(e)}
        placeholder={currentPage}
        _placeholder={{
          fontWeight: "600",
          color: "yellow",
          opacity: "0.6",
        }}
        value={inputValue}
        maxLength={totalPages.toString().length}
        onKeyDown={(e) => goToPageOnEnter(e)}
        enterKeyHint="Go"
      />
      <Text color="yellow" p="0 4px">
        {`of ${totalPages}`}
      </Text>
      <Button
        borderRadius="full"
        colorScheme="yellow"
        onClick={() => goToPage()}
      >
        Go
      </Button>
    </InputGroup>
  );
};

export default MobilePagesRange;
