import News from "components/News";
import Title from "components/Title";
import news from "./content.json";
import styles from "./styles.module.scss";

const LatestNews = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Title label="Latest News" theme="dark" />
      <div className={styles.news}>
        {news.map(({ title, content, href, image, date, comments }, i) => (
          <News
            title={title}
            content={content}
            href={href}
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
