import Schedule from "components/Schedule";
import type { IBannerItem } from "interfaces";
import Link from "next/link";
import styles from "./styles.module.scss";

interface BannerItemProps extends IBannerItem {
  id: number;
}

const BannerItem = ({
  id,
  type,
  title,
  content,
  schedules,
}: BannerItemProps): JSX.Element => {
  return (
    <div className={`${styles.container} ${styles[`item_${id}`]}`}>
      <div className={styles.content_container}>
        <h3 className={styles.title}>{title}</h3>
        {type !== "schedule" && <p className={styles.content}>{content}</p>}
      </div>
      {type === "summary" && (
        <Link href="/">
          <a className={styles.link}>READ MORE</a>
        </Link>
      )}
      {type === "schedule" && (
        <ul className={styles.list}>
          {schedules?.map(({ days, hours }, i) => (
            <Schedule days={days} hours={hours} key={i} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BannerItem;
