import { useEffect } from "react";

import CareersHeader from "components/careers/CareersHeader";
import CareersTestimonial from "components/careers/CareersTestimonial";
import CareersLogoCloud from "components/careers/CareersLogoCloud";
import CareersFeatures from "components/careers/CareersFeatures";
import CareersPositionsList from "components/careers/CareersPositionsList";

import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <CareersHeader />
        <CareersTestimonial />
        <CareersLogoCloud />
        <CareersFeatures />
        <CareersPositionsList />
      </div>
      <Footer />
    </Layout>
  );
};

export default Careers;