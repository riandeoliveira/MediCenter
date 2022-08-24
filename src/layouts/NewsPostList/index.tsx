import NewsPost from "components/NewsPost";
import newsPosts from "./content.json";
import styles from "./styles.module.scss";

const NewsPostList = (): JSX.Element => {
  return (
    <div className={styles.news_posts}>
      {newsPosts.map(({ ...data }, i) => (
        <NewsPost {...data} key={i} />
      ))}
    </div>
  );
};

export default NewsPostList;
