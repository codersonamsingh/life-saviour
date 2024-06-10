"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const Solution: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div
        className="solution-area ptb-100 extra-pb"
        style={{
          backgroundImage: `url(/images/solution-bg.jpg)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="solution-content">
                <span className="sub-title">हमारा प्रभाव जानें</span>
                <h2>लाइफसेवियर फाउंडेशन के साथ जीवन में बदलाव</h2>
                <p>
                हम सच्ची देखभाल और समर्थन में विश्वास करते हैं। हमारा मिशन
              आवश्यक सेवाएँ और उत्पाद प्रदान करना है, जिसमें हम लोगों को
              हर चीज़ के केंद्र में रखते हैं।
                </p>

                <Link href="/donate us" className="default-btn">
                  Donate Us <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="solution-video">
                <div
                  onClick={() => setToggler(!toggler)}
                  className="video-btn popup-youtube"
                >
                  <i className="flaticon-play-button"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
