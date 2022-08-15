import type { ISchedule } from "interfaces";
import styles from "./styles.module.scss";

interface ScheduleProps extends ISchedule {}

const Schedule = ({ days, hours }: ScheduleProps): JSX.Element => {
  return (
    <li className={styles.item}>
      <span>{days}</span>
      <span>{hours}</span>
    </li>
  );
};

export default Schedule;
