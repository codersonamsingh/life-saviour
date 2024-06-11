"use client";

import React from "react";
import Image from "next/image";

interface SidebarModalProps {
  active: string;
  onClick: (active: boolean) => void;
}

const SidebarModal: React.FC<SidebarModalProps> = ({ active, onClick }) => {
  const closeModal = (): void => {
    onClick(false);
  };

  return (
    <>
      <div className={`sidebar-modal ${active}`}>
        <div className="sidebar-modal-inner">
          <div className="sidebar-about-area">
            <div className="title">
              <h2>हमारे बारे में</h2>
              <p>
              लाइफ सेवियर फाउंडेशन में, हम इस मान्यता को बनाए रखते हैं कि हमारे ब्रांड के साथ वास्तविक गहरा संवाद करना संचार के लिए मौलिक है। हमारे मूल्यों का केंद्र वास्तविक नवाचार और हमारे ग्राहकों के लिए सकारात्मक अनुभव को बढ़ावा देना है। हम वादा करते हैं कि केवल वास्तविक उत्पादों और सेवाओं की प्रदान की जाएगी, और उन लोगों की जरूरतों और कल्याण को प्राथमिकता देकर सेवाओं को समर्पित किया जाएगा जिनकी हम सेवा करते हैं। लाइफ सेवियर फाउंडेशन में, 
              हमारी प्रेरणा हमारे लाभार्थियों के जीवन और आवश्यकताओं से आती है, जैसे ही हम उनकी यात्रा में एक अर्थपूर्ण प्रभाव डालने का प्रयास करते हैं।
              </p>
            </div>
          </div>

          <div className="sidebar-instagram-feed">
            <h2>Instagram</h2>
            <ul>
              {[...Array(8)].map((_, index) => (
                <li key={index}>
                  <a href="https://www.instagram.com/" target="_blank">
                    <Image
                      src={`/images/blog-image/blog-image${index + 1}.jpg`}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-contact-area">
            <div className="contact-info">
              <div className="contact-info-content">
                <h2>
                  <span className="main-color">+919846173905</span>
                  <span className="or">OR</span>
                  <span>lifesaviours4you@Gmail.com</span>
                </h2>

                <ul className="social">
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <span
            onClick={closeModal}
            className="close-btn sidebar-modal-close-btn"
          >
            <i className="flaticon-close"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default SidebarModal;
