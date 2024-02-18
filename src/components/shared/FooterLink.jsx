import { Link, Text } from "@chakra-ui/react";

const FooterLink = ({text, linkText, url}) => {
  return (
    <Text fontSize="20px">
      {text}&nbsp;
      <Link
        isExternal
        href={url}
        _hover={{ color: "brand.quaternary" }}
        textDecoration="underline"
      >
        {linkText}
      </Link>
    </Text>
  );
};

export default FooterLink;
