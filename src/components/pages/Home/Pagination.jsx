import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Pagination = ({ totalPages, currentPage }) => {
  const navigate = useNavigate();

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
      let leftRange = range(1, 5);
      return [...leftRange, "...", totalPages];
    } else if (showLeftDots && !showRightDots) {
      let rightRange = range(totalPages - 4, totalPages);
      return [1, "...", ...rightRange];
    } else {
      let middleRange = range(currentPage - 1, currentPage + 2);
      return [1, "...", ...middleRange, "...", totalPages];
    }
  }

  function setPage(ev) {
    if (
      ev.target.value > totalPages ||
      ev.target.value < 1 ||
      isNaN(ev.target.value)
    )
      return;
    navigate(`/${ev.target.value}`);
  }

  return (
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
  );
};

export default Pagination;
