import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

const Cases = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        Cases
      </div>
      <Footer />
    </Layout>
  );
};

export default Cases;