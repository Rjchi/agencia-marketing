import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        Contact
      </div>
      <Footer />
    </Layout>
  );
};

export default Contact;