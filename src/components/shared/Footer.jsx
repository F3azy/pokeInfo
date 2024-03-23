import { Flex, Stack } from "@chakra-ui/react";
import { socialIcons } from "../../constans/Footer";
import SocialIcon from "./SocialIcon";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <Flex
      as="footer"
      w="full"
      bg="brand.primary"
      p="20px 0"
      justify="center"
      color="white"
    >
      <Flex
        w={{ base: "100%", lg: "80%", "2xl": "60%" }}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "space-between", lg: "center" }}
        gap={{ base: "24px", lg: "32px" }}
        align="center"
        mx={{ base: "8px", md: "32px", lg: "0" }}
      >
        <FooterLink
          text={`\u00A9${new Date().getFullYear()} PokeINFO, Powered by`}
          linkText="PokeAPI"
          url="https://pokeapi.co/"
        />

        <Stack direction="row" align="center" spacing="16px">
          <FooterLink
            text="Designed by"
            linkText="Francesco Carvelli"
            url="https://fcarvelli.com"
          />
          {socialIcons.map((socialIcon) => (
            <SocialIcon
              key={socialIcon.name}
              url={socialIcon.url}
              icon={socialIcon.icon}
            />
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Footer;
