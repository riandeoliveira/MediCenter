import type { NextPage } from "next";
import Banner from "templates/Banner";
import Header from "templates/Header";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
};

export default Home;
