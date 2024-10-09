import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function LinksyAboutIntro() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={1}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 12, md: 5 }}
      >
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}
            >
              What is Linksy?
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>
                Welcome to Linksy, a social media platform that I’ve built as
                part of my portfolio to showcase my skills in full-stack
                development. Over the years, I’ve worked on a number of diverse
                projects, including:
              </Text>
            </VStack>
            <Box>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>
                    {" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#4CAF50",
                      }}
                    >
                      Healthsquare
                    </span>{" "}
                    – A virtual health platform.
                  </ListItem>
                  <ListItem>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#4CAF50",
                      }}
                    >
                      Linksy
                    </span>{" "}
                    – A social media app (the one you’re currently exploring!).
                  </ListItem>{" "}
                  <ListItem>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#4CAF50",
                      }}
                    >
                      BookQuest
                    </span>
                    - An e-commerce platform for books with a book-lending
                    feature.
                  </ListItem>
                  <ListItem>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#4CAF50",
                      }}
                    >
                      ConnectCrew
                    </span>
                    – A messaging and calling app.
                  </ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#4CAF50",
                      }}
                    >
                      ProjectHub
                    </span>
                    - A project management tool inspired by Jira.
                  </ListItem>
                  <ListItem>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#4CAF50",
                      }}
                    >
                      PeopleSync
                    </span>
                    -A digital contact manager.
                  </ListItem>
                  <ListItem>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#4CAF50",
                      }}
                    >
                      NoteFlow
                    </span>
                    -A personal Journal application.
                  </ListItem>
                  <ListItem>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#4CAF50",
                      }}
                    >
                      LAGH Travels
                    </span>
                    - A travel booking site.
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <VStack
              spacing={{ base: 4, sm: 6 }}
              alignItems="flex-start"
              width="100%"
            >
              <Text fontSize={"lg"}>
                While I’ve developed and hosted several apps, some of them are
                currently offline due to resource constraints. However, you can
                explore my work on GitHub or check out video demos on YouTube.
                I’ll be uploading more projects soon, so stay tuned!
              </Text>
              <Text fontSize={"lg"}>
                For now, Linksy is fully operational, and I’m excited to share
                it with you as both a functional social media app and an example
                of my technical abilities. Here’s what Linksy can do (feature
                list to follow), and I encourage you to explore it by creating
                your account or even if you don't want to create any account,
                you can use the test account below:
              </Text>
              <List spacing={3} width="100%" pl={4}>
                <ListItem>
                  <Text
                    fontSize="lg"
                    bg={useColorModeValue("yellow.100", "yellow.900")}
                    px={2}
                    py={1}
                    rounded="md"
                    display="inline-block"
                  >
                    Username: johndoe
                  </Text>
                </ListItem>
                <ListItem>
                  <Text
                    fontSize="lg"
                    bg={useColorModeValue("yellow.100", "yellow.900")}
                    px={2}
                    py={1}
                    rounded="md"
                    display="inline-block"
                  >
                    Password: johndoe
                  </Text>
                </ListItem>
              </List>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
