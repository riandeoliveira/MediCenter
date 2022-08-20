import type { NextPage } from "next";
import Appointments from "templates/Appointments";
import Aside from "templates/Aside";
import Banner from "templates/Banner";
import Departments from "templates/Departments";
import Footer from "templates/Footer";
import Header from "templates/Header";
import LatestNews from "templates/LatestNews";
import Layout from "templates/Layout";
import Main from "templates/Main";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Banner />
      <Layout>
        <Main>
          <LatestNews />
        </Main>
        <Aside>
          <Departments />
          <Appointments />
        </Aside>
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
