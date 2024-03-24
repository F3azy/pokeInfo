import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import MoveDrawer from "./MoveDrawer";
import MoveModal from "./MoveModal";

const MoveDetailDisplay = (props) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 767px)");

  const { move } = props;

  const moveName = move?.name;

  const moveDetails = move && [
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

  if (isLargerThan768)
    return (
      <MoveModal moveName={moveName} moveDetails={moveDetails} {...props} />
    );

  return (
    <MoveDrawer moveName={moveName} moveDetails={moveDetails} {...props} />
  );
};

export default MoveDetailDisplay;
