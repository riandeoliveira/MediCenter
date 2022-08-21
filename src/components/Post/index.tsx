import type { IFooterPost } from "interfaces";
import Link from "next/link";
import styles from "./styles.module.scss";

interface PostProps extends IFooterPost {}

const Post = ({ content, origin, date }: PostProps): JSX.Element => {
  return (
    <div className={styles.post}>
      <p className={styles.content}>{content}</p>
      <Link href={origin}>
        <a className={styles.date}>{date}</a>
      </Link>
    </div>
  );
};

export default Post;
