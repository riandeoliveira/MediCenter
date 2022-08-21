import Title from "components/Title";
import { FaClipboardList, FaPhone, HiOutlineMail } from "libs/react-icons";
import Link from "next/link";

import styles from "./styles.module.scss";

const Appoitments = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Title label="Make An Appointment" theme="dark" />
      <p>
        Lorem ipsum sit amet, consectetur adipiscing elit. Ut volupat rutrum
        eros sit amet sollicitudin.
      </p>
      <ul>
        <li className={styles.item}>
          <FaPhone size={36} className={styles.icon} />
          <span>
            by phone: <strong>1-800-643-4300</strong>
          </span>
        </li>
        <li className={styles.item}>
          <HiOutlineMail size={36} className={styles.icon} />
          <span>
            by email:{" "}
            <Link href="mailto:medicenter@mail.com">
              <a>medicenter@mail.com</a>
            </Link>
          </span>
        </li>
        <li className={styles.item}>
          <FaClipboardList size={36} className={styles.icon} />
          <span>
            or{" "}
            <Link href="/">
              <a>fill in the form</a>
            </Link>{" "}
            on our contact page
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Appoitments;
