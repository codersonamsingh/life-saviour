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
                  <span className="sub-title">Why Choose Us</span>
                  <h2>Driving Your Vision Forward with Cutting-Edge Solutions</h2>

                  <p>
                    Softechinfra, a leading provider of IT services, leverages extensive expertise and experience to actualize your concepts into tangible solutions. Since our establishment in 2014 in Kolkata, India, we have been dedicated to delivering outstanding software engineering solutions to clients across India and globally. Our steadfast commitment to quality and client satisfaction has established us as a reliable partner for businesses seeking reliable and seamless software solutions.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="/about" className="default-btn">
                    Explore More <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-image">
                <Image
                  src="/images/machine-learning/about3.png"
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
