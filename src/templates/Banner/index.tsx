import LinkableCard from "components/LinkableCard";
import ScheduleCard from "components/ScheduleCard";
import styles from "./styles.module.scss";

const Banner = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            Top notch <br />
            experience
          </h2>
          <p className={styles.description}>
            Medicenter is a responsive template <br />
            perfect for all screen sizes
          </p>
        </div>
        <div className={styles.cards}>
          <LinkableCard label="Emergency Case" theme="light">
            If you need a doctor urgently outside of medicenter opening hours,
            call emergency appointment number for emergency service.
          </LinkableCard>
          <LinkableCard label="Doctors Timetable" theme="neutral">
            Here at medicenter we have individual doctor&#39;s lists. Click read
            more below to see services and current timetable for our doctors.
          </LinkableCard>
          <ScheduleCard label="Opening Hours" theme="dark">
            <li>
              <span>Monday - Thursday</span>
              <span>8.00 - 17.00</span>
            </li>
            <li>
              <span>Friday</span>
              <span>9.00 - 18.00</span>
            </li>
            <li>
              <span>Saturday</span>
              <span>9.30 - 17.30</span>
            </li>
          </ScheduleCard>
        </div>
      </div>
    </section>
  );
};

export default Banner;
