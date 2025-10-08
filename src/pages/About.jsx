import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/About.css";
import aboutImage from "../assets/img/about/image.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Data for the enhanced commitment section
const CommitmentData = [
  {
    icon: "🚚",
    title: "Free Shipping",
    text: "Across all orders, no minimum purchase required. Fast and tracked delivery.",
  },
  {
    icon: "⭐",
    title: "Top-Rated Reviews",
    text: "Join thousands of happy customers with 5-star reviews. Quality assurance guaranteed.",
  },
  {
    icon: "📞",
    title: "Best Customer Service",
    text: "Our dedicated team is here 24/7 to assist you with a smile. We make it easy.",
  },
  {
    icon: "🏆",
    title: "#1 Online Eyewear Retailer",
    text: "Recognized for our quality, design, and service excellence.",
  },
  {
    icon: "📦",
    title: "30-Day Return Policy",
    text: "Shop with confidence, easy and hassle-free returns.",
  },
  {
    icon: "🛠️",
    title: "Handcrafted Quality",
    text: "Every pair is a testament to our commitment to detailed, expert craftsmanship.",
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    journey: false,
    mission: false,
    services: false,
  });

  const aboutRef = useRef(null);
  const journeyRef = useRef(null);
  const missionRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetKey = entry.target.dataset.key;
            setIsVisible((prev) => ({ ...prev, [targetKey]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (journeyRef.current) observer.observe(journeyRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-page">
        <Container className="py-5">
          {/* --- Section 1: About Nazario (Hero) --- */}

          <Container className="full-width-hero-container mb-5">
            <div className="hero-image-banner">
              <Row className="justify-content-center w-100">
                <Col md={10} lg={8}>
                  <h1 className="display-3 fw-bold about-title">
                    A New Vision in Eyewear.
                  </h1>
                  <p className="lead mt-4">
                    <span className="fw-bold">Nazario</span> is where
                    craftsmanship meets self-expression.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>

          <hr className="my-5" />

          {/* --- Section 2: Core Philosophy --- */}
          <Row
            ref={aboutRef}
            data-key="about"
            className={`mb-5 p-4 ${
              isVisible.about ? "fade-in-section is-visible" : "fade-in-section"
            }`}
          >
            <Col lg={6} className="mb-4 mb-lg-0 align-self-center">
              <h2 className="section-heading mb-3 ">About Nazario</h2>
              <p className="text-justify">
                Welcome to <b>Nazario</b>, a new vision in eyewear. We believe
                that glasses are not just a tool for sight, but an expression of
                your <b>unique personality</b>. Our mission is to provide{" "}
                <b>handcrafted, stylish, and high-quality eyewear</b> that
                empowers you to see and be seen in the most authentic way. Every
                pair is a testament to our commitment to craftsmanship and your
                perfect fit. We are driven by a passion for design and a
                relentless pursuit of customer satisfaction, ensuring a seamless
                and enjoyable shopping experience from start to finish.
              </p>
            </Col>
            <Col lg={6}>
              <div className="about-image-placeholder hover-zoom-effect">
                <img
                  src={aboutImage}
                  alt="Handcrafted eyewear on a table with a designer working"
                  className="img-fluid nazario-about-img"
                />
                <p className="image-caption">Crafted for Clarity & Style</p>
              </div>
            </Col>
          </Row>

          <hr className="my-5" />
          {/* --- Section: Our Philosophy --- */}
          <Row className="mb-5">
            <Col>
              <div className="section-card p-5 text-center">
                <h2 className="section-title mb-4">Our Philosophy</h2>
                <p className="section-description">
                  At Nazario, we believe that eyewear is more than just a tool
                  for vision—it's a canvas for self-expression. Our philosophy
                  is rooted in combining expert craftsmanship with modern design
                  to create glasses that empower, inspire, and reflect the
                  unique personality of every individual.
                </p>
              </div>
            </Col>
          </Row>

          {/* --- Section 3: Mission & Vision ( --- */}
          <div className="mission-vision-banner py-5 mb-5 text-white">
            <Container
              ref={missionRef}
              data-key="mission"
              className={`text-center ${
                isVisible.mission
                  ? "fade-in-section is-visible"
                  : "fade-in-section"
              }`}
            >
              <Row>
                <Col md={6} className="mb-4 mb-md-0">
                  <h3 className="mb-3 mission-title">Our Mission</h3>
                  <p className="lead">
                    To democratize design-led eyewear by connecting skilled
                    artisans with style-conscious individuals globally, one
                    perfect frame at a time.
                  </p>
                </Col>
                <Col md={6}>
                  <h3 className="mb-3 vision-title">Our Vision</h3>
                  <p className="lead">
                    To be the world’s most trusted online destination for
                    premium, sustainable, and personalized eyewear that
                    celebrates individuality.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>

          {/* --- Section 5: The Nazario Difference (Enhanced Customer Services) --- */}
          <Row
            ref={servicesRef}
            data-key="services"
            className={`text-center ${
              isVisible.services
                ? "fade-in-section is-visible"
                : "fade-in-section"
            }`}
          >
            <Col>
              <h2 className="section-heading mb-4">The Nazario Difference</h2>
              <p className="lead text-muted mb-5">
                Exceptional quality is just the beginning. Shop with clarity and
                confidence.
              </p>
            </Col>
            <Row className="g-4">
              {CommitmentData.map((item, index) => (
                <Col md={4} key={index}>
                  <Card className="commitment-card p-4 shadow-sm h-100 hover-grow-shadow-accent">
                    <div className="icon-circle mb-3">{item.icon}</div>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;
