import {
  Button,
  ButtonGroup,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const PaginationButtons = ({
  totalPages,
  currentPage,
  nextOnClick,
  prevOnClick,
  prevIsDisabled,
  nextIsDisabled,
  setPage,
}) => {
  function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
    return ans;
  }

  function returnRange() {
    if (totalPages <= 6) return range(1, totalPages);

    let showLeftDots = currentPage > 4;
    let showRightDots = currentPage < totalPages - 3;

    if (!showLeftDots && showRightDots) {
      let leftRange = range(1, 4);
      return [...leftRange, "...", totalPages];
    } else if (showLeftDots && !showRightDots) {
      let rightRange = range(totalPages - 3, totalPages);
      return [1, "...", ...rightRange];
    } else {
      let middleRange = range(currentPage - 2, currentPage + 2);
      return [1, "...", ...middleRange, "...", totalPages];
    }
  }

  const [inputValue, setInputValue] = useState("");

  function inputChange(ev) {
    if (ev.target.value.length <= totalPages.toString().length)
      setInputValue(ev.target.value);
  }

  function setOnEnter(ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      ev.target.blur();
      setPage(ev);
    }
  }

  return (
    <>
      <Flex justify="space-between">
        <Button
          size={{ base: "sm", md: "lg" }}
          leftIcon={<ArrowBackIcon />}
          colorScheme="yellow"
          isDisabled={prevIsDisabled}
          onClick={prevOnClick}
        >
          Previous
        </Button>
        <ButtonGroup
          display={{ base: "none", lg: "block" }}
          colorScheme="yellow"
          borderRadius="full"
          overflow="hidden"
          spacing={0}
        >
          {returnRange().map((val, idx) => (
            <Button
              key={idx}
              size={{ base: "sm", md: "lg" }}
              borderRadius={0}
              {...(val !== "..." && { onClick: setPage })}
              isActive={val === currentPage}
              isDisabled={val === "..."}
              {...(val !== "..." && { value: val })}
            >
              {val}
            </Button>
          ))}
        </ButtonGroup>
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
            onChange={inputChange}
            placeholder={currentPage}
            _placeholder={{
              fontWeight: "600",
              color: "yellow",
              opacity: "0.6",
            }}
            value={inputValue}
            maxLength={totalPages.toString().length}
            onKeyDown={setOnEnter}
            onClick={() => setInputValue("")}
            enterKeyHint="Go"
          />
          <Text color="yellow" p="0 4px">
          {`of ${totalPages}`}
          </Text>
          <Button
            borderRadius="full"
            colorScheme="yellow"
            value={inputValue}
            onClick={setPage}
          >
            Go
          </Button>
        </InputGroup>
        <Button
          size={{ base: "sm", md: "lg" }}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="yellow"
          isDisabled={nextIsDisabled}
          onClick={nextOnClick}
        >
          Next
        </Button>
      </Flex>
    </>
  );
};

export default PaginationButtons;
