import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Banner from "../../../components/DigitalAgency/Banner";
import PageHeader from "../../../components/Common/PageHeader";
import BlogDetailsContent from "../../../components/BlogDetails/BlogDetailsContent";
import Footer from "../../../components/Layout/Footer";
import BlogCard from "../../../components/Blog/BlogCard";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="ब्लॉग ग्रिड"
        breadcrumbTextOne="मुख्य पृष्ठ"
        breadcrumbUrl="/"
        breadcrumbTextTwo="ब्लॉग ग्रिड"
      />


      {/* <Banner /> */}

      <BlogCard />

      {/* <BlogDetailsContent /> */}

      <Footer />
    </>
  );
}
