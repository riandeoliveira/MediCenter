import type { ICard } from "interfaces";
import Link from "next/link";
import styles from "./styles.module.scss";

interface LinkableCardProps extends Omit<ICard, "description"> {
  children: string;
}

const LinkableCard = ({
  theme,
  label,
  children,
}: LinkableCardProps): JSX.Element => {
  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <div className={styles.card_container}>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.description}>{children}</p>
      </div>
      <Link href="/">
        <a className={styles.link}>READ MORE</a>
      </Link>
    </div>
  );
};

export default LinkableCard;
