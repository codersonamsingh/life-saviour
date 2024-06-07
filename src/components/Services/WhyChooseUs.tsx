"use client";

import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="why-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-content">
                <span className="sub-title">Why Choose Softechinfra</span>
                <h2>Empowering Your Digital Journey</h2>
                <p>
                  At Softechinfra, we understand that meaningful brand interaction is the cornerstone of effective communication. Our commitment to real innovation and delivering exceptional customer experiences lies at the heart of everything we do.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Expert Development
                  </h4>
                  <p>
                    We pride ourselves on delivering genuine solutions tailored to your needs. With a focus on cutting-edge technologies and industry best practices, we ensure your satisfaction and success.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Customized Solutions
                  </h4>
                  <p>
                    At Softechinfra, we recognize that every client is unique. Our approach revolves around understanding your specific requirements and delivering tailored solutions that exceed your expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-image">
                <Image
                  src="/images/why-choose-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
