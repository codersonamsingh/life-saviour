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
            <h2>अक्सर पूछे जाने वाले प्रश्न</h2>
            <p>
            लाइफ सेवियर फाउंडेशन किस प्रकार के कार्यक्रम प्रदान करता है?
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img pr-3">
                <Image
                  src="/images/faq.jpeg"
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
                      लाइफ सेवियर फाउंडेशन चिकित्सा सहायता, शिक्षा समर्थन, आपदा राहत, और सामुदायिक विकास की पहलों सहित कई कार्यक्रम प्रदान करता है ताकि 
                      जरूरतमंदों की मदद की जा सके और उनका उत्थान हो सके।
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                      क्या आप लाइफ सेवियर फाउंडेशन की पिछली पहलों के उदाहरण दे सकते हैं?
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      निश्चित रूप से! लाइफ सेवियर फाउंडेशन ने स्वास्थ्य संकटों के दौरान चिकित्सा आपूर्ति प्रदान करने, वंचित छात्रों के लिए शैक्षिक छात्रवृत्तियाँ स्थापित करने, और प्राकृतिक आपदाओं के दौरान आवश्यक सहायता पहुँचाने जैसी कई पहलें लागू की हैं।
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                      लाइफ सेवियर फाउंडेशन सामुदायिक विकास का समर्थन कैसे करता है?
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    {/* <AccordionItemHeading>
                      <AccordionItemButton> */}
                        {/* How does Softechinfra approach digital marketing and SEO? */}
                      {/* </AccordionItemButton>
                    </AccordionItemHeading> */}

                    <AccordionItemPanel>
                      <p className="accordion-content">
                      हमारे सामुदायिक विकास प्रयासों में बुनियादी ढाँचा निर्माण, स्थायी प्रथाओं को बढ़ावा देना, और समुदायों को आत्मनिर्भर बनने और जीवन की गुणवत्ता में सुधार करने में मदद करने के लिए व्यावसायिक प्रशिक्षण प्रदान करना शामिल है।
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      मैं लाइफ सेवियर फाउंडेशन के साथ कैसे शामिल हो सकता/सकती हूँ?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                      आप स्वयंसेवा करके, दान देकर, या हमारे साथ साझेदारी करके शामिल हो सकते हैं। वर्तमान अवसरों के बारे में जानने और कैसे आप फर्क कर सकते हैं, इसके लिए हमारी वेबसाइट पर जाएँ।
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      लाइफ सेवियर फाउंडेशन पारदर्शिता और उत्तरदायित्व कैसे सुनिश्चित करता है?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                      हम अपनी गतिविधियों, वित्तीय विवरणों, और प्रभाव आकलनों पर नियमित रूप से विस्तृत रिपोर्ट प्रकाशित करके पारदर्शिता और उत्तरदायित्व को प्राथमिकता देते हैं, ताकि हमारे समर्थक और हितधारक हमारे कार्यों और उनके परिणामों के बारे में सूचित रहें।
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
