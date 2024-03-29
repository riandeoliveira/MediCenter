import Title from "components/Title";
import NewsPostList from "layouts/NewsPostList";
import styles from "./styles.module.scss";

const LatestNews = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Title theme="dark">Latest News</Title>
      <NewsPostList />
    </section>
  );
};

export default LatestNews;
