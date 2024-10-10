import {
  Box,
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import useShowToast from "../hooks/useShowToast";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
import SuggestedUsers from "../components/SuggestedUsers";
import SearchUser from "../components/SearchUser";
import { FaUserPlus } from "react-icons/fa";

const HomePage = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const accentColor = useColorModeValue("teal.500", "teal.300");
  const iconColor = useColorModeValue("green.400", "green.300");
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [loading, setLoading] = useState(true);
  const showToast = useShowToast();
  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      setPosts([]);
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast, setPosts]);
  return (
    <Flex flexDirection={"column"}>
      <SearchUser />
      <Flex gap="10" alignItems={"flex-start"} mt={{ base: 5, md: 10 }}>
        <Box flex={70}>
          {!loading && posts.length === 0 && (
            <Box
              borderWidth="1px"
              borderRadius="xl"
              p={8}
              bg={bgColor}
              textAlign="center"
              boxShadow="xl"
              maxW="lg"
              mx="auto"
              borderColor={borderColor}
              transition="all 0.3s"
              _hover={{ boxShadow: "2xl", transform: "translateY(-4px)" }}
            >
              <VStack spacing={6}>
                <Heading
                  as="h1"
                  fontSize={{ base: "xl", md: "2xl" }}
                  color={headingColor}
                  fontWeight="bold"
                >
                  Follow some users to see the feed 😅
                </Heading>

                <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
                  You can start by following the author of this app.
                </Text>

                <Box
                  p={4}
                  bg={useColorModeValue("gray.50", "gray.700")}
                  borderRadius="md"
                  borderWidth="1px"
                  borderColor={borderColor}
                >
                  <Icon as={FaUserPlus} w={6} h={6} color={iconColor} mr={2} />
                  <Text
                    as="span"
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="bold"
                    color={accentColor}
                  >
                    Just search for username: "giridharisbisht" & hit follow 🥸
                  </Text>
                </Box>
              </VStack>
            </Box>
          )}
          {loading && (
            <Flex justify="center">
              <Spinner size="xl" />
            </Flex>
          )}
          {posts.map((post) => (
            <Post key={post._id} post={post} postedBy={post.postedBy} />
          ))}
        </Box>
        <Box
          flex={30}
          display={{
            base: "none",
            md: "block",
          }}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Flex>
  );
};

export default HomePage;
