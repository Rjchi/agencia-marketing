import { useEffect } from "react";

import AboutHeader from "components/about/AboutHeader";
import AboutTestStats from "components/about/AboutTestStats";
import AboutImages from "components/about/AboutImages";
import AboutClients from "components/about/AboutClients";
import AboutFeatures from "components/about/AboutFeatures";
import AboutTeam from "components/about/AboutTeam";

import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const img = {
    "url": null,
  }

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <AboutHeader />
        <AboutTestStats />
        <AboutImages img={img.url}/>
        <AboutClients />
        <AboutFeatures />
        <AboutTeam />
      </div>
      <Footer />
    </Layout>
  );
};

export default About;