import Title from "components/Title";
import PostList from "layouts/PostList";
import styles from "./styles.module.scss";

const LatestPosts = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Title label="Latest Posts" theme="light" />
      <PostList />
    </section>
  );
};

export default LatestPosts;
