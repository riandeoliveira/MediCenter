import Title from "components/Title";
import TweetPostList from "layouts/TweetPostList";
import styles from "./styles.module.scss";

const LatestTweets = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Title label="Latest Tweets" theme="light" />
      <TweetPostList />
    </section>
  );
};

export default LatestTweets;
