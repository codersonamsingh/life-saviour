"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

const OurFeaturesTab: React.FC = () => {
  return (
    <>
      <div className="features-area ptb-100 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">हमारी विशेषताएँ</span>
            <h2>हम हमेशा ग्राहकों की उम्मीदों को समझने का प्रयास करते हैं</h2>
          </div>

          <Tabs className="features-list-tab">
            {/* tabs Nav */}
            <TabList>
              <Tab>
                <div className="bg-fa7070">
                  <i className="flaticon-achievement"></i>
                  <span>आपातकालीन सहायता</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-00aeff">
                  <i className="flaticon-architecture"></i>
                  <span>समुदाय समर्थन</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-c679e3">
                  <i className="flaticon-digital-marketing"></i>
                  <span>सार्वजनिक स्वास्थ्य जागरूकता</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-eb6b3d">
                  <i className="flaticon-analytics"></i>
                  <span>धनराशि अभियान</span>
                </div>
              </Tab>

              <Tab>
                <div onClick={(e) => e.preventDefault()}>
                  <i className="flaticon-data"></i>
                  <span>कार्यक्रम विकास</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-f78acb">
                  <i className="flaticon-research"></i>
                  <span>स्वयंसेवक भर्ती</span>
                </div>
              </Tab>
            </TabList>

            {/* TabPanel 01 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-content">
                  <div className="content">

                  <span className="sub-title">हमारा मिशन: जीवन को शक्ति देना</span>

                   <h2>उपयोगकर्ता-केंद्रित दृष्टिकोण</h2>
                   <p>
                   लाइफ सेवियर फाउंडेशन, हम मानते हैं कि ब्रांड बातचीत में महत्वपूर्ण है। हमारे मूल उत्पादों और सकारात्मक उपभोक्ता अनुभव सफल संचार का ह्रदय है। हम नकली उत्पादों और
                    सेवाओं को नकारते हैं। उपभोक्ता हमेशा राजा होता है, उनका जीवन और आवश्यकताओं से हमें प्रेरणा मिलती है।
                  </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> ओपन सोर्स पहल के माध्यम से जीवन को शक्तिशाली बनाना
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> मानवता के लिए श्रेष्ठ विकल्पों का चयन करना
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> सभी के लिए उच्च सुरक्षा सुनिश्चित करना
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> जीवन को बदलने वाली सलाह और समर्थन प्रदान करना
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> जीवन बचाने वाली प्रतिक्रिया
                        </span>
                      </li>
                      {/* <li>
                        <span>
                          <i className="flaticon-tick"></i> Super Responsive
                        </span>
                      </li> */}
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image1.gif"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 02 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image2.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>

                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">Define Your Choices</span>
                    <h2>Product Design</h2>
                    <p>
                      We believe brand interaction is key in communication. Real
                      innovations and a positive customer experience are the
                      heart of successful communication. No fake products and
                      services. The customer is king, their lives and needs are
                      the inspiration.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Open Source
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Optimal Choice
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> High Security
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Great Advices
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Creative Layout
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Super Responsive
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 03 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">Define Your Choices</span>
                    <h2>Digital Marketing</h2>
                    <p>
                      We believe brand interaction is key in communication. Real
                      innovations and a positive customer experience are the
                      heart of successful communication. No fake products and
                      services. The customer is king, their lives and needs are
                      the inspiration.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Open Source
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Optimal Choice
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> High Security
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Great Advices
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Creative Layout
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Super Responsive
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image2.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 04 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image4.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>

                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">Define Your Choices</span>
                    <h2>Branding</h2>
                    <p>
                      We believe brand interaction is key in communication. Real
                      innovations and a positive customer experience are the
                      heart of successful communication. No fake products and
                      services. The customer is king, their lives and needs are
                      the inspiration.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Open Source
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Optimal Choice
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> High Security
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Great Advices
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Creative Layout
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Super Responsive
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 05 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">Define Your Choices</span>
                    <h2>Development</h2>
                    <p>
                    Our design and development services are geared
                     towards fostering brand growth and solving complex challenges.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Open Source
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Optimal Choice
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> High Security
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Great Advices
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Creative Layout
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Super Responsive
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image5.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 06*/}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image6.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>

                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">Define Your Choices</span>
                    <h2>Marketing</h2>
                    <p>
                      We believe brand interaction is key in communication. Real
                      innovations and a positive customer experience are the
                      heart of successful communication. No fake products and
                      services. The customer is king, their lives and needs are
                      the inspiration.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Open Source
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Optimal Choice
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> High Security
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Great Advices
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Creative Layout
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Super Responsive
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>

        {/* Animation Image */}
        <div className="shape-img7">
          <Image
            src="/images/shape/shape7.png"
            alt="image"
            width={100}
            height={93}
          />
        </div>
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
      </div>
    </>
  );
};

export default OurFeaturesTab;
