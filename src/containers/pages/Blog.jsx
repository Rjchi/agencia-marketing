import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

const Blog = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        Blog
      </div>
      <Footer />
    </Layout>
  );
};

export default Blog;