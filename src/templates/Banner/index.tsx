import BannerItem from "components/BannerItem";
import bannerItems from "./content";
import styles from "./styles.module.scss";

const Banner = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            Top notch <br /> experience
          </h2>
          <p className={styles.description}>
            Medicenter is a responsive template <br /> perfect for all screen
            sizes
          </p>
        </div>
        <div className={styles.banner_items}>
          {bannerItems.map(({ type, title, content, schedules }, i) => (
            <BannerItem
              id={i}
              type={type}
              title={title}
              content={content}
              schedules={schedules}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
