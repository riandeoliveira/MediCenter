import InfoCardList from "layouts/InfoCardList";
import LatestPosts from "templates/LatestPosts";
import LatestTweets from "templates/LatestTweets";
import MediCenterClinic from "templates/MediCenterClinic";
import styles from "./styles.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <InfoCardList />
        <div className={styles.container}>
          <MediCenterClinic />
          <LatestPosts />
          <LatestTweets />
        </div>
        <div className={styles.copyright_container}>
          <span className={styles.copyright}>Copyright © 2022. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
