import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  HStack,
  Text,
  useClipboard,
  useToast,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaWhatsapp, FaEnvelope, FaCopy } from "react-icons/fa";

const ShareModal = ({ isOpen, onClose, postLink }) => {
  const { hasCopied, onCopy } = useClipboard(postLink);
  const toast = useToast();
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const iconColor = useColorModeValue("gray.600", "gray.400");

  const handleCopyLink = () => {
    onCopy();
    setIsLinkCopied(true);
    toast({
      title: "Link copied!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setTimeout(() => setIsLinkCopied(false), 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={bgColor}>
        <ModalHeader color={textColor}>Share Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Text color={textColor}>Share this post via:</Text>
            <HStack spacing={4} justify="center">
              <IconButton
                aria-label="Share on WhatsApp"
                icon={<FaWhatsapp />}
                colorScheme="green"
                onClick={() =>
                  window.open(
                    `https://wa.me/?text=${encodeURIComponent(postLink)}`,
                    "_blank"
                  )
                }
              />
              <IconButton
                aria-label="Share via Email"
                icon={<FaEnvelope />}
                colorScheme="red"
                onClick={() =>
                  window.open(
                    `mailto:?body=${encodeURIComponent(postLink)}`,
                    "_blank"
                  )
                }
              />
            </HStack>
            <HStack>
              <Text flex="1" color={textColor} isTruncated>
                {postLink}
              </Text>
              <IconButton
                aria-label="Copy link"
                icon={<FaCopy />}
                onClick={handleCopyLink}
                colorScheme={isLinkCopied ? "green" : "gray"}
              />
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ShareModal;
