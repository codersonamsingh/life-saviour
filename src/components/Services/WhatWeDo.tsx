"use client";

import React from "react";
import Link from "next/link";

const WhatWeDo: React.FC = () => {
  return (
    <>
      <div className="services-area ptb-100 bg-F4F7FC">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">हम क्या करते हैं</span>
            <h2>हमारे नवाचारी समाधानों के साथ अपने व्यवसाय को बदलें</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-digital-marketing"></i>
                </div>
                <h3>
                  <Link href="/services/details">जीवन रक्षक</Link>
                </h3>
                <p>
                हमारे समर्पित सेवाओं के साथ जीवन को बदलें, जो आपकी विशिष्ट आवश्यकताओं और चुनौतियों को ध्यान में रखते हुए तैयार की गई हैं।
                </p>
                {/* <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-00aeff">
                  <i className="flaticon-research"></i>
                </div>
                <h3>
                  <Link href="/services/details">जीवन उद्धार </Link>
                </h3>
                <p>
                हमारे विशेषज्ञ सेवाओं के साथ एक मजबूत उपस्थिति बनाएं, जो उपयोगकर्ता अनुभव को बढ़ाने और जुड़ाव को बढ़ाने के लिए तैयार की गई हैं।
                </p>
                {/* <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-f78acb">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  <Link href="/services/details">जीवन बचाने वाले मोबाइल ऐप विकास</Link>
                </h3>
                <p>
                हमारे जीवन बचाने वाले मोबाइल ऐप विकास समाधानों के साथ अपने मिशन को सशक्त बनाएं, जो उपयोगकर्ता बोर्ड को बढ़ावा देने और आपके मानवीय प्रयासों को आगे बढ़ाने के लिए बनाए गए हैं।
                </p>
                {/* <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link> */}
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 col-sm-6">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
