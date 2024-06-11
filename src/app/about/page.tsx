import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Banner from "../../components/SaasAgency/Banner";
import ServicesOverview from "../../components/ITStartup/ServicesOverview";
import Faq from "../../components/SaasAgency/Faq";
import LatestWorks from "../../components/ITStartup/LatestWorks";
import OurFeaturesTab from "../../components/Common/OurFeaturesTab";
import PageHeader from "../../components/Common/PageHeader";
import AboutArea from "../../components/AboutTwo/AboutArea";
import FunFactsTwo from "../../components/Common/FunFactsTwo";
import WhyChooseUs from "../../components/AboutTwo/WhyChooseUs";
import Solution from "../../components/Common/Solution";
import Testimonials from "../../components/Common/Testimonials";
import OurTeamTwo from "../../components/Common/OurTeamTwo";
import SubscribeStyleThree from "../../components/Common/SubscribeStyleThree";
import PartnerWithTitle from "../../components/Common/Partner/PartnerWithTitle";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      

      <PageHeader
        pageTitle="हमारे बारे में"
        breadcrumbTextOne="मुख्य पृष्ठ"
        breadcrumbUrl="/"
        breadcrumbTextTwo="हमारे बारे में"
      />
       
       {/* <Banner /> */}

      <AboutArea />

      <OurFeaturesTab />

      <FunFactsTwo />

      {/* <ServicesOverview /> */}

      <WhyChooseUs />

      <Solution />

      <Faq />

      {/* <LatestWorks /> */}

      <Testimonials />

      <hr />

      <OurTeamTwo />

      <SubscribeStyleThree />

      {/* <PartnerWithTitle /> */}
      
      <Footer />
    </>
  );
}
