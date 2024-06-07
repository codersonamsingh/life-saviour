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
        pageTitle="Blog Details"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Blog Details"
      />

      <Banner />

      <BlogCard />

      <BlogDetailsContent />

      <Footer />
    </>
  );
}
