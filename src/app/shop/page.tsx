import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Banner from "../../components/MarketingAgency/Banner";
import PageHeader from "../../components/Common/PageHeader";
import CheckoutContent from "../../components/Checkout/CheckoutContent";
import ShopProducts from "../../components/Shop/ShopProducts";
import ProductDetails from "../../components/Shop/ProductDetails";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Shop"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Shop"
      />

      
      <Banner />

      <ShopProducts />

      <ProductDetails />

      
      <CheckoutContent />

      <Footer />
    </>
  );
}
