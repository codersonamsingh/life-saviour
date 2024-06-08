import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="choose-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <div className="section-title text-left">
                  <span className="sub-title">हमारा चयन क्यों?</span>
                  <h2>नवाचारी समाधानों के साथ अपने दृष्टिकोण को मजबूत बनाना</h2>
n
                  <p>
                  सेवियर फाउंडेशन एक गैर-सरकारी संगठन (एनजीओ) है जो किसी भी सरकार के बिना स्वतंत्र रूप से कार्य करता है। सेवियर फाउंडेशन, कभी-कभी नागरिक समाज के नाम से जाने जाते हैं, समुदाय, राष्ट्रीय और अंतरराष्ट्रीय स्तरों पर संगठित होते हैं ताकि मानवीय कारणों या पर्यावरण जैसे सामाजिक या राजनीतिक उद्देश्यों की सेवा कर सकें।
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="/about" className="default-btn">
                  और जानें <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-image">
                <Image
                  src="/images/machine-learning/about3.jpg"
                  alt="image"
                  width={677}
                  height={520}
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
