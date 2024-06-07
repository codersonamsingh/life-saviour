"use client";

import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ProductsDetailsTab: React.FC = () => {
  return (
    <>
      <Tabs className="products-details-tab">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <TabList>
              <Tab>
                <span>
                  <div className="dot"></div> Description
                </span>
              </Tab>
              <Tab>
                <span>
                  <div className="dot"></div> Additional information
                </span>
              </Tab>
              <Tab>
                <span>
                  <div className="dot"></div> Reviews
                </span>
              </Tab>
            </TabList>
          </div>

          <div className="col-lg-12 col-md-12">
            <TabPanel>
              <div className="products-details-tab-content">
                <p>
                Welcome to Softechinfra - your trusted partner for cutting-edge technology solutions!
                 At Softechinfra, we specialize in providing comprehensive services to propel your business into the digital age.

                With a wealth of experience in software development, website development, mobile app development, digital marketing, SEO consultancy, social media marketing, strategic planning, and design and development,
                Softechinfra is your one-stop destination for all your digital needs.
                </p>

                <p>
                Our expertise extends to crafting bespoke CRM software solutions, exemplified by our successful projects with renowned clients like Reliance General Insurance and Oasis Manors' assisted living facility. We understand the unique challenges of modern businesses and tailor our solutions to meet your specific requirements.

                Additionally, we excel in AI-powered services, including AI chatbots, data scraping with AI, and other intelligence services. Leveraging our core skills in React, Node.js, React Native, Next.js, MongoDB, AWS, and Azure, we deliver high-performance, scalable solutions that drive business growth.
                Partner with Softechinfra today and unlock the full potential of your digital journey.
               Contact us now to discuss how we can elevate your business to new heights.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="products-details-tab-content">
                <ul className="additional-information">
                  <li>
                    <span>Brand:</span> Softechinfra
                  </li>
                  <li>
                    <span>Color:</span> Brown
                  </li>
                  <li>
                    <span>Size:</span> Large, Medium
                  </li>
                  <li>
                    <span>Weight:</span> 27 kg
                  </li>
                  <li>
                    <span>Dimensions:</span> 16 x 22 x 123 cm
                  </li>
                </ul>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="products-details-tab-content">
                <div className="product-review-form">
                  <h3>Customer Reviews</h3>

                  <div className="review-title">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p>Based on 3 reviews</p>

                    <Link href="#" className="default-btn">
                      Write a Review <span></span>
                    </Link>
                  </div>

                  <div className="review-comments">
                    <div className="review-item">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2023</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>

                      <Link href="#" className="review-report-link">
                        Report as Inappropriate
                      </Link>
                    </div>

                    <div className="review-item">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2023</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>

                      <Link href="#" className="review-report-link">
                        Report as Inappropriate
                      </Link>
                    </div>

                    <div className="review-item">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2023</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>

                      <Link href="#" className="review-report-link">
                        Report as Inappropriate
                      </Link>
                    </div>
                  </div>

                  <div className="review-form">
                    <h3>Write a Review</h3>

                    <form>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Enter your name"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Enter your email"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              id="review-title"
                              name="review-title"
                              placeholder="Enter your review a title"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <textarea
                              name="review-body"
                              id="review-body"
                              cols={30}
                              rows={7}
                              placeholder="Write your comments here"
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <button type="submit" className="default-btn">
                            Submit Review <span></span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default ProductsDetailsTab;
