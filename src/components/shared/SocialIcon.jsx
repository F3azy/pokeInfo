import { Icon, Link } from "@chakra-ui/react";

const SocialIcon = ({ url, icon }) => {
  return (
    <Link isExternal href={url} _hover={{ color: "brand.quaternary" }} h="24px">
      <Icon boxSize="24px" as={icon} />
    </Link>
  );
};

export default SocialIcon;
