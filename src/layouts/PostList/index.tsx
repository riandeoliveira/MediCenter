import Post from "components/Post";
import posts from "./content.json";
import styles from "./styles.module.scss";

const PostList = (): JSX.Element => {
  return (
    <div className={styles.posts}>
      {posts.map(({ content, date, origin }, i) => (
        <Post content={content} date={date} origin={origin} key={i} />
      ))}
    </div>
  );
};

export default PostList;
