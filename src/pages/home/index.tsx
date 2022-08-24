import type { NextPage } from "next";
import Appointments from "templates/Appointments";
import Banner from "templates/Banner";
import Departments from "templates/Departments";
import Footer from "templates/Footer";
import Header from "templates/Header";
import LatestNews from "templates/LatestNews";
import styles from "./styles.module.scss";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Banner />
      <div className={styles.layout}>
        <div className={styles.layout_container}>
          <main className={styles.main}>
            <LatestNews />
          </main>
          <aside className={styles.aside}>
            <Departments />
            <Appointments />
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
