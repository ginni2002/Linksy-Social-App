import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { selectedConversationAtom } from "../atoms/messagesAtom";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { BsCheck2All } from "react-icons/bs";

const Message = ({ ownMessage, message }) => {
  const selectedConversation = useRecoilValue(selectedConversationAtom);
  const user = useRecoilValue(userAtom);

  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"}>
          {false && (
            <Flex bg={"green.800"} maxW={"350px"} p={1} borderRadius={"md"}>
              <Text color={"white"}>{message.text}</Text>
              <Box
                alignSelf={"flex-end"}
                ml={1}
                color={message.seen ? "blue.400" : ""}
                fontWeight={"bold"}
              >
                <BsCheck2All size={16} />
              </Box>
            </Flex>
          )}

          {true && (
            <Flex mt={5} w={"200px"}>
              <Image
                src={
                  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/156cfb475b2a74294bd2b270dfbf6f122e1793b0-1920x1080.jpg?auto=format&fit=fill&q=80&w=1184"
                }
                alt="Message image"
                borderRadius={4}
              />
            </Flex>
          )}
          <Avatar src={user.profilePic} w="7" h={7} />
        </Flex>
      ) : (
        <Flex gap={2}>
          <Avatar src={selectedConversation.userProfilePic} w="7" h={7} />
          {message.text && (
            <Text
              maxW={"350px"}
              bg={"gray.400"}
              p={1}
              borderRadius={"md"}
              color={"black"}
            >
              {message.text}
            </Text>
          )}
          {message.img && (
            <Flex mt={5} w={"200px"}>
              <Image
                src={
                  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/156cfb475b2a74294bd2b270dfbf6f122e1793b0-1920x1080.jpg?auto=format&fit=fill&q=80&w=1184"
                }
                alt="Message image"
                borderRadius={4}
              />
            </Flex>
          )}
        </Flex>
      )}
    </>
  );
};

export default Message;
