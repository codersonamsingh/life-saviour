import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import WhyChooseUs from "../../../components/Services/WhyChooseUs";
import WhatWeDo from "../../../components/Services/WhatWeDo";
import PricingStyleTwo from "../../../components/Pricing/PricingStyleTwo";
import ServicesOverview from "../../../components/ServicesTwo/ServicesOverview";
import OurServices from "../../../components/ServicesTwo/OurServices";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="IT Services"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="IT Services"
      />

      <ServicesOverview />

      <WhyChooseUs />

      <WhatWeDo />

      <PricingStyleTwo />

      <OurServices />

      <Footer />
    </>
  );
}
