import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      position="fixed"
      bottom={10}
      left={5}
      onClick={toggleColorMode}
      bg={useColorModeValue("gray.300", "gray.600")}
      color={useColorModeValue("gray.800", "white")}
      _hover={{
        bg: useColorModeValue("gray.300", "gray.600"),
      }}
      _active={{
        transform: "scale(0.95)",
      }}
      size="sm"
      borderRadius="full"
      p={5}
    >
      {colorMode === "light" ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

export default ColorModeToggleButton;
