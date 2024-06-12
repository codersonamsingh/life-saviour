import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import Footer from "../../components/Layout/Footer";
import BlogCard from "../../components/Blog/BlogCard";

export default function Page() {
  return (
    <>
      

      {/* <PageHeader
        pageTitle="ब्लॉग ग्रिड"
        breadcrumbTextOne="मुख्य पृष्ठ"
        breadcrumbUrl="/"
        breadcrumbTextTwo="ब्लॉग ग्रिड"
      /> */}

      <BlogCard />

      <Footer />
    </>
  );
}
