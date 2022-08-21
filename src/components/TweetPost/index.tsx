import type { IFooterPost } from "interfaces";
import Link from "next/link";
import styles from "./styles.module.scss";

interface TweetPostProps extends IFooterPost {}

const TweetPost = ({ content, origin, date }: TweetPostProps): JSX.Element => {
  return (
    <div className={styles.tweet}>
      <p className={styles.content}>
        {content}
        <Link href={origin}>
          <a className={styles.origin}>{origin}</a>
        </Link>
      </p>
      <Link href={origin}>
        <a className={styles.date}>{date}</a>
      </Link>
    </div>
  );
};

export default TweetPost;
