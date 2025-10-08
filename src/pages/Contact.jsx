import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/contact.css";
import { MapPin, Mail, Phone, Clock, Send, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // simulate async submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Your message has been sent successfully! Thank you for contacting us.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 3500);
    }, 900);
  };

  const contactInfo = [
    { icon: MapPin, title: "Location", content: "Renuka Nagar, Akola, Maharashtra 444002", bgColor: "bg-danger bg-opacity-10", iconColor: "text-danger" },
    { icon: Mail, title: "Email", content: "support@nazario.tech", bgColor: "bg-info bg-opacity-10", iconColor: "text-info" },
    { icon: Phone, title: "Call", content: "+91 74477 06777", bgColor: "bg-success bg-opacity-10", iconColor: "text-success" },
    { icon: Clock, title: "Open Hours", content: "Monday-Friday: 9AM - 6PM", bgColor: "bg-warning bg-opacity-10", iconColor: "text-warning" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/yourhandle", label: "X", color: "#000" },
    { icon: Facebook, href: "https://facebook.com/yourpage", label: "Facebook", color: "#1877F2" },
    { icon: Instagram, href: "https://instagram.com/yourhandle", label: "Instagram", color: "#E1306C" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn", color: "#0A66C2" },
  ];

  return (
    <div className="contact-page">
      <Navbar />

      <div className="container py-4">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold contact-header mb-3">Get in Touch with Nazario</h1>
          <p className="lead mx-auto contact-description" style={{ maxWidth: 640 }}>
            We're here to help you find the perfect eyewear. Reach out with any questions or visit us in-store for a personalized consultation.
          </p>
        </div>

        {/* Top card: contact info (left) + form (right) */}
        <div className="row g-4">
          <div className="col-12">
            <div className="custom-card contact-top-card border-0 rounded-4 p-3 p-lg-4 mb-4">
              <div className="row g-4 align-items-start">
                <div className="col-lg-4">
                  <div className="row g-3">
                    {contactInfo.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="col-12">
                          <div className="d-flex align-items-start gap-3 p-3 rounded-3 bg-white">
                            <div className={`${item.bgColor} rounded-3 d-inline-flex align-items-center justify-content-center`} style={{ width: 56, height: 56 }}>
                              <Icon size={22} className={item.iconColor} />
                            </div>
                            <div>
                              <h6 className="mb-1 fw-bold mb-0">{item.title}</h6>
                              <p className="small text-muted mb-0">{item.content}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="col-lg-8">
                  <form onSubmit={handleSubmit} className="h-100 d-flex flex-column justify-content-between contact-form">
                    <div>
                      <h3 className="h5 fw-bold text-dark mb-3">Get in Touch</h3>
                      {submitMessage && <div className="alert alert-success">{submitMessage}</div>}

                      <div className="row g-3">
                        <div className="col-md-6">
                          <input name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your name" className="form-control rounded-3 py-3" />
                        </div>
                        <div className="col-md-6">
                          <input name="email" value={formData.email} onChange={handleInputChange} required placeholder="Your email" className="form-control rounded-3 py-3" />
                        </div>
                      </div>

                      <div className="mt-3">
                        <input name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Subject" className="form-control rounded-3 py-3" />
                      </div>

                      <div className="mt-3">
                        <textarea name="message" value={formData.message} onChange={handleInputChange} required placeholder="Message" className="form-control rounded-3" style={{ minHeight: 140 }} />
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-4 gap-3">
                      <button type="submit" disabled={isSubmitting} className="btn btn-primary rounded-pill px-4 py-2">
                        {isSubmitting ? 'Sending...' : (<><Send size={16} className="me-2"/> Send Message</>)}
                      </button>

                      <div className="d-flex gap-2">
                        {socialLinks.map((s, i) => {
                          const Icon = s.icon;
                          return (
                            <a key={i} href={s.href} target="_blank" rel="noreferrer" className="btn btn-outline-secondary rounded-circle p-0 d-inline-flex align-items-center justify-content-center" style={{ width: 40, height: 40, color: s.color, borderColor: s.color }}>
                              <Icon size={18} />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/*map*/}
          <div className="col-12">
            <div className="custom-card contact-map-container p-0 rounded-4 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d76.9757047!3d20.7099891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7317b81370bb3%3A0xe935e97e13ed4c5c!2sNazario!5e0!3m2!1sen!2sin!4v1753257518229!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nazario Location"
                style={{ width: '100%', height: '100%', border: 0 }}
              />
            </div>
          </div>
        </div>

        {/* Visit Our Store card */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="custom-card card border-0 rounded-4 p-4 p-lg-5 text-center">
              <h3 className="h4 fw-bold mb-4 text-dark">Visit Our Store</h3>
              <p className="text-muted mb-5">Experience our complete eyewear collection in person. Our expert opticians are ready to help you find the perfect frames and provide professional eye care services.</p>
              <div className="row g-4 justify-content-center">
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-10 mx-auto mb-3" style={{ width: 60, height: 60 }}>
                    <MapPin size={24} className="text-danger" />
                  </div>
                  <h5 className="h6 fw-bold text-dark">Easy to Find</h5>
                  <p className="small text-muted mb-0">Located in the heart of Renuka Nagar</p>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 mx-auto mb-3" style={{ width: 60, height: 60 }}>
                    <Phone size={24} className="text-success" />
                  </div>
                  <h5 className="h6 fw-bold text-dark">Quick Response</h5>
                  <p className="small text-muted mb-0">We respond to all inquiries within 24 hours</p>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 mx-auto mb-3" style={{ width: 60, height: 60 }}>
                    <Mail size={24} className="text-info" />
                  </div>
                  <h5 className="h6 fw-bold text-dark">Professional Service</h5>
                  <p className="small text-muted mb-0">Expert guidance for all your eyewear needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="custom-card card border-0 rounded-4 p-4 p-lg-5 text-center cta-section text-white">
              <h3 className="h4 fw-bold mb-3">Ready to Find Your Perfect Eyewear?</h3>
              <p className="mb-4 opacity-75">Book an appointment today for a comprehensive eye examination and personalized frame fitting.</p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a href="tel:+917447706777" className="btn btn-light btn-lg rounded-pill px-4 fw-semibold"><Phone size={18} className="me-2"/> Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
