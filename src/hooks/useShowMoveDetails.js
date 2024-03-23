import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

const QUERY = "https://pokeapi.co/api/v2/move/";

export default function useShowMoveDetails() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [move, setMove] = useState(null);
    const [loading, setLoading] = useState(true);

    function showMoveDetails(e) {
        setLoading(true);
    
        fetch(QUERY + e.target.value.toLowerCase())
          .then((response) => response.json())
          .then((move) => {
            setLoading(false);
            setMove(move);
          });
    
        onOpen();
      }
    
      function hideMoveDetails() {
        onClose();
        setMove(null);
      }

      return {move, loading, isOpen, showMoveDetails, hideMoveDetails}
}
