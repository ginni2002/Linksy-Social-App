import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import useShowToast from "../hooks/useShowToast";
import { useParams } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", error, "error");
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [username, showToast]);
  if (!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size="xl" />;
      </Flex>
    );
  }
  if (!user && !loading) return <h1>User not found :(</h1>;
  return (
    <>
      <UserHeader user={user} />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="Let's talk about linklets"
      />
      <UserPost
        likes={1120}
        replies={41}
        postImg="/post2.png"
        postTitle="I can do better"
      />
      <UserPost
        likes={3200}
        replies={432}
        postImg="/post3.png"
        postTitle="Giridhari richer than him"
      />
      <UserPost
        likes={890}
        replies={367}
        postTitle="This is my first linklet, cool"
      />
    </>
  );
};

export default UserPage;
