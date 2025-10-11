import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer position-relative"
      style={{
        backgroundColor: "#fff200",
        color: "#000000ff",
        fontSize: 14,
      }}
    >
      <Container
        fluid
        className="footer-top border-top border-secondary pt-4 pb-5"
      >
        <Row className="gy-4">
          <Col lg={5} md={12} className="footer-about">
            <Nav.Link
              as={Link}
              to="/home"
              className="d-flex align-items-center mb-3 text-decoration-none"
            >
              <span
                className="sitename fw-bold"
                style={{
                  fontSize: 26,
                  color: "white",
                  fontFamily: "var(--heading-font)",
                  letterSpacing: 1,
                }}
              >
                NAZARIO
              </span>
            </Nav.Link>
            <p style={{ fontFamily: "var(--heading-font)" }}>
              Redefining vision with tech. Nazario SSO makes sign-in seamless,
              secure, and seriously smart — because your users deserve better.
            </p>
            <div className="social-links d-flex mt-3">
              {["twitter-x", "facebook", "instagram", "linkedin"].map(
                (icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="d-flex align-items-center justify-content-center me-2"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      color: "rgba(18, 18, 18, 0.5)",
                      transition: "0.3s",
                      fontSize: 16,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--Au-Lait)";
                      e.currentTarget.style.borderColor = "var(--Au-Lait)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(18, 18, 18, 0.5)";
                      e.currentTarget.style.borderColor =
                        "rgba(255, 255, 255, 0.3)";
                    }}
                  >
                    <i className={`bi bi-${icon}`}></i>
                  </a>
                )
              )}
            </div>
          </Col>

          <Col lg={2} xs={6} className="footer-links">
            <h4 className="fw-bold mb-3">Quick Links</h4>
            <Nav className="flex-column">
              {["Home", "About us", "Services"].map((item) => (
                <Nav.Link
                  key={item}
                  href="#"
                  className="px-0"
                  style={{ color: "rgba(18, 18, 18, 0.5)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--Au-Lait)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(18, 18, 18, 0.5)")
                  }
                >
                  {item}
                </Nav.Link>
              ))}
              {/* Use Link for Terms and Privacy */}
              <Nav.Link
                as={Link}
                to="/terms"
                className="px-0"
                style={{ color: "rgba(18, 18, 18, 0.5)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--Au-Lait)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(18, 18, 18, 0.5)")
                }
              >
                Terms of Service
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/privacy"
                className="px-0"
                style={{ color: "rgba(18, 18, 18, 0.5)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--Au-Lait)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(18, 18, 18, 0.5)")
                }
              >
                Privacy Policy
              </Nav.Link>
            </Nav>
          </Col>

          <Col lg={2} xs={6} className="footer-links">
            <h4 className="fw-bold mb-3">Eyewear Collection</h4>
            <Nav className="flex-column">
              {[
                "Blue Light Glasses",
                "Sunglasses",
                "Prescription Eyewear",
                "Reading Glasses",
                "Kids & Teens",
              ].map((item) => (
                <Nav.Link
                  key={item}
                  href="#"
                  className="px-0"
                  style={{ color: "rgba(18, 18, 18, 0.5)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--Au-Lait)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(18, 18, 18, 0.5)")
                  }
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Col>

          <Col
            lg={3}
            md={12}
            className="footer-contact text-center text-md-start"
          >
            <h4 className="fw-bold mb-3">Get in Touch</h4>
            <p>Baner, Pune</p>
            <p>Maharashtra, IN 411045</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>+91 74477 06777</span>
            </p>
            <p>
              <strong>Email:</strong> <span>support@nazario.tech</span>
            </p>
          </Col>
        </Row>
      </Container>;

      <Container
        className="copyright text-center py-3"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      >
        <p className="mb-1" style={{ fontSize: 13 }}>
          © 2025 <strong className="px-1 sitename">Nazario</strong> All rights
          reserved
        </p>
        <div className="credits" style={{ fontSize: 12 }}>
          Built with ❤️ by the{" "}
          <a href="#" style={{ color: "var(--Au-Lait)" }}>
            Inovite Team
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
