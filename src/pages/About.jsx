import React from "react";
// import "../styles/About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Riddhish Joshi",
      role: "Chief Executive Officer",
      quote:
        "Nazario is more than eyewear; it's about seeing the world with confidence and style. We're dedicated to this vision.",
      image:
        "https://img.freepik.com/free-photo/young-attractive-man-classic-suit-straightens-his-tie_171337-9532.jpg",
    },
    {
      name: "Raj Patil",
      role: "Head of Operations",
      quote:
        "Our streamlined operations ensure every pair of glasses reaches you perfectly. We believe in efficiency and excellence.",
      image:
        "https://www.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg",
    },
    {
      name: "Ruchi",
      role: "Creative Director",
      quote:
        "Designing for Nazario is a blend of global trends and timeless Indian elegance. Each piece tells a story of craftsmanship.",
      image:
        "https://www.shutterstock.com/image-photo/young-woman-formal-clothes-on-260nw-1081627103.jpg",
    },
    {
      name: "Dev Sharma",
      role: "Customer Relations Lead",
      quote:
        "Our customers are at the heart of everything we do. We strive to provide a service experience as exceptional as our products.",
      image:
        "https://static.vecteezy.com/system/resources/previews/033/129/417/non_2x/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg",
    },
  ];

  const servicePoints = [
    {
      icon: "https://www.freeiconspng.com/uploads/free-shipping-fast-icon-png-26.png",
      title: "Free Shipping",
      desc: "Across all orders, no minimum purchase required.",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIIlbkJw9QTGUYGmCYdsck32hbzVFv_mCLw&s",
      title: "Top-Rated Reviews",
      desc: "Join thousands of happy customers with 5-star reviews.",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsuOGFGefSyGNkyYP_fQfulPqoelcrJU-Pw&s",
      title: "Best Customer Service",
      desc: "Our team is here 24/7 to assist you with a smile.",
    },
    {
      icon: "🏆",
      title: "#1 Online Eyewear Retailer",
      desc: "Recognized for our quality, design, and service excellence.",
    },
    {
      icon: "📦",
      title: "30-Day Return Policy",
      desc: "Shop with confidence, easy and hassle-free returns.",
    },
  ];

  const handleError = (e, placeholderText) => {
    e.target.onerror = null;
    e.target.src = `https://placehold.co/100x100/${
      e.target.dataset.bgcolor || "DCD7C9"
    }/${e.target.dataset.textcolor || "203639"}?text=${placeholderText}`;
  };

  return (
    <>
      <Navbar />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap');

          :root {
            --inkwell: #203639;
            --au-lait: #DCD7C9;
          }

          .navbar {
            height: 50px;
            padding: 0.3rem 1rem;
          }

          .navbar .icon {
            font-size: 1rem;
            height: 1rem;
            width: 1rem;
          }

          .desktop-search {
            width: 250px;
          }

          .navbar-nav {
            margin-left: -1rem;
          }

          .desktop-search .search-input {
            padding: 0.2rem 2.5rem 0.2rem 1rem;
          }

          .section-card {
            background-color: var(--au-lait);
            color: var(--inkwell);
            border-radius: 0.75rem;
            padding: 2rem;
            margin-bottom: 3rem;
            transition: transform 0.3s ease, border 0.3s ease;
            border: 4px solid var(--au-lait);
          }

          .section-title {
            font-size: 2.25rem;
            font-weight: 800;
            margin-bottom: 1rem;
            text-align: center;
          }

          .section-description {
            font-size: 1.125rem;
            font-weight: 300;
            text-align: center;
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
          }

          .journey-timeline {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            gap: 3rem;
          }

          @media (min-width: 768px) {
            .journey-timeline {
              flex-direction: row;
            }
          }

          .journey-point {
            position: relative;
            z-index: 10;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .journey-point-dot {
            width: 2rem;
            height: 2rem;
            border-radius: 9999px;
            background-color: var(--inkwell);
            border: 4px solid var(--au-lait);
            margin-bottom: 1rem;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }

          .journey-point:hover .journey-point-dot {
            background-color: var(--au-lait);
            border-color: var(--inkwell);
          }

          .journey-year {
            font-size: 1.875rem;
            font-weight: 700;
          }

          .mission-vision-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 2rem;
          }
          
          @media (min-width: 768px) {
            .mission-vision-container {
              flex-direction: row;
            }
          }

          .mission-vision-card {
            width: 100%;
            background-color: white;
            padding: 1.5rem;
            border-radius: 0.5rem;
            transition: transform 0.3s ease;
          }
          
          @media (min-width: 768px) {
            .mission-vision-card {
              width: 50%;
            }
          }

          .mission-vision-card:hover {
            transform: scale(1.05);
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 1.5rem;
          }
          
          @media (min-width: 640px) {
            .grid-container {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (min-width: 1024px) {
            .grid-container {
              grid-template-columns: repeat(5, minmax(0, 1fr));
            }
          }
          
          .grid-card {
            padding: 1rem;
            background-color: white;
            border-radius: 0.5rem;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .grid-card:hover {
            transform: scale(1.05);
          }

          .icon {
            width: 3rem;
            height: 3rem;
            margin: 0 auto 0.5rem;
            filter: grayscale(100%);
            transition: filter 0.3s ease;
          }

          .icon:hover {
            filter: grayscale(0%);
          }

          .large-icon {
            font-size: 3.5rem;
            margin-bottom: 0.5rem;
          }

          .team-container {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .team-container {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (min-width: 1024px) {
            .team-container {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
          }

          .team-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1rem;
            background-color: white;
            border-radius: 0.5rem;
            transition: transform 0.3s ease;
          }

          .team-card:hover {
            transform: scale(1.05);
          }

          .team-image {
            width: 9rem;
            height: 9rem;
            border-radius: 9999px;
            object-fit: cover;
            margin-bottom: 1rem;
            border: 2px solid var(--au-lait);
          }

          .w-12 {
            width: 3rem;
          }
          .h-12 {
            height: 3rem;
          }
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes pulse {
            50% {
              opacity: .5;
            }
          }
          .transform {
            /* This is a utility class for enabling transforms in frameworks like Tailwind */
          }
          .scale-x-150 {
            transform: scaleX(1.5);
          }
          .animate-bounce {
            animation: bounce 1s infinite;
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(-25%);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }
        `}
      </style>
      <div className="main-container">
        <main className="container mt-4">
          <section className="section-card">
            <h2 className="section-title">About Nazario</h2>
            <p className="section-description">
              Welcome to Nazario, a new vision in eyewear. We believe that
              glasses are not just a tool for sight, but an expression of your
              unique personality. Our mission is to provide handcrafted,
              stylish, and high-quality eyewear that empowers you to see and be
              seen in the most authentic way. Every pair is a testament to our
              commitment to craftsmanship and your perfect fit. We are driven by
              a passion for design and a relentless pursuit of customer
              satisfaction, ensuring a seamless and enjoyable shopping
              experience from start to finish.
            </p>
          </section>

          <section className="section-card">
            <h2 className="section-title">Our Journey</h2>
            <div className="journey-timeline">
              <div className="journey-point">
                <div className="journey-point-dot"></div>
                <h3 className="journey-year">2023</h3>
                <p className="mt-2 text-inkwell text-center max-w-xs font-light">
                  Founded in Mumbai with a small team and a big dream to
                  redefine online eyewear retail. We launched our first
                  collection of handmade frames.
                </p>
              </div>

              <div className="journey-point">
                <div className="journey-point-dot"></div>
                <h3 className="journey-year">2024</h3>
                <p className="mt-2 text-inkwell text-center max-w-xs font-light">
                  Expanded our product line to include sunglasses and
                  prescription lenses. Our virtual try-on feature revolutionized
                  the customer shopping experience.
                </p>
              </div>

              <div className="journey-point">
                <div className="journey-point-dot"></div>
                <h3 className="journey-year">2025</h3>
                <p className="mt-2 text-inkwell text-center max-w-xs font-light">
                  Became a leading online eyewear retailer in India, with a
                  growing community of loyal customers and a commitment to
                  sustainability.
                </p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2 className="section-title">Mission & Vision</h2>
            <div className="mission-vision-container">
              <div className="mission-vision-card">
                <h3 className="text-2xl font-bold mb-2 text-center text-inkwell">
                  Our Mission
                </h3>
                <p className="text-inkwell text-center font-light">
                  To provide accessible, affordable, and high-quality eyewear
                  that combines innovative design with exceptional comfort, all
                  while maintaining a seamless online shopping experience.
                </p>
              </div>
              <div className="mission-vision-card">
                <h3 className="text-2xl font-bold mb-2 text-center text-inkwell">
                  Our Vision
                </h3>
                <p className="text-inkwell text-center font-light">
                  To be the number one online eyewear destination, empowering
                  individuals to express their unique identity through
                  fashionable and functional eyewear.
                </p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2 className="section-title">Customer Services</h2>
            <div className="grid-container">
              {servicePoints.map((point, index) => (
                <div key={index} className="grid-card">
                  {point.icon.startsWith("http") ? (
                    <img
                      src={point.icon}
                      alt={point.title}
                      className="icon"
                      onError={(e) =>
                        handleError(e, point.title.replace(/ /g, "+"))
                      }
                    />
                  ) : (
                    <div className="large-icon">{point.icon}</div>
                  )}
                  <h3 className="text-xl font-bold text-inkwell">
                    {point.title}
                  </h3>
                  <p className="text-sm text-inkwell font-light">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-card">
            <h2 className="section-title">Meet the Team</h2>
            <div className="team-container">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <img
                    src={member.image}
                    alt={`${member.name}'s profile`}
                    className="team-image"
                    data-bgcolor="DCD7C9"
                    data-textcolor="203639"
                    onError={(e) =>
                      handleError(e, member.name.replace(/ /, "+"))
                    }
                  />
                  <h3 className="text-xl font-bold text-inkwell">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-inkwell mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-inkwell font-light">
                    "{member.quote}"
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;
