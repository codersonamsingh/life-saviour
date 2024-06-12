"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterested: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission with formData
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceInterested: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Contact Us</span>
            <h2>लाइफ सेवियर फाउंडेशन में आपका स्वागत है</h2>
            <p>
            लाइफ सेवियर फाउंडेशन में, हम जिन लोगों की मदद करने के लिए समर्पित हैं जो जरूरतमंद हैं। 
            चाहे वह आश्रय, खाना या चिकित्सा सहायता हो, हमारा मिशन उन लोगों की मदद करना है जो मुश्किल समयों का सामना कर रहे हैं।
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4">
              <div className="contact-image">
                <Image
                  src="/images/contact.png"
                  alt="Contact"
                  width={310}
                  height={350}
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="आपका नाम"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="आपका ईमेल"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="आपका फोन"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="serviceInterested"
                          value={formData.serviceInterested}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Service Interested In"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          cols={30}
                          rows={6}
                          className="form-control"
                          placeholder="आपका संदेश"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 text-center">
                      <button type="submit" className="default-btn">
                      संदेश भेजें<span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
