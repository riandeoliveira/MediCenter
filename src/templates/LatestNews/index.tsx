import News from "components/News";
import Title from "components/Title";
import news from "./content.json";
import styles from "./styles.module.scss";

const LatestNews = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Title name="Latest News" theme="dark" />
      <div className={styles.news}>
        {news.map(({ title, content, image, date, comments }, i) => (
          <News
            title={title}
            content={content}
            image={image}
            date={date}
            comments={comments}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
