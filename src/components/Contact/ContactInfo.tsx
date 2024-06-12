"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-email"></i>
                </div>
                <h3>हमें ईमेल करें</h3>
                <p>lifesaviours4you.com</p>
                {/* <p>support@softechinfra.com</p> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                //  <i className="flaticon-phone-call"></i>
                </div>
                <h3>हमारा स्थान</h3>
                <p>अररिया, बिहार 854321
                भारत</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-marker"></i>
                </div>
                <h3>हमें कॉल करें</h3>
                <p>+91 9846173905</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
