import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/terms.css";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container py-2">
          <section className="terms-of-service">
            <div className="tos-header text-center">
              <span className="last-updated">Last Updated: August 8, 2025</span>
              <h2>Terms of Service</h2>
              <p>
                Please read these terms and conditions carefully before using
                our service. By accessing or using our service, you agree to be
                bound by these terms.
              </p>
            </div>

            <div className="tos-content-wrapper mx-auto">
              <div className="tos-content">
                <div id="introduction" className="content-section">
                  <h3>
                    1. Introduction{" "}
                    <i className="fas fa-handshake accent-icon me-2"></i>{" "}
                  </h3>
                  <p>
                    Welcome to our service. These Terms of Service explain the
                    rules for using our website and services. By using our
                    website, you agree to follow these rules. They apply to
                    everyone who visits or uses our service.
                  </p>
                </div>
                <div id="user-accounts" className="content-section">
                  <h3>
                    2. User Accounts{" "}
                    <i className="fas fa-user-shield accent-icon me-2"></i>
                  </h3>
                  <p>
                    When you create an account with us, you must provide
                    accurate, complete, and up-to-date information. If you fail
                    to do so, it may be considered a breach of these Terms and
                    could lead to the immediate termination of your account.
                  </p>
                  <p>
                    You are responsible for keeping your password secure and for
                    all activity that happens under your account. You agree not
                    to share your password with anyone else.
                  </p>
                  <div className="info-box">
                    <i className="fa-solid fa-circle-info"></i>
                    <p>
                      <strong>Important Note:</strong> Please notify us
                      immediately if you become aware of any security breach or
                      unauthorized use of your account.
                    </p>
                  </div>
                </div>
                <div id="products-and-pricing" className="content-section">
                  <h3>
                    3. Products, Pricing, and Availability{" "}
                    <i className="fas fa-tags accent-icon me-2"></i>
                  </h3>
                  <p>
                    All products listed on our service are subject to
                    availability. We reserve the right to update or change our
                    product selection, pricing, and sales terms at any time
                    without prior notice. While we strive to provide accurate
                    and up-to-date information—including product descriptions
                    and prices—we cannot guarantee that all content is always
                    accurate, complete, reliable, or error-free.
                  </p>
                  <p>
                    In the event of a pricing error, we reserve the right to
                    cancel any orders placed at the incorrect price.
                  </p>
                </div>
                <div id="product-warranty" className="content-section">
                  <h3>
                    4. Product Warranty{" "}
                    <i className="fas fa-shield-halved accent-icon me-2"></i>
                  </h3>
                  <p>
                    We guarantee that all products sold through our service will
                    be free from defects in material and workmanship for a
                    period of 1 year from the date of purchase. This warranty
                    does not cover damage resulting from misuse, accidents, or
                    normal wear and tear.
                  </p>
                </div>
                <div id="prescription-verification" className="content-section">
                  <h3>
                    5. Prescription Verification{" "}
                    <i className="fas fa-glasses accent-icon me-2"></i>
                  </h3>
                  <p>
                    If you are purchasing prescription eyewear, you represent
                    and warrant that the prescription information you provide is
                    accurate and current. We may contact your eye care
                    professional to verify your prescription. You are
                    responsible for ensuring that your prescription is valid and
                    not expired. We are not liable for any issues arising from
                    incorrect or expired prescriptions provided by you.
                  </p>
                </div>
                <div id="orders-and-payment" className="content-section">
                  <h3>
                    6. Orders and Payment{" "}
                    <i className="fas fa-credit-card accent-icon me-2"></i>
                  </h3>
                  <p>
                    By placing an order, you agree to provide current, complete,
                    and accurate purchase and account information. You agree to
                    promptly update your account and other information,
                    including your email address and credit card numbers and
                    expiration dates, so that we can complete your transactions
                    and contact you as needed.
                  </p>
                  <p>
                    All payments are subject to validation checks and
                    authorization by the card issuer. If the issuer of your
                    payment card refuses to authorize payment, we will not be
                    liable for any delay or non-delivery.
                  </p>
                </div>
                <div id="shipping-and-delivery" className="content-section">
                  <h3>
                    7. Shipping and Delivery{" "}
                    <i className="fas fa-truck-fast accent-icon me-2"></i>
                  </h3>
                  <p>
                    We will ship products to the address provided by you.
                    Shipping and delivery times are estimates and not
                    guarantees. We are not responsible for delays in shipping
                    caused by factors beyond our control, such as carrier
                    delays, customs procedures, or natural disasters. Risk of
                    loss and title for items purchased from us pass to you upon
                    our delivery to the carrier.
                  </p>
                </div>
                <div id="returns-and-refunds" className="content-section">
                  <h3>
                    8. Returns, Refunds, and Exchanges{" "}
                    <i className="fas fa-rotate-left accent-icon me-2"></i>
                  </h3>
                  <p>
                    We want you to be completely satisfied with your purchase.
                    If for any reason you are not satisfied, you may be eligible
                    for a return, refund, or exchange in accordance with our
                    separate Return Policy, which is available on our website.
                  </p>
                </div>
                <div id="user-generated-content" className="content-section">
                  <h3>
                    9. User-Generated Content{" "}
                    <i className="fas fa-comments accent-icon me-2"></i>
                  </h3>
                  <p>
                    You may have the opportunity to post reviews, comments,
                    photos, or other content ("User Content") on the Service. By
                    posting User Content, you grant us a non-exclusive,
                    worldwide, royalty-free, perpetual, and irrevocable license
                    to use, reproduce, modify, and display your User Content in
                    connection with the Service and our marketing efforts.
                  </p>
                </div>
                <div id="visual-disclaimers" className="content-section">
                  <h3>
                    10. Visual Disclaimers{" "}
                    <i className="fas fa-eye accent-icon me-2"></i>
                  </h3>
                  <p>
                    We have made every effort to display the colors and images
                    of our products as accurately as possible. However, we
                    cannot guarantee that your device's display of any color
                    will be accurate. Product dimensions and virtual try-on
                    features are for illustrative purposes only and may not be
                    an exact representation of the final product.
                  </p>
                </div>
                <div id="intellectual-property" className="content-section">
                  <h3>
                    11. Intellectual Property{" "}
                    <i className="fas fa-copyright accent-icon me-2"></i>
                  </h3>
                  <p>
                    The Service and its original content, features, and
                    functionality are and will remain the exclusive property of
                    our company and its licensors. The Service is protected by
                    copyright, trademark, and other laws of both the country and
                    foreign countries.
                  </p>
                  <ul className="list-items">
                    <li>
                      All logos, trademarks, and service marks are owned by us.
                    </li>
                    <li>
                      You may not use our intellectual property without our
                      prior written consent.
                    </li>
                    <li>
                      Any unauthorized use of materials is strictly prohibited.
                    </li>
                  </ul>
                </div>
                <div id="prohibited-uses" className="content-section">
                  <h3>
                    12. Prohibited Uses{" "}
                    <i className="fas fa-ban icon-small accent-icon"></i>{" "}
                  </h3>
                  <p>
                    You are allowed to use the Service only for legal purposes
                    and must follow all applicable laws and rules.
                  </p>
                  <div className="prohibited-list">
                    <div className="prohibited-item">
                      <i className="fa-solid fa-triangle-exclamation"></i>
                      <span>
                        Do anything that interferes with others' use of the
                        Service.
                      </span>
                    </div>
                    <div className="prohibited-item">
                      <i className="fa-solid fa-triangle-exclamation"></i>
                      <span>
                        Pretend to be our company, an employee, or someone else.
                      </span>
                    </div>
                    <div className="prohibited-item">
                      <i className="fa-solid fa-triangle-exclamation"></i>
                      <span>
                        Uploading, posting, or transmitting any viruses,
                        malware, or other malicious code.
                      </span>
                    </div>
                    <div className="prohibited-item">
                      <i className="fa-solid fa-triangle-exclamation"></i>
                      <span>
                        Collect other users' information without their
                        permission.
                      </span>
                    </div>
                  </div>
                </div>
                <div id="termination" className="content-section">
                  <h3>
                    13. Termination{" "}
                    <i className="fas fa-user-slash icon-small accent-icon"></i>
                  </h3>
                  <p>
                    We may terminate or suspend your account immediately,
                    without prior notice or liability, for any reason
                    whatsoever, including without limitation if you breach the
                    Terms. Upon termination, your right to use the Service will
                    immediately cease.
                  </p>
                  <div className="alert-box">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <div className="alert-content">
                      <h5>Warning: Account Termination</h5>
                      <p>
                        If your account is terminated, we reserve the right to
                        delete your data and content without any further notice.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accessibility" className="content-section">
                  <h3>
                    14. Accessibility{" "}
                    <i className="fas fa-universal-access icon-small accent-icon"></i>
                  </h3>
                  <p>
                    We are committed to providing a website that is accessible
                    to the widest possible audience.
                  </p>
                </div>
                <div id="disclaimer" className="content-section">
                  <h3>
                    15. Disclaimer{" "}
                    <i className="fas fa-exclamation-triangle icon-small accent-icon"></i>
                  </h3>
                  <div className="disclaimer-box list-items">
                    <p>
                      The Service is provided on an "AS IS" and "AS AVAILABLE"
                      basis. We make no warranties, express or implied.
                    </p>
                    <ul>
                      <li>
                        The Service may not be uninterrupted or error-free.
                      </li>
                      <li>
                        We do not warrant that the Service is free of viruses or
                        other harmful components.
                      </li>
                      <li>Any content downloaded is at your own risk.</li>
                    </ul>
                  </div>
                </div>

                <div className="terms-update-box d-flex align-items-center p-3 rounded mt-3">
                  <div className="terms-icon me-3 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-bell"></i>
                  </div>
                  <div className="terms-text">
                    We encourage you to review these Terms periodically for any
                    changes.
                  </div>
                </div>
                <div className="contact-section mt-5 p-4 rounded d-flex align-items-center">
                  <div className="contact-icon me-3 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="mb-1">Contact Us</h4>
                    <p className="mb-3 text-muted contact-message">
                      If you have any questions about these Terms, please
                      contact us.
                    </p>
                    <a
                      href="mailto:contact@example.com"
                      className="btn btn-lg px-4 contact-btn"
                    >
                      <i className="fa-solid fa-paper-plane me-2"></i> Send us
                      an Email
                    </a>
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

export default TermsOfService;
