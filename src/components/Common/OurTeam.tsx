"use client";

import React from "react";
import Image from "next/image";

const OurTeam: React.FC = () => {
  return (
    <>
      <div className="team-area ptb-100 pb-70 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">हमारी टीम</span>
            <h2>हमारे शानदार टीम सदस्य से मिलिए</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team1.jpg"
                    alt="team"
                    width={660}
                    height={660}
                  />

                  <div className="social">
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Mr. Manish Sah 9939250444</h3>
                  <span>Founder cum President </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="https://media.licdn.com/dms/image/D4D03AQGQHLtTbhtxow/profile-displayphoto-shrink_400_400/0/1691451653487?e=2147483647&v=beta&t=jjU-H2RA1k5uzV4QdN9Y_Nh68702Y7LtSM88KWx5X3U"
                    alt="team"
                    width={660}
                    height={660}
                  />

                  <div className="social">
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Mr. Sujeet Singh Vats 9877722969</h3>
                  <span>Co- founder </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team5.jpg"
                    alt="team"
                    width={660}
                    height={660}
                  />

                  <div className="social">
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Mr. Rajat Ranjan 9939842656
                    
                  </h3>
                  <span>Treasurer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team7.jpg"
                    alt="team"
                    width={660}
                    height={660}
                  />

                  <div className="social">
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Mr. Aditya Bhagat 86033 86986
                    
                  </h3>
                  <span>Secretary</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation shape image */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
        <div className="shape-img6">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
        <div className="shape-img9">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={43}
            height={46}
          />
        </div>
        <div className="shape-img10">
          <Image
            src="/images/shape/shape10.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
