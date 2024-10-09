import {
  Box,
  Container,
  chakra,
  SimpleGrid,
  Icon,
  Text,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import LinksyAboutIntro from "./LinksyAboutIntro";
import { Link as RouterLink, Link } from "react-router-dom";

const features = [
  {
    id: 1,
    title: "Sign Up & Login",
    text: "Authentication & Authorization with JWT",
  },
  {
    id: 2,
    title: "Dark and Light Mode",
    text: "You can find the dark/light toggle button at bottom right of this app.",
  },
  {
    id: 3,
    title: "Update Profile",
    text: "Users can update there bio, change password and profile picture.",
  },
  {
    id: 4,
    title: "Create Post",
    text: "Create your own Post either plain text or with image.",
  },
  {
    id: 5,
    title: "Delete Post",
    text: "Click on delete icon present at right side of your post.",
  },
  {
    id: 6,
    title: "Like/Unlike Post",
    text: "Used react states for preventing quick toggling.",
  },
  {
    id: 7,
    title: "Comment to a Post",
    text: "You can see top 3 comment Profile icon at left side of post.",
  },
  {
    id: 8,
    title: "Follow/Unfollow Users",
    text: "You can posts of users that you have followed.",
  },
  {
    id: 9,
    title: "Disable Account",
    text: "Users can temporarily suspend there accounts. ",
  },
  {
    id: 10,
    title: "Chat App",
    text: "Messaging appusing web sockets with text+image support.",
  },
  {
    id: 11,
    title: "Seen/Unseen Status for Messages",
    text: "Feature like whatsapp, where we can know whether message is viewed or not.",
  },
  {
    id: 12,
    title: "Suggested Accounts",
    text: "In desktop view, a suggested users box will appear in right side.",
  },
];

function AboutLinksy() {
  const linkColor = useColorModeValue("blue.600", "blue.300");
  const hoverColor = useColorModeValue("blue.800", "blue.100");
  return (
    <Box p={4}>
      <LinksyAboutIntro />
      <Container maxW={"6xl"}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"3xl"}
          py={{ base: 0, md: 5 }}
          fontWeight={"bold"}
        >
          Feature list
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.400"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
        <Box mt={5}>
          <Box
            as={RouterLink}
            to="/"
            fontSize="lg"
            fontWeight="medium"
            color={linkColor}
            position="relative"
            display="inline-flex"
            sx={{
              "&:hover": {
                color: hoverColor,
                "& .arrow": {
                  transform: "translateX(5px)",
                },
                "&::after": {
                  width: "100%",
                },
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "0",
                height: "2px",
                bottom: "-2px",
                left: "0",
                bg: "currentColor",
                transition: "all 0.3s ease",
              },
            }}
          >
            Start exploring Linksy
            <Box
              as="span"
              className="arrow"
              ml={2}
              transition="transform 0.3s ease"
              sx={{ display: "inline-block" }}
            >
              →
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default AboutLinksy;
