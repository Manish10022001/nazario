import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/privacy.css";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container py-2">
          <section className="privacy-policy">
            <div className="pp-header text-center">
              <span className="last-updated">Last Updated: August 5, 2025</span>
              <h2>Privacy Policy</h2>
              <p>
                We value your privacy. This Privacy Policy explains how we
                collect, use, and protect your data when you interact with our
                services.
              </p>
            </div>
            <div className="pp-content-wrapper mx-auto">
              <div className="pp-content">
                <div id="data-collection" className="pp-section">
                  <h3>
                    1. Information We Collect{" "}
                    <i className="fas fa-database accent-icon me-2"></i>
                  </h3>
                  <p>
                    We collect personal details (e.g., name, contact info,
                    payment data) and technical data (e.g., IP address, device,
                    and browsing behavior) to enhance your experience.
                  </p>
                </div>
                <div id="use-of-data" className="pp-section">
                  <h3>
                    2. How We Use Your Data{" "}
                    <i className="fas fa-cogs accent-icon me-2"></i>
                  </h3>
                  <p>We use your data for various purposes, including:</p>
                  <ul className="pp-list">
                    <li>
                      To personalize your experience and improve our services
                    </li>
                    <li>
                      To communicate service updates, offers, or security alerts
                    </li>
                    <li>To process payments and manage accounts</li>
                    <li>To meet legal or regulatory obligations</li>
                  </ul>
                </div>
                <div id="cookies" className="pp-section">
                  <h3>
                    3. Cookies and Tracking{" "}
                    <i className="fas fa-cookie-bite accent-icon me-2"></i>
                  </h3>
                  <p>
                    We use cookies and tracking tools to enhance your
                    experience, improve functionality, and measure performance.
                  </p>
                </div>
                <div id="sharing-data" className="pp-section">
                  <h3>
                    4. Sharing Your Data{" "}
                    <i className="fas fa-share-alt accent-icon me-2"></i>
                  </h3>
                  <p>
                    We may share your data with verified third parties like
                    payment processors, analytics providers, or legal
                    authorities where necessary. We never sell your data.
                  </p>
                </div>
                <div id="transfers" className="pp-section">
                  <h3>
                    5. International Transfers{" "}
                    <i className="fas fa-globe accent-icon me-2"></i>
                  </h3>
                  <p>
                    Your data may be transferred and stored in countries outside
                    your own, but we ensure appropriate safeguards are in place
                    to protect your privacy.
                  </p>
                </div>
                <div id="retention" className="pp-section">
                  <h3>
                    6. Data Retention{" "}
                    <i className="fas fa-archive accent-icon me-2"></i>
                  </h3>
                  <p>
                    We retain personal data only as long as necessary for the
                    purpose it was collected, including legal or compliance
                    obligations.
                  </p>
                </div>
                <div id="security" className="pp-section">
                  <h3>
                    7. Data Security{" "}
                    <i className="fas fa-shield-alt accent-icon me-2"></i>
                  </h3>
                  <p>
                    We implement strong security practices, including
                    encryption, firewalls, and secure servers. However, no
                    method is 100% secure.
                  </p>
                  <div className="pp-alert-box">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <div className="pp-alert-content">
                      <h5>Disclaimer: No Guarantees</h5>
                      <p>
                        While we strive to use commercially acceptable means to
                        protect your personal data, we cannot guarantee its
                        absolute security.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="user-rights" className="pp-section">
                  <h3>
                    8. Your Rights{" "}
                    <i className="fas fa-user-shield accent-icon me-2"></i>
                  </h3>
                  <ul className="pp-list">
                    <li>Access or update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Withdraw consent or restrict processing</li>
                    <li>Port your data to another service</li>
                  </ul>
                </div>
                <div id="third-party-links" className="pp-section">
                  <h3>
                    9. Third-Party Links{" "}
                    <i className="fas fa-link accent-icon me-2"></i>
                  </h3>
                  <p>
                    Our website may contain links to external sites. We are not
                    responsible for their privacy policies or practices.
                  </p>
                </div>
                <div id="children" className="pp-section">
                  <h3>
                    10. Children’s Privacy{" "}
                    <i className="fas fa-child accent-icon me-2"></i>
                  </h3>
                  <p>
                    Our services are not intended for children under 18. If we
                    learn we’ve collected data from minors, we will promptly
                    delete it.
                  </p>
                </div>
                <div id="policy-changes" className="pp-section">
                  <h3>
                    11. Updates to This Policy{" "}
                    <i className="fas fa-sync-alt accent-icon me-2"></i>
                  </h3>
                  <p>We may update this Privacy Policy periodically.</p>
                </div>
                <div className="pp-update-box d-flex align-items-center p-3 rounded mt-3">
                  <div className="pp-update-icon me-3 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-bell"></i>
                  </div>
                  <div className="pp-update-text">
                    We encourage you to review this Policy periodically for any
                    changes.
                  </div>
                </div>
                <div className="pp-contact-section mt-5 p-4 rounded d-flex align-items-center">
                  <div className="pp-contact-icon me-3 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="mb-1">Contact Us</h4>
                    <p className="mb-3 text-muted pp-contact-message">
                      If you have any questions about this Policy, please
                      contact us.
                    </p>
                    <Link to="/contact" className="btn btn-lg px-4 contact-btn">
                      <i className="fa-solid fa-paper-plane me-2"></i> Send us
                      an Email
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
