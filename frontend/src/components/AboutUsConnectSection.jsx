import {
  Box,
  Heading,
  HStack,
  Link,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaCode, FaYoutube } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { HiOutlineDocumentDownload } from "react-icons/hi";

function AboutUsConnectSection() {
  const iconColor = useColorModeValue("gray.600", "gray.300");
  const iconHoverColor = useColorModeValue("blue.500", "blue.300");
  const resumeBgColor = useColorModeValue("blue.50", "whiteAlpha.100");
  const resumeHoverBgColor = useColorModeValue("blue.100", "whiteAlpha.200");

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/giridharisbisht/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      url: "https://github.com/ginni2002",
      label: "GitHub",
    },
    {
      icon: FaCode,
      url: "https://leetcode.com/u/grsb2002/",
      label: "LeetCode",
    },
    {
      icon: SiDevpost,
      url: "https://devpost.com/grsb2002",
      label: "Devpost",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/@TeamMirage-cl4su",
      label: "Youtube",
    },
    {
      icon: MdEmail,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=grsb2002@gmail.com&su=Hello!&body=Hi,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
      label: "Email",
    },
  ];

  return (
    <VStack spacing={8} alignItems="center" w="full" py={10}>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        textAlign="center"
        position="relative"
        _after={{
          content: '""',
          width: "60px",
          height: "2px",
          position: "absolute",
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          bg: "blue.500",
        }}
      >
        Connect With Me
      </Heading>

      <HStack
        spacing={{ base: 3, md: 5 }}
        pt={6}
        flexWrap="wrap"
        justifyContent="center"
      >
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.url}
            isExternal
            aria-label={social.label}
            m={1}
          >
            <Box
              as={social.icon}
              w={{ base: 6, md: 7 }}
              h={{ base: 6, md: 7 }}
              color={iconColor}
              transition="all 0.3s ease"
              _hover={{
                color: iconHoverColor,
                transform: "translateY(-2px)",
              }}
            />
          </Link>
        ))}
      </HStack>

      <Link
        href="https://docs.google.com/document/d/1ngUsOgmphq1HOw-Ez20YzWoAbOlq48mmTc7s9ctWLnw/edit?usp=sharing"
        isExternal
        px={6}
        py={3}
        mt={4}
        rounded="full"
        display="flex"
        alignItems="center"
        fontSize="md"
        fontWeight="medium"
        bg={resumeBgColor}
        color={iconHoverColor}
        transition="all 0.3s ease"
        _hover={{
          bg: resumeHoverBgColor,
          transform: "translateY(-2px)",
        }}
      >
        <HiOutlineDocumentDownload size={20} />
        <Box as="span" ml={2}>
          View My Resume
        </Box>
      </Link>
    </VStack>
  );
}
export default AboutUsConnectSection;
