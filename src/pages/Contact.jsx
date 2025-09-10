import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/contact.css";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Your message has been sent successfully! Thank you for contacting us."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Renuka Nagar, Akola, Maharashtra 444002",
      bgColor: "bg-danger bg-opacity-10",
      iconColor: "text-danger",
    },
    {
      icon: Mail,
      title: "Email",
      content: "support@nazario.tech",
      bgColor: "bg-info bg-opacity-10",
      iconColor: "text-info",
    },
    {
      icon: Phone,
      title: "Call",
      content: "+91 74477 06777",
      bgColor: "bg-success bg-opacity-10",
      iconColor: "text-success",
    },
    {
      icon: Clock,
      title: "Open Hours",
      content: "Monday-Friday: 9AM - 6PM",
      bgColor: "bg-warning bg-opacity-10",
      iconColor: "text-warning",
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <div className="contact-page">
        <Navbar />
      <div className="container py-2">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold contact-header mb-3">
            Get in Touch with Nazario
          </h1>
          <p
            className="lead mx-auto contact-description"
            style={{ maxWidth: "600px" }}
          >
            We're here to help you find the perfect eyewear. Reach out with any
            questions or visit us in-store for a personalized consultation.
          </p>
        </div>

        <div className="row g-4 g-lg-5">
          <div className="col-lg-7">
            <div className="row g-3 mb-5">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="col-sm-6">
                    <div className="custom-card card border-0 rounded-4 p-4 h-100">
                      <div className="d-flex align-items-start">
                        <div
                          className={`d-flex align-items-center justify-content-center rounded-3 me-3 ${item.bgColor}`}
                          style={{ width: "50px", height: "50px" }}
                        >
                          <IconComponent size={22} className={item.iconColor} />
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fw-bold mb-2 text-dark">
                            {item.title}
                          </h5>
                          <p className="mb-0 text-muted small">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="custom-card card border-0 rounded-4 p-4 p-lg-5">
              <div className="mb-4">
                <h3 className="h4 fw-bold text-dark ps-3 accent-border">
                  Get in Touch
                </h3>
              </div>

              {submitMessage && (
                <div className="alert alert-success d-flex align-items-center mb-4 rounded-3">
                  <Send size={20} className="me-2" />
                  {submitMessage}
                </div>
              )}

              <div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded-3 py-3"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded-3 py-3"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control rounded-3 py-3"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mt-3">
                  <textarea
                    name="message"
                    className="form-control rounded-3"
                    rows="5"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    style={{ minHeight: "140px", padding: "1rem" }}
                  />
                </div>

                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between mt-4 gap-3">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary rounded-pill px-4 py-2 fw-semibold d-flex align-items-center"
                    disabled={isSubmitting}
                    style={{ letterSpacing: "0.5px" }}
                  >
                    {isSubmitting ? (
                      <>
                        <div
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="me-2" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Social Links */}
                  <div className="d-flex gap-2">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="btn btn-outline-secondary rounded-circle p-2 social-link"
                          title={social.label}
                          style={{ width: "38px", height: "38px" }}
                        >
                          <IconComponent size={16} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div
                className="custom-card contact-map-container"
                style={{ height: "600px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d76.9757047!3d20.7099891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7317b81370bb3%3A0xe935e97e13ed4c5c!2sNazario!5e0!3m2!1sen!2sin!4v1753257518229!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nazario Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="custom-card card border-0 rounded-4 p-4 p-lg-5 text-center">
              <h3 className="h4 fw-bold mb-4 text-dark">Visit Our Store</h3>
              <p className="text-muted mb-5">
                Experience our complete eyewear collection in person. Our expert
                opticians are ready to help you find the perfect frames and
                provide professional eye care services.
              </p>
              <div className="row g-4 justify-content-center">
                <div className="col-md-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-10 mx-auto mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <MapPin size={24} className="text-danger" />
                  </div>
                  <h5 className="h6 fw-bold text-dark">Easy to Find</h5>
                  <p className="small text-muted mb-0">
                    Located in the heart of Renuka Nagar
                  </p>
                </div>
                <div className="col-md-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 mx-auto mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <Phone size={24} className="text-success" />
                  </div>
                  <h5 className="h6 fw-bold text-dark">Quick Response</h5>
                  <p className="small text-muted mb-0">
                    We respond to all inquiries within 24 hours
                  </p>
                </div>
                <div className="col-md-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 mx-auto mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <Mail size={24} className="text-info" />
                  </div>
                  <h5 className="h6 fw-bold text-dark">Professional Service</h5>
                  <p className="small text-muted mb-0">
                    Expert guidance for all your eyewear needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="custom-card card border-0 rounded-4 p-4 p-lg-5 text-center cta-section text-white">
              <h3 className="h4 fw-bold mb-3">
                Ready to Find Your Perfect Eyewear?
              </h3>
              <p className="mb-4 opacity-75">
                Book an appointment today for a comprehensive eye examination
                and personalized frame fitting.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button className="btn btn-light btn-lg rounded-pill px-4 fw-semibold">
                  <Phone size={18} className="me-2" />
                  Call Now
                </button>
                <button className="btn btn-outline-light btn-lg rounded-pill px-4 fw-semibold">
                  <Mail size={18} className="me-2" />
                  Email Us
                </button>
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
