import TweetPost from "components/TweetPost";
import tweetPosts from "./content.json";
import styles from "./styles.module.scss";

const TweetPostList = (): JSX.Element => {
  return (
    <div className={styles.tweet_posts}>
      {tweetPosts.map(({ content, date, origin }, i) => (
        <TweetPost content={content} date={date} origin={origin} key={i} />
      ))}
    </div>
  );
};

export default TweetPostList;
