import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

const About = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        About
      </div>
      <Footer />
    </Layout>
  );
};

export default About;