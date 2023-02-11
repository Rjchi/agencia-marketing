import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

const Services = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        Services
      </div>
      <Footer />
    </Layout>
  );
};

export default Services;