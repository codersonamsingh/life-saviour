"use client";

import React from "react";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="overview-area overflow-hidden ptb-100 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">हमारी सेवाएं</span>
            <h2>आपके व्यवसाय को सशक्त बनाना</h2>
            <p>
            लाइफ सेवियर फाउंडेशन में, हम वास्तविक नवाचार प्रदान करते हैं और हर कदम पर सकारात्मक ग्राहक अनुभव को बढ़ावा देते हैं। 
            कोई दिखावा नहीं, केवल आपकी आवश्यकताओं के अनुसार सच्चे समाधान।
            </p>
          </div>

          {/* Digital Marketing */}
          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">डिजिटल मार्केटिंग</span>
                <h2>उत्कृष्ट परिणामों के लिए रचनात्मक समाधान खोलना</h2>
                <p>
                हमारे डिजिटल मार्केटिंग दृष्टिकोण का केंद्र बिंदु सार्थक ब्रांड इंटरैक्शन है, जो वास्तविक परिणाम लाता है और ग्राहक अनुभव को बढ़ाता है।

                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> रणनीतिक योजना
                  </h4>
                  <p>
                  हम मौलिक विकास पर ध्यान केंद्रित करते हैं, सुनिश्चित करते हैं कि हर समाधान आपके व्यापार लक्ष्यों के साथ संरेखित है।
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> विशेष रूप से तैयार की गई रणनीतियाँ
                  </h4>
                  <p>
                  हम अपने दृष्टिकोण को आपकी अद्वितीय आवश्यकताओं के अनुसार अनुकूलित करते हैं, हर निर्णय को ग्राहक को प्रमुख में रखकर।
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
                  src="/images/about-img1.jpg"
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
                <span className="sub-title">डिजाइन और विकास</span>
                <h2>समस्याओं का समाधान, ब्रांड निर्माण</h2>
                <p>
                हमारी डिजाइन और विकास सेवाएं ब्रांड वृद्धि को बढ़ावा देने और जटिल चुनौतियों का समाधान करने के लिए विशेष रूप से तैयार की गई हैं।
                </p>

                {/* <ul className="features-list">
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
                </ul> */}
              </div>
            </div>
          </div>
{/* 
          Social Media Marketing
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
          </div> */}

          {/* SEO Consultancy
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OurServices;
