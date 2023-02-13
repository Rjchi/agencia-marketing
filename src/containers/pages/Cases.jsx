import { useEffect } from "react";

import CasesHeader from "components/cases/CasesHeader";
import CasesList from "components/cases/CasesList";
import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

const Cases = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <CasesHeader />
        <CasesList />
      </div>
      <Footer />
    </Layout>
  );
};

export default Cases;
