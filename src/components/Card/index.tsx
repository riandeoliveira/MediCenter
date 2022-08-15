import Schedule from "components/Schedule";
import type { ICard } from "interfaces";
import Link from "next/link";
import styles from "./styles.module.scss";

interface CardProps extends ICard {
  id: number;
}

const Card = ({
  id,
  type,
  title,
  content,
  schedules,
}: CardProps): JSX.Element => {
  return (
    <div className={`${styles.card} ${styles[`card_${id}`]}`}>
      <div className={styles.card_container}>
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

export default Card;
