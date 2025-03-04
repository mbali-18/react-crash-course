import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Mbali" body="React.js is awesome!!" />
        <Post author="Mbuso" body="Check out the full course" />
      </ul>
    </>
  );
}

export default PostList;
