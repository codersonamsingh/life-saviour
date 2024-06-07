"use client";

import React from "react";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="overview-area overflow-hidden ptb-100 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Services</span>
            <h2>Empowering Your Business with Cutting-Edge Solutions</h2>
            <p>
              At Softechinfra, we deliver real innovation and foster positive customer experiences at every step. No gimmicks, just genuine solutions tailored to your needs.
            </p>
          </div>

          {/* Digital Marketing */}
          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">Digital Marketing</span>
                <h2>Unlocking Creative Solutions for Outstanding Results</h2>
                <p>
                  Our approach to digital marketing is centered around meaningful brand interactions, driving real results and enhancing customer experiences.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Strategic Planning
                  </h4>
                  <p>
                    We focus on core development, ensuring that every solution aligns with your business objectives.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Tailored Strategies
                  </h4>
                  <p>
                    We customize our approach to suit your unique needs, putting the customer at the forefront of every decision.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/about-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>
          </div>

          {/* Design & Development */}
          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <Image
                  src="/images/why-choose-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">Design & Development</span>
                <h2>Solving Problems, Building Brands</h2>
                <p>
                  Our design and development services are geared towards fostering brand growth and solving complex challenges.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Website Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Mobile App Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> CRM Software Solutions
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> UI/UX Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Cloud Solutions (AWS, Azure)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media Marketing */}
          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">Social Media Marketing</span>
                <h2>Shaping the Future of Advertising</h2>
                <p>
                  We leverage the power of social media to create impactful campaigns and drive brand engagement like never before.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Targeted Campaigns
                  </h4>
                  <p>
                    Our social media strategies are designed to resonate with your audience, delivering tangible results.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Data-Driven Approaches
                  </h4>
                  <p>
                    We harness the latest analytics tools to refine our strategies and ensure maximum ROI for your campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <Image
                  src="/images/features-image/feature-image1.png"
                  alt="image"
                  width={830}
                  height={750}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                />
              </div>
            </div>
          </div>

          {/* SEO Consultancy */}
          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <Image
                  src="/images/features-image/feature-image2.png"
                  alt="image"
                  width={830}
                  height={750}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">SEO Consultancy</span>
                <h2>Driving Online Visibility with Strategic SEO Solutions</h2>
                <p>
                  Our SEO consultancy services are aimed at boosting your online presence and driving organic traffic to your website.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="fas fa-check"></i> On-Page Optimization
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Off-Page Optimization
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Keyword Research
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> SEO Audits
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Local SEO
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
