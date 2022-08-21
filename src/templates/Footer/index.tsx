import InfoCardList from "layouts/InfoCardList";
import styles from "./styles.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <InfoCardList />
      </div>
    </footer>
  );
};

export default Footer;
