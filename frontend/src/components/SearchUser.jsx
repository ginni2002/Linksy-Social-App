import { useState, useEffect, useRef } from "react";
import {
  Box,
  Input,
  VStack,
  Text,
  Avatar,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink, Link } from "react-router-dom";
import axios from "axios";

const SearchUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchTimeout = useRef(null);
  const { colorMode } = useColorMode();

  // Color mode values
  const bgColor = useColorModeValue("white", "gray.800");
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.800", "white");

  useEffect(() => {
    if (searchTerm.length >= 3) {
      setIsLoading(true);
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
      searchTimeout.current = setTimeout(() => {
        fetchUsers();
      }, 300);
    } else {
      setSearchResults([]);
    }
    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, [searchTerm]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`/api/users/search?q=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box position="relative" width="100%" maxWidth="400px" margin="auto">
      <Input
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        size="lg"
        borderWidth="2px"
        borderColor={borderColor}
        _hover={{ borderColor: hoverBgColor }}
        _focus={{ borderColor: "blue.500", boxShadow: "outline" }}
        bg={bgColor}
        color={textColor}
      />
      {searchTerm.length >= 3 && (
        <Box
          position="absolute"
          top="100%"
          left="0"
          right="0"
          bg={bgColor}
          boxShadow="lg"
          borderRadius="md"
          borderWidth="1px"
          borderColor={borderColor}
          maxHeight="300px"
          overflowY="auto"
          zIndex="1"
          mt="2"
        >
          {isLoading ? (
            <Text p={4} color={textColor}>
              Loading...
            </Text>
          ) : searchResults.length > 0 ? (
            <VStack align="stretch" spacing={0} p={2}>
              {searchResults.map((user) => (
                <Link key={user._id} as={RouterLink} to={`/${user.username}`}>
                  <Flex
                    key={user._id}
                    align="center"
                    p={3}
                    _hover={{ bg: hoverBgColor }}
                    borderRadius="md"
                    transition="background-color 0.2s"
                    cursor="pointer"
                  >
                    <Avatar
                      size="sm"
                      name={user.username}
                      src={user.profilePic}
                      mr={3}
                    />
                    <Text color={textColor}>{user.username}</Text>
                  </Flex>
                </Link>
              ))}
            </VStack>
          ) : (
            <Text p={4} color={textColor}>
              No users found
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default SearchUser;
