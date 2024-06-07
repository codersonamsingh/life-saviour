"use client";

import React from "react";
import Link from "next/link";

const WhatWeDo: React.FC = () => {
  return (
    <>
      <div className="services-area ptb-100 bg-F4F7FC">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">What We Do</span>
            <h2>Transform Your Business with Our Innovative Solutions</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-digital-marketing"></i>
                </div>
                <h3>
                  <Link href="/services/details">Software Development</Link>
                </h3>
                <p>
                  Elevate your business with our custom software development solutions, tailored to meet your unique requirements.
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-00aeff">
                  <i className="flaticon-research"></i>
                </div>
                <h3>
                  <Link href="/services/details">Website Development</Link>
                </h3>
                <p>
                  Build a strong online presence with our expert website development services, crafted to enhance user experience and drive engagement.
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-f78acb">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  <Link href="/services/details">Mobile App Development</Link>
                </h3>
                <p>
                  Stay ahead in the mobile era with our innovative mobile app development solutions, designed to enhance user engagement and drive business growth.
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-cdf1d8">
                  <i className="flaticon-analysis"></i>
                </div>
                <h3>
                  <Link href="/services/details">Digital Marketing</Link>
                </h3>
                <p>
                  Drive your business forward with our comprehensive digital marketing strategies, tailored to maximize your online presence and reach your target audience effectively.
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <i className="flaticon-mail"></i>
                </div>
                <h3>
                  <Link href="/services/details">SEO Consultancy</Link>
                </h3>
                <p>
                  Boost your online visibility and drive organic traffic to your website with our expert SEO consultancy services, designed to help you achieve top search engine rankings.
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>
                  <Link href="/services/details">Strategic Planning</Link>
                </h3>
                <p>
                  Develop a roadmap for success with our strategic planning services, designed to help you identify opportunities, overcome challenges, and achieve your business goals.
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
