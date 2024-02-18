import { Button, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import PagesRange from "./PagesRange";
import MobilePagesRange from "./MobilePagesRange";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PaginationButtons = ({ totalPages, currentPage }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (totalPages !== 0 && (currentPage < 1 || currentPage > totalPages))
      navigate("/", { replace: true });
  }, [totalPages, currentPage, navigate]);

  function next() {
    if (currentPage >= totalPages) return;
    navigate(`/${currentPage + 1}`);
  }

  function prev() {
    if (currentPage <= 1) return;
    else navigate(`/${currentPage - 1}`);
  }

  return (
    <>
      <Flex justify="space-between">
        <Button
          size={{ base: "sm", md: "lg" }}
          leftIcon={<ArrowBackIcon />}
          colorScheme="yellow"
          isDisabled={currentPage <= 1}
          onClick={prev}
        >
          Previous
        </Button>
        <PagesRange totalPages={totalPages} currentPage={currentPage} />
        <MobilePagesRange totalPages={totalPages} currentPage={currentPage} />
        <Button
          size={{ base: "sm", md: "lg" }}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="yellow"
          isDisabled={currentPage >= totalPages}
          onClick={next}
        >
          Next
        </Button>
      </Flex>
    </>
  );
};

export default PaginationButtons;
