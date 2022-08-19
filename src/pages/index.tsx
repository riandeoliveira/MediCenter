import Title from "components/Title";
import type { NextPage } from "next";
import Banner from "templates/Banner";
import Header from "templates/Header";
import Layout from "templates/Layout";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Banner />
      <Layout>
        <div>a</div>
        <div>b</div>
      </Layout>
      <Title name="Latest News" theme="dark" />
    </>
  );
};

export default Home;
