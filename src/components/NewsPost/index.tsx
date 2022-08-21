import type { INewsPost } from "interfaces";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface NewsPostProps extends INewsPost {}

const NewsPost = ({
  href,
  date,
  comments,
  image,
  title,
  content,
}: NewsPostProps): JSX.Element => {
  return (
    <article>
      <Link href={href}>
        <a className={styles.link}>
          <div className={styles.heading}>
            <span className={styles.date}>{date}</span>
            <span className={styles.comments}>{comments}</span>
          </div>
          <Image
            src={`/assets/images/${image}.jpg`}
            alt="Latest news image post"
            width={380}
            height={285}
            objectFit="cover"
            className={styles.image}
          />
          <span className={styles.title}>{title}</span>
          <p className={styles.content}>{content}</p>
        </a>
      </Link>
    </article>
  );
};

export default NewsPost;
