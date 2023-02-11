import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

const Careers = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        Careers
      </div>
      <Footer />
    </Layout>
  );
};

export default Careers;