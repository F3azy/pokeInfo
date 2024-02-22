import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const Detail = ({ label, value }) => {
  return (
    <Stat>
      <StatLabel color="brand.quaternary">{label}:</StatLabel>
      <StatNumber>{value}</StatNumber>
    </Stat>
  );
};

export default Detail;
