"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";

const Faq: React.FC = () => {
  return (
    <>
      <div className="faq-area ptb-100 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Welcome to Softechinfra's FAQ section, where we address common queries about our services and solutions.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img pr-3">
                <Image
                  src="/images/faq.png"
                  alt="Frequently Asked Questions"
                  width={600}
                  height={450}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What types of services does Softechinfra offer?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        At Softechinfra, we specialize in various digital solutions, including software development, website development, mobile app development, CRM software solutions, and more.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can you provide examples of Softechinfra's past projects?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Certainly! Softechinfra has successfully delivered projects for esteemed clients such as Reliance General Insurance and Oasis Manors, where we developed tailored CRM software solutions to meet their unique requirements.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How does Softechinfra approach digital marketing and SEO?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Our digital marketing strategies at Softechinfra encompass a comprehensive approach, incorporating SEO consultancy, social media marketing, and strategic planning to elevate your online presence and foster business growth.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        In which technologies does Softechinfra specialize?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Softechinfra excels in various cutting-edge technologies, including React, Node.js, React Native, Next.js, MongoDB, AWS, and Azure, ensuring the delivery of robust and scalable solutions for our clients.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can AI benefit my business operations with Softechinfra?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Through our AI services at Softechinfra, we provide advanced capabilities such as AI-powered chatbots, data scraping with AI, and intelligent insights, enabling you to streamline processes, gain valuable insights, and enhance decision-making efficiency.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
