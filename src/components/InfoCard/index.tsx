import type { ICard } from "interfaces";
import styles from "./styles.module.scss";

interface InfoCardProps extends Omit<ICard, "description"> {
  children: string;
}

const InfoCard = ({ theme, label, children }: InfoCardProps): JSX.Element => {
  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <div className={styles.card_container}>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.description}>{children}</p>
      </div>
    </div>
  );
};

export default InfoCard;
