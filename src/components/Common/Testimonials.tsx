"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="feedback-area ptb-100 bg-color">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">प्रशंसापत्र</span>
            <h2>हमारे ग्राहकों से कुछ प्यारे प्रतिक्रियाएँ</h2>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1550: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="feedback-slides"
        >
          <SwiperSlide>
            <div className="single-feedback-item">
              <p>
                “इस संगठन को दान करके खुशी होती है। वे हमेशा मुझे मेल करके समाज के लिए किए गए सभी कार्यों के बारे में अपडेट देते रहते हैं। मैं सभी से सुझाव दूंगा कि कृपया जाएं और इस आत्म प्रेरित संगठन की महानता को एक बार महसूस करें।
                आपके सराहनीय कार्य के लिए आप सभी को सलाम। इसी तरह काम करते रहो दोस्तों।”
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client1.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Sagar Devkota</h3>
                <span>Manager</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item">
              <p>
                “सेवियर फाउंडेशन भारत का सबसे अच्छा गैर-लाभकारी संगठन है, जो स्वास्थ्य, शिक्षा, मानवाधिकार और पर्यावरण के क्षेत्र में महत्वपूर्ण कार्य कर रहा है। मुझे कहना चाहिए कि यह एनजीओ बहुत अच्छा काम कर रहा है और उन हजारों गरीब छात्रों के जीवन में बदलाव ला रहा है जो सुविधाएं प्राप्त नहीं कर पा रहे थे।.”
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client2.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Vivek Singh</h3>
                <span>Web Developer</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item">
              <p>
                “डोनेटकार्ट एक अनोखा मंच है जहां आप आश्वस्त हो सकते हैं कि आपके द्वारा दान किए गए उत्पाद जिम्मेदारी से एनजीओ तक पहुंचाए जाते हैं। महामारी के दौरान इतने लोगों की मदद करने के
                 लिए उनके साथ साझेदारी करके मुझे बहुत खुशी हुई है।”
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client3.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Sagar Panday</h3>
                <span>Designer</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item">
              <p>
                “We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services.”
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client4.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Rahul Sharma</h3>
                <span>Manager</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item">
              <p>
                “We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services.”
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client5.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Rajesh kumar
                  
                </h3>
                <span>Softechinfra</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
