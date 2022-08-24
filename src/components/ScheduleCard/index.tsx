import type { ICard } from "interfaces";
import styles from "./styles.module.scss";

interface ScheduleCardProps extends Omit<ICard, "description"> {
  children: JSX.Element | JSX.Element[];
}

const ScheduleCard = ({
  theme,
  label,
  children,
}: ScheduleCardProps): JSX.Element => {
  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <h3 className={styles.label}>{label}</h3>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

export default ScheduleCard;
