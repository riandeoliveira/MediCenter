import Image from "next/image";
import styles from "./styles.module.scss";

interface NewsProps {
  date: string;
  comments: number;
  image: string;
  title: string;
  content: string;
}

const News = ({
  date,
  comments,
  image,
  title,
  content,
}: NewsProps): JSX.Element => {
  return (
    <article className={styles.article}>
      <div className={styles.heading}>
        <span className={styles.date}>{date}</span>
        <span className={styles.comments}>{comments}</span>
      </div>
      <Image
        src={`/assets/images/${image}.jpg`}
        alt="Latest news image post"
        width={380}
        height={285}
      />
      <span className={styles.title}>{title}</span>
      <p className={styles.content}>{content}</p>
    </article>
  );
};

export default News;
