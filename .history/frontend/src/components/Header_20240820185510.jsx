import { Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex justifyContent={"center"} mt={6} mb="12">
      <Image
        cursor={"pointer"}
        alt="logo"
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
      />
    </Flex>
  );
};

export default Header;
