import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
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
