"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const AboutArea: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="about-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about-img2.jpg"
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="solution-video">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="flaticon-play-button"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content">
                <div className="section-title text-left">
                  <span className="sub-title">About Us</span>
                  <h2>We are Your Trusted IT Solutions Partner</h2>
                  <p>
                    Softechinfra is a dynamic team dedicated to providing innovative IT solutions tailored to your needs. With our expertise in software development, website development, mobile app development, digital marketing, and more, we help businesses thrive in the digital landscape.
                  </p>
                </div>
                
                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                    At Softechinfra, we believe in leveraging technology to empower businesses and individuals. Our team comprises skilled professionals passionate about delivering cutting-edge solutions that drive growth and success.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                    With a wealth of experience in building CRM software for leading companies like Reliance General Insurance and Oasis Manors, Softechinfra has established itself as a trusted name in the industry. We have a proven track record of delivering robust and scalable solutions that meet the unique requirements of our clients.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <p>
                    Our mission at Softechinfra is to empower businesses with innovative IT solutions that drive growth and profitability. We are committed to delivering exceptional value to our clients through strategic planning, design and development, digital marketing, and consultancy services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
