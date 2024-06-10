"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const AboutArea: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      /> */}

      <div className="about-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about-img2.gif"
                  alt="image"
                  width={800}
                  height={950}
                />

                <div className="solution-video">
                  <div
                    // onClick={() => setToggler(!toggler)}
                    // className="video-btn"
                  >
                    {/* <i className="flaticon-play-button"></i> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content">
                <div className="section-title text-left">
                <span className="sub-title">लाइफ सेवियर फाउंडेशन के बारे में</span>
                <h2>हम आपके विश्वसनीय आईटी समाधान साथी हैं, जीवन रक्षक फाउंडेशन के साथ।</h2>
               <p>
               जीवन रक्षक फाउंडेशन में, हमें दया और कार्रवाई की शक्ति में विश्वास है कि जीवनों को परिवर्तित किया जा सकता है। [साल] में स्थापित, हमारा
                लक्ष्य एक ऐसे समुदाय का निर्माण करना है जो जरूरतमंदों की मदद करे, सामाजिक न्याय का समर्थन करे, और सहायता और सशक्तिकरण के लिए एक समुदाय की स्थापना करे।
              </p>

                </div>
                
                <div className="about-text">
                  <h4>हम कौन हैं</h4>
                  <p>
                  जीवन रक्षक फाउंडेशन में, हम समर्थन और सेवा के क्षेत्र में सक्षम और प्रेरित व्यक्तियों का समूह हैं। हमारा संगठन उन लोगों के लिए साथ है जो आवश्यकता में होने पर 
                  भी दूसरों के लिए खड़े होते हैं। हमारा मिशन उन जीवों के लिए है जो सहारे की आवश्यकता होते हैं, और हम उन्हें मानवता और सेवा के माध्यम से साथी बनाते हैं।
                  </p>
                </div>

                <div className="about-text">
                  <h4>हमारा इतिहास</h4>
                  <p>
                  जीवन रक्षक फाउंडेशन का इतिहास एक संघर्ष और सेवा की कहानी है, जो समाज में सकारात्मक परिवर्तन लाने के लिए समर्थ है। हमने लोगों की जिंदगियों
                   को समृद्ध बनाने के लिए शिक्षा, स्वास्थ्य, और आवास जैसे क्षेत्रों में प्रोजेक्ट्स आयोजित किए हैं।

                  </p>
                </div>

                <div className="about-text">
                  <h4>हमारा मिशन</h4>
                  <p>
                  हमारा मिशन उन व्यक्तियों और समुदायों को आवश्यक समर्थन और संसाधन प्रदान करना है जो सामने आने वाली मुश्किलों का सामना कर रहे 
                  हैं, उन्हें समस्याओं को परिभाषित करने और प्रेरित करने के लिए प्रेरित करने के लिए समर्थ बनाना है। हमारे कार्यक्रमों और पहलों के माध्यम से, हम गरीबी, बेघरी, स्वास्थ्य विषमता, और शिक्षा की बाधाओं सहित महत्वपूर्ण सामाजिक मुद्दों का सामना करने का प्रयास करते हैं।
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
