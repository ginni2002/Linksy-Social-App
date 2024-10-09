import {
  Button,
  Flex,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { Link as RouterLink, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/authAtom";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";

const Header = () => {
  const { colorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  return (
    <Flex justifyContent={"space-between"} mt={6} mb="12">
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={24} />
        </Link>
      )}

      {!user && (
        <Button
          as={RouterLink}
          to={"/auth"}
          onClick={() => setAuthScreen("login")}
          bg={useColorModeValue("gray.300", "gray.600")}
          color={useColorModeValue("gray.800", "white")}
          _hover={{
            bg: useColorModeValue("gray.400", "gray.500"),
            transform: "translateY(-1px)",
          }}
          _active={{
            bg: useColorModeValue("gray.500", "gray.700"),
            transform: "scale(0.98)",
          }}
          size="md"
          borderRadius="md"
          boxShadow="md"
        >
          Login
        </Button>
      )}
      <Link to={`/about-Us`}>
        <Image
          cursor={"pointer"}
          alt="logo"
          w={10}
          src={
            colorMode === "dark"
              ? "/linksylogo-light.png"
              : "/linksy-darklogo.png"
          }
        />
      </Link>

      {user && (
        <Flex alignItems={"center"} gap={4}>
          <Link as={RouterLink} to={`/${user.username}`}>
            <RxAvatar size={24} />
          </Link>
          <Link as={RouterLink} to={`/chat`}>
            <BsFillChatQuoteFill size={20} />
          </Link>
          <Link as={RouterLink} to={`/settings`}>
            <MdOutlineSettings size={20} />
          </Link>
          <Button size={"xs"} onClick={logout}>
            <HiOutlineLogout size={20} />
          </Button>
        </Flex>
      )}

      {!user && (
        <Button
          as={RouterLink}
          to={"/auth"}
          onClick={() => setAuthScreen("signup")}
          bg={useColorModeValue("gray.300", "gray.600")}
          color={useColorModeValue("gray.800", "white")}
          _hover={{
            bg: useColorModeValue("gray.400", "gray.500"),
            transform: "translateY(-1px)",
          }}
          _active={{
            bg: useColorModeValue("gray.500", "gray.700"),
            transform: "scale(0.98)",
          }}
          size="md"
          borderRadius="md"
          boxShadow="md"
        >
          Sign up
        </Button>
      )}
    </Flex>
  );
};

export default Header;
