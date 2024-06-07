"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const BannerSlider: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />
 
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 6500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        className="seo-banner-slider"
      >
        <SwiperSlide>
          <div className="seo-banner">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-50">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-content">
                        <h1>लाइफ सेवियर फाउंडेशन: आशा और उपचार लाना</h1>

                        <p>
                        हम करुणामय देखभाल, आवश्यक संसाधनों और अटूट समर्थन के माध्यम से जीवन बचाने और आशा को बढ़ावा देने के लिए समर्पित हैं। 
                        हमारे साथ जुड़ें और एक समय में एक जीवन को बदलने में मदद करें।
                        </p>

                        {/* <div className="banner-btn">
                          <Link href="/contact" className="default-btn mr-3">
                            Get Started <span></span>
                          </Link>

                          <div
                            className="video-btn"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="flaticon-play-button"></i> Play Video
                          </div>
                        </div> */}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="seo-banner-image animate-tb">
                        <Image
                          src="/images/seo-banner/seo-banner1.jpg"
                          alt="image"
                          width={650}
                          height={502}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            Shape Images
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
            <div className="shape-img7">
              <Image
                src="/images/shape/shape7.png"
                alt="image"
                width={100}
                height={93}
              />
            </div>
            <div className="shape-img8">
              <Image
                src="/images/shape/shape8.png"
                alt="image"
                width={74}
                height={64}
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
            <div className="shape-img13">
              <Image
                src="/images/shape/shape13.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
            {/* <div className="shape-img14">
              <Image
                src="/images/shape/shape14.png"
                alt="image"
                width={234}
                height={355}
              />
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="seo-banner">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-50">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-content">
                        <h1> कार्य में करुणा</h1>

                        <p>
                        हम जरूरतमंदों को महत्वपूर्ण सहायता, संसाधन और आशा प्रदान करने के लिए अथक परिश्रम करते हैं,
            जीवन को परिवर्तित करते हुए और समुदायों के लिए एक उज्जवल भविष्य का निर्माण करते हैं।
                        </p>

                        {/* <div className="banner-btn">
                          <Link href="/contact" className="default-btn mr-3">
                            Get Started <span></span>
                          </Link>

                          <div
                            className="video-btn"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="flaticon-play-button"></i> Play Video
                          </div>
                        </div> */}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="seo-banner-image animate-tb">
                        <Image
                          src="/images/seo-banner/seo-banner2.jpg"
                          alt="image"
                          width={650}
                          height={420}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Images */}
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
            <div className="shape-img7">
              <Image
                src="/images/shape/shape7.png"
                alt="image"
                width={100}
                height={93}
              />
            </div>
            <div className="shape-img8">
              <Image
                src="/images/shape/shape8.png"
                alt="image"
                width={74}
                height={64}
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
            <div className="shape-img13">
              <Image
                src="/images/shape/shape13.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
            {/* <div className="shape-img14">
              <Image
                src="/images/shape/shape14.png"
                alt="image"
                width={234}
                height={355}
              />
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="seo-banner">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-50">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-content">
                        <h1>प्रत्येक जीवन के लिए करुणामय समर्थन</h1>

                        <p>
                        लाइफ सेवियर फाउंडेशन में, हम जरूरतमंद व्यक्तियों और समुदायों को महत्वपूर्ण सहायता, संसाधन और आशा प्रदान करने के लिए प्रतिबद्ध हैं, 
            प्रत्येक कार्य के साथ जीवन को परिवर्तित कर रहे हैं।

                        </p>

                        {/* <div className="banner-btn">
                          <Link href="/contact" className="default-btn mr-3">
                            Get Started <span></span>
                          </Link>

                          <div
                            className="video-btn"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="flaticon-play-button"></i> Play Video
                          </div>
                        </div> */}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="seo-banner-image animate-tb">
                        <Image
                          src="/images/seo-banner/seo-banner3.jpg"
                          alt="image"
                          width={650}
                          height={417}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Images */}
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
            <div className="shape-img7">
              <Image
                src="/images/shape/shape7.png"
                alt="image"
                width={100}
                height={93}
              />
            </div>
            <div className="shape-img8">
              <Image
                src="/images/shape/shape8.png"
                alt="image"
                width={74}
                height={64}
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
            <div className="shape-img13">
              <Image
                src="/images/shape/shape13.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
            {/* <div className="shape-img14">
              <Image
                src="/images/shape/shape14.png"
                alt="image"
                width={234}
                height={355}
              />
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
