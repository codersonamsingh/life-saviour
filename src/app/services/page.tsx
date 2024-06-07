import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import Banner from "../../components/StrategicAgency/Banner";
import WhyChooseUs from "../../components/Services/WhyChooseUs";
import WhatWeDo from "../../components/Services/WhatWeDo";
import LetsGetToWork from "../../components/Common/LetsGetToWork";
import PricingStyleTwo from "../../components/Pricing/PricingStyleTwo";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Services Style One"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Services Style One"
      />

      <Banner />

      <WhyChooseUs />

      <WhatWeDo />

      <LetsGetToWork />

      <PricingStyleTwo />

      <Footer />
    </>
  );
}
