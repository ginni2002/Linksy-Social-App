import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Avatar,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { Link as RouterLink, Link } from "react-router-dom";

const Following = ({ userId, followingCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [following, setFollowing] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");

  const onOpen = async () => {
    setIsOpen(true);
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/users/${userId}/following`);
      setFollowing(response.data);
    } catch (error) {
      console.error("Error fetching following:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={onOpen}>{followingCount} Following</Button>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent bg={bgColor}>
          <ModalHeader color={textColor}>Following</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading ? (
              <Text color={textColor}>Loading...</Text>
            ) : (
              <VStack spacing={4} align="stretch">
                {following.map((user) => (
                  <Link as={RouterLink} to={`/${user.username}`}>
                    <Flex
                      key={user._id}
                      align="center"
                      p={2}
                      _hover={{ bg: hoverBgColor }}
                      borderRadius="md"
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
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Following;
