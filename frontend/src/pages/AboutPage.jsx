import {
  Box,
  Button,
  Circle,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  FaDatabase,
  FaJava,
  FaNodeJs,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiApachekafka,
  SiEjs,
  SiNextdotjs,
  SiSpring,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { MdOutlineNetworkWifi, MdSecurity, MdPayment } from "react-icons/md";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import AboutLinksy from "../components/AboutLinksy";
import AboutUsConnectSection from "../components/AboutUsConnectSection";
import AboutFooter from "../components/AboutFooter";

export default function AboutPage() {
  return (
    <Flex flexDirection={"column"} mt={{ base: "10px", md: "150px" }}>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Text
              color="blue.200"
              fontSize={{ base: "md", lg: "lg" }}
              fontFamily="mono"
              letterSpacing="0.2em"
              textTransform="uppercase"
              opacity="0.9"
              _before={{
                content: '"</"',
                color: "gray.500",
                mr: "2",
              }}
              _after={{
                content: '"/>"',
                color: "gray.500",
                ml: "2",
              }}
            >
              Hi, my name is
            </Text>

            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              mt={"-30px"}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Giridhari S. Bisht
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Full Stack Web Dev.
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.400"}>
              Experienced in building web apps using MERN, Next.js, and Spring
              Boot, with strong Java SE fundamentals in OOPs & DSA.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                How this app works?
              </Button>
              <Button rounded={"full"}>About me</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justify="center" align="center">
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"/Giri-Gfg-Hackathon-Pic.jpeg"}
            maxW={{ base: "70%", md: "50%" }}
            borderRadius="10%"
            // border="2px solid white"
          />
        </Flex>
      </Stack>
      <ArticleList />
      <CertificateShowcase />
      <AboutUsConnectSection />
      <GridListWith />
      <AboutLinksy />
      <AboutFooter />
    </Flex>
  );
}

const BlogTags = ({ marginTop = 0, tags }) => {
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => (
        <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
          {tag}
        </Tag>
      ))}
    </HStack>
  );
};

// Main ArticleList Component
const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12" mt={{ base: "20px", md: "100px" }}>
      <Heading as="h1">A Little About Me</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", md: "0" }}
          order={{ base: 1, md: 2 }}
        >
          <BlogTags tags={["Computer Science", "Web Dev", "Java Dev"]} />
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.300")}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Hi, I'm Giridhari S. Bisht, a recent B.Tech graduate in Computer
            Science and Engineering from PCET-NCER, Pune. I specialize in web
            development with a strong proficiency in Java (OOP, Collection
            Framework, Multithreading, Exception Handling, DSA).
            <br />
            <br />
            Fresher and aspiring software engineer with hands-on experience in
            web technologies. Proven track record as a hackathon finalist and
            runner-up, specializing in full-stack development. Enthusiastic
            about taking on junior developer roles to apply and expand my skill
            set.
          </Text>
        </Box>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
          order={{ base: 2, md: 1 }}
          mt={{ base: 6, md: 0 }}
        >
          <Box width="90%" zIndex="2">
            <Image
              borderRadius="lg"
              src={"/LinkedIn-p2.jpg"}
              alt="Giridhari S. Bisht"
              objectFit="cover"
              width="100%"
              height={{ base: "200px", md: "450px" }}
            />
          </Box>
        </Box>
      </Box>
      <Divider marginTop="5" />
    </Container>
  );
};

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
const techStack = [
  {
    name: "Java",
    icon: FaJava,
    description: "Main language for problem solving and backend development.",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    description: "Server-side runtime environment for scalable applications.",
  },
  {
    name: "ReactJS",
    icon: FaReact,
    description: "Used for building interactive UIs and SPAs.",
  },
  {
    name: "CSS Framework",
    icon: SiTailwindcss,
    description:
      "Modular, accessible component library like Chakra UI & Tailwind CSS.",
  },
  {
    name: "Express.js",
    icon: FaServer,
    description: "Minimal and flexible Node.js web application framework.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    description: "NoSQL database used for metadata storage.",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    description: "Framework for building Java-based microservices.",
  },
  {
    name: "Spring Security",
    icon: SiSpring,
    description: "Security framework used for securing APIs and endpoints.",
  },
  {
    name: "HTML5",
    icon: AiFillHtml5,
    description: "Markup language for structuring web content.",
  },
  {
    name: "CSS3",
    icon: DiCss3,
    description: "Style sheet language used for designing web pages.",
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
    description:
      "Versatile language used in both frontend and backend development.",
  },
  {
    name: "ORM/ODM",
    icon: FaDatabase,
    description:
      "Libraries like Mongoose (ODM) for Node.js and Spring Data MongoDB (ODM) for Spring Boot",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    description: "Relational database used for structured data storage.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description:
      "React framework for server-side rendering and static site generation.",
  },

  {
    name: "Templating Engine",
    icon: SiEjs,
    description:
      "Server-side rendering like EJS & Thymeleaf for Java based apps.",
  },

  {
    name: "Redis",
    icon: SiRedis,
    description: "In-memory store used for caching and session management.",
  },
  {
    name: "Apache Kafka",
    icon: SiApachekafka,
    description:
      "Distributed streaming platform for real-time data processing.",
  },

  {
    name: "WebSockets",
    icon: MdOutlineNetworkWifi,
    description:
      "Protocol for real-time, bi-directional communication between client and server.",
  },
  {
    name: "JWT Authentication",
    icon: MdSecurity,
    description: "Used for securing APIs and handling user authentication.",
  },
  {
    name: "Payment Gateway",
    icon: MdPayment,
    description:
      "Integrate payment gateways like Stripe or PayPal for transactions.",
  },
];
function GridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Tools & Technologies in My Arsenal
        </Heading>
        <Text color={"gray.400"} fontSize={{ base: "sm", sm: "lg" }}>
          Core technology stacks that I have used for development and
          problem-solving, along with key frameworks, libraries, and tools
          utilized in various projects for building robust, scalable
          applications and enhancing productivity.
        </Text>
      </Stack>

      <Container maxW={"7xl"} mt={12}>
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4 }}
          spacing={{ base: 4, lg: 6 }}
        >
          {techStack.map((tech) => (
            <Card
              key={tech.name}
              heading={tech.name}
              icon={
                <Icon
                  as={tech.icon}
                  w={10}
                  h={10}
                  color={useColorModeValue("gray.600", "white")}
                />
              }
              description={tech.description}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
const certificates = [
  {
    id: 1,
    title: "Solving for India Hackathon - 2023",
    image: "/gfg gc amd.jpg",
    description:
      "Finalists West Zone, Solving for India Hackathon by GeeksforGeeks, Google Cloud & AMD ",
  },
  {
    id: 2,
    title: "AFourathon Hackathon - 2023",
    image: "/Afourathon.jpg",
    description:
      "Finalist Top-8 teams, at AFourathon 3.0 by AFour Technologies ",
  },
  {
    id: 3,
    title: "BoostHacks I - 2023",
    image: "/boost hacks.jpg",
    description:
      "Got Best Project in education category in BoostHacks online Hackathon by Scilite on Devpost.",
  },
  {
    id: 4,
    title: "Smart India Hackathon - 2022",
    image: "/sih2022.png",
    description: "Finalist at Smart India Hackathon in respective Domain.",
  },
  {
    id: 5,
    title: "Atlas Madness Hackathon - 2023",
    image: "/mail Ss runnerup.jpg",
    description:
      "Runner Up at Atlas Madness by MongoDb & Google Cloud on Devpost. 'Devpost profile link provided at Connect section'",
  },
  {
    id: 6,
    title: "Sparkathon Converge - 2023",
    image: "/sparkathon.jpg",
    description: "Participated in Sparkathon Converge By Walmart.",
  },
  {
    id: 7,
    title: "Flipkart Grid 5.0",
    image: "/flipkart grid.jpg",
    description: "Participated in Flipkart Grid 5.0",
  },
];
const CertificateShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const currentCert = certificates[currentIndex];

  const buttonBg = useColorModeValue("whiteAlpha.800", "blackAlpha.500");
  const buttonHoverBg = useColorModeValue("white", "blackAlpha.600");
  const dotActiveBg = useColorModeValue("blue.500", "blue.400");
  const dotInactiveBg = useColorModeValue("gray.300", "gray.600");

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <Container maxW="2xl" py={{ base: 0, md: 8 }}>
      <Heading textAlign="center" mb={{ base: 0, md: 8 }}>
        Technical Achievements
      </Heading>
      <Box
        position="relative"
        height={{ base: "300px", md: "400px" }}
        width="100%"
      >
        <Image
          src={currentCert.image}
          alt={currentCert.title}
          objectFit="contain"
          height="100%"
          width="100%"
          cursor="pointer"
          onClick={toggleZoom}
        />
        <Button
          position="absolute"
          left={2}
          top="50%"
          transform="translateY(-50%)"
          onClick={prevSlide}
          borderRadius="full"
          bg={buttonBg}
          _hover={{ bg: buttonHoverBg }}
          boxShadow="lg"
          size="lg"
          p={2}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          position="absolute"
          right={2}
          top="50%"
          transform="translateY(-50%)"
          onClick={nextSlide}
          borderRadius="full"
          bg={buttonBg}
          _hover={{ bg: buttonHoverBg }}
          boxShadow="lg"
          size="lg"
          p={2}
        >
          <ChevronRightIcon />
        </Button>
      </Box>

      <Box
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        bg="white"
        _dark={{ bg: "gray.800" }}
      >
        <Stack spacing={4}>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="gray.900"
            _dark={{ color: "white" }}
          >
            {currentCert.title}
          </Text>
          <Text fontSize="md" color="gray.600" _dark={{ color: "gray.300" }}>
            {currentCert.description}
          </Text>
        </Stack>
      </Box>
      <HStack justify="center" spacing={2} mt={4}>
        {certificates.map((_, index) => (
          <Circle
            key={index}
            size="3"
            cursor="pointer"
            bg={index === currentIndex ? dotActiveBg : dotInactiveBg}
            onClick={() => setCurrentIndex(index)}
            transition="all 0.2s"
            _hover={{
              transform: "scale(1.2)",
            }}
          />
        ))}
      </HStack>

      <Modal isOpen={isZoomed} onClose={toggleZoom} size="full">
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" />
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            <Image
              src={currentCert.image}
              alt={currentCert.title}
              maxH="90vh"
              maxW="90vw"
              objectFit="contain"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};
