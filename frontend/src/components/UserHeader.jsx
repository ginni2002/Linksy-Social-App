import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink, Link } from "react-router-dom";

import { CgMoreO } from "react-icons/cg";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import useFollowUnFollow from "../hooks/useFollowUnFollow";
import Followers from "./Followers";
import Following from "./Following";

const UserHeader = ({ user }) => {
  //getting props from parent component

  const toast = useToast();
  const currentUser = useRecoilValue(userAtom); // logged in user

  const { handleFollowUnfollow, following, updating } = useFollowUnFollow(user);

  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      //   console.log("URL copied to clipboard");
      toast({
        title: "Success",
        status: "success",
        description: "Profile link copied. ",
        duration: 3000,
        isClosable: true,
      });
    });
  };

  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {user.name}
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>@{user.username}</Text>
          </Flex>
        </Box>
        <Box>
          {user.profilePic && (
            <Avatar
              name={user.username}
              src={user.profilePic}
              size={{
                base: "md",
                md: "xl",
              }}
            />
          )}
          {!user.profilePic && (
            <Avatar
              name={user.username}
              src=""
              size={{
                base: "md",
                md: "xl",
              }}
            />
          )}
        </Box>
      </Flex>
      <Text>{user.bio}</Text>

      {currentUser?._id === user._id && (
        <Link as={RouterLink} to="/update">
          <Button size={"sm"}>Update Profile</Button>
        </Link>
      )}
      {/* Follow/unfollow user */}
      {currentUser?._id !== user._id && (
        <Button size={"sm"} onClick={handleFollowUnfollow} isLoading={updating}>
          {following ? "Unfollow" : "Follow"}
        </Button>
      )}

      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Followers userId={user._id} followerCount={user.followers.length} />
          <Following userId={user._id} followingCount={user.following.length} />
        </Flex>
        <Flex>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem bg={"gray.dark"} onClick={copyURL}>
                    Copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Flex w={"full"}>
        <Flex
          flex={1}
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Your Posts</Text>
        </Flex>
        {/* <Flex
          flex={1}
          borderBottom={"1px solid gray"}
          justifyContent={"center"}
          color={"gray.light"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex> */}
      </Flex>
    </VStack>
  );
};

export default UserHeader;
