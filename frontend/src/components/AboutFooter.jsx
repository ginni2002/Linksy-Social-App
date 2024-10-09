import { Container, Flex, Image, SimpleGrid } from "@chakra-ui/react";

const AboutFooter = () => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={1}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 6, md: 5 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={"/linksylogo.png"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", md: "400px" }}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default AboutFooter;
