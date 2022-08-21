import Title from "components/Title";
import { FaFacebook, FaTwitter, HiOutlineMail } from "libs/react-icons";
import Link from "next/link";
import styles from "./styles.module.scss";

const MediCenterClinic = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Title label="MediCenter Clinic" theme="light" />
      <p className={styles.description}>
        Mauris adipiscing mauris fringilla turpis interdum sed pulvinar nisi
        malesuada individual.
      </p>
      <ul className={styles.contacts_container}>
        <li className={styles.contact}>Medicenter Clinic</li>
        <li className={styles.contact}>
          <span>33 Farlane Clinic</span>
          <span>+123 655 655</span>
        </li>
        <li className={styles.contact}>
          <span>Keilor East</span>
          <span>+123 755 755</span>
        </li>
        <li className={styles.contact}>
          <span>VIC 3033, Australia</span>
          <Link href="mailto:medicenter@mail.com">
            <a className={styles.mail_link}>medicenter@mail.com</a>
          </Link>
        </li>
      </ul>
      <div className={styles.social_medias}>
        <Link href="/">
          <a className={styles.social_media_link}>
            <FaFacebook size={36} className={styles.icon} />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.social_media_link}>
            <FaTwitter size={36} className={styles.icon} />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.social_media_link}>
            <HiOutlineMail size={36} className={styles.icon} />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default MediCenterClinic;
