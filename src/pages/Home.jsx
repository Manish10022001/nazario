import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [currentTrendingIndex, setCurrentTrendingIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("men");
  const bestsellerCarouselRef = useRef(null);

  const bannerImages = [
    "https://s.alicdn.com/@sc04/kf/H45960f0a064d471ca4a2f82014390446D/147-Shiny-Anti-Blue-Light-Glasses-Computer-Metal-Girls-Designer-Optical-Wholesale-Eyewear-Frame-Spectacle-Eyeglasses-Frame.jpeg",
    "https://c1.wallpaperflare.com/preview/87/543/579/eyeglasses-eyewear-table-dark.jpg",
    "https://sc04.alicdn.com/kf/Hd358a333fe4642de9ea6bd45ec157315j.jpg",
    "https://res.ygstatic.com/lifestyle/e16725/2.1800.1732672682-366.jpg",
    "https://res.ygstatic.com/lifestyle/e15542/1.1800.1690283522-db7.jpg",
    "https://res.ygstatic.com/lifestyle/e14014/2.1800.1646981045-6c4.jpg",
  ];

  const menCategoryImages = [
    "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-match-sunglasses--Z1414W_PM1_Cropped%20worn%20view.jpg",
    "https://9f8e62d4.delivery.rocketcdn.me/wp-content/uploads/2023/07/Glasses-for-Oval-shape.jpg",
    "https://i.pinimg.com/736x/ab/c2/fd/abc2fdc6dfea08a7bff4359e48255a96--eyeglasses-for-men-frames-mens-eyeglasses.jpg",
  ];

  const womenCategoryImages = [
    "https://img.freepik.com/premium-photo/woman-wearing-glasses-sweater-is-standing-front-window_1311488-11416.jpg",
    "https://www.brides.com/thmb/4go50tez1zp2IfYTo9oOAdrOAsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bridewearingglasses1-f46fff2cc5374e07b3f150805bc794f5.jpg",
    "https://i.pinimg.com/236x/1c/c0/ab/1cc0ab69696e63a3a68501b9cc18e533.jpg",
  ];

  const trendingOffersImages = [
    "https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-harrypotter-16sep25.png",
    "https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-hustlr-16sep25.png",
    "https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/ft-media/wysiwyg/Contact_Lens_and_SG-125.jpg",
    "https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/ft-media/wysiwyg/Desktop.jpg",
    "https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/ft-media/wysiwyg/FT_SG_-_20_Off-67_1_.jpg",
    "https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/ft-media/wysiwyg/SG_Web-banners_1400X400_1_.png",
  ];

  const bestsellerImages = [
    "https://funkytradition.com/cdn/shop/files/1_2018-Pilot-Glasses-Men-s-Sunglasses-Car-Drivers-Night-Vision-Goggles-Anti-Glare-Sun-glasses-Women_111789d0-8e15-4387-afcd-4f315687802a.jpg?v=1723509570",
    "https://i.pinimg.com/564x/b7/9c/f9/b79cf9f25cd4667f979be301b39642cf.jpg",
    "https://images.unsplash.com/photo-1524255684952-d7185b509571?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3NlcyUyMG1vZGVsfGVufDB8fDB8fHww",
    "https://i.pinimg.com/736x/06/e0/fb/06e0fbcb82695a145d7877f9cd248692.jpg",
    "https://sunglassescraft.com/cdn/shop/products/brovo-2020-alloy-round-glasses-frame-wo_main-0_840b6581-9871-4dec-9b0d-8f470bc29668_800x.jpg?v=1607533773",
    "https://sc04.alicdn.com/kf/H7dad7d23f9e144e2bc54264b6144a505J.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fbMUHPp9h76lAE1vpw2xsDd8PIuv4IZqeA&s",
    "https://down-sg.img.susercontent.com/file/sg-11134201-7qvdh-li4a0hv13gj7b5",
  ];

  const framesProvidedImages = [
    {
      name: "Round",
      url: "https://www.bantonframeworks.co.uk/cdn/shop/articles/Linea_G_Stratus_Mauve.jpg?v=1710523030",
    },
    {
      name: "Square",
      url: "https://eyejack.in/cdn/shop/files/1002CL646_2.jpg?v=1745666239",
    },
    {
      name: "Rectangle ",
      url: "https://sunglassic.com/cdn/shop/products/2_5807ed40-0d8d-45bc-9305-f44f4c8b6f97.jpg?v=1629992539&width=2048",
    },
    {
      name: "Avaitor",
      url: "https://royaltail.in/cdn/shop/files/royaltail-eyewear-brown-polerised-sunglasses-rt-sung-011-1-min.jpg?v=1715686294&width=1080",
    },
    {
      name: "Browline",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQw76sy-ykz07j8iN9adOF8TpS_7I81Qy5Q9IjnQnOQsRcjtVP-U7Mi3ELJZGi-xtTPo&usqp=CAU",
    },
    {
      name: "cateye",
      url: "https://m.media-amazon.com/images/I/61weJs6oGhL._UY350_.jpg",
    },
  ];

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 3000);

    return () => {
      clearInterval(bannerTimer);
    };
  }, [bannerImages.length]);

  const handlePrevBanner = () => {
    setCurrentBannerIndex(
      (prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const handleNextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const handlePrevTrending = () => {
    setCurrentTrendingIndex(
      (prevIndex) =>
        (prevIndex - 1 + trendingOffersImages.length) %
        trendingOffersImages.length
    );
  };

  const handleNextTrending = () => {
    setCurrentTrendingIndex(
      (prevIndex) => (prevIndex + 1) % trendingOffersImages.length
    );
  };

  const scrollBestsellers = (direction) => {
    if (bestsellerCarouselRef.current) {
      const cardWidth = bestsellerCarouselRef.current.querySelector(
        ".bestsellers-product-card"
      ).offsetWidth;
      bestsellerCarouselRef.current.scrollBy({
        left: cardWidth * direction,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="homepage-container">
        {/* 1. Banner Section */}
        <section className="banner-section">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`banner-slide ${
                currentBannerIndex === index ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
          <div className="banner-controls">
            <button onClick={handlePrevBanner}>&#10094;</button>
            <button onClick={handleNextBanner}>&#10095;</button>
          </div>
          <div className="banner-indicators">
            {bannerImages.map((_, index) => (
              <span
                key={index}
                className={`banner-indicator-dot ${
                  currentBannerIndex === index ? "active" : ""
                }`}
                onClick={() => setCurrentBannerIndex(index)}
              ></span>
            ))}
          </div>
        </section>

        {/* 2. Shop by Category */}
        <section className="container my-5 text-center">
          <div className="title-container">
            <h2>Shop by Category</h2>
            <p className="subtitle">Find your perfect frame with us.</p>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs">
            <button
              className={`category-tab ${
                activeCategory === "men" ? "active" : ""
              }`}
              onMouseEnter={() => setActiveCategory("men")}
            >
              MEN
            </button>
            <button
              className={`category-tab ${
                activeCategory === "women" ? "active" : ""
              }`}
              onMouseEnter={() => setActiveCategory("women")}
            >
              WOMEN
            </button>
          </div>

          {/* Category Images */}
          <div className="category-images-container mt-4">
            {activeCategory === "men" && (
              <div className="d-flex flex-wrap justify-content-center">
                {menCategoryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Men's Category ${index + 1}`}
                    className="category-item-image"
                  />
                ))}
              </div>
            )}
            {activeCategory === "women" && (
              <div className="d-flex flex-wrap justify-content-center">
                {womenCategoryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Women's Category ${index + 1}`}
                    className="category-item-image"
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* New Section: Statistics */}
        <section className="container my-5 text-center stats-section">
          <div className="stats-item">
            <h3>1 Cr+</h3>
            <p>Eyewear Sold</p>
          </div>
          <div className="stats-item">
            <h3>850+</h3>
            <p>Stores Available</p>
          </div>
          <div className="stats-item">
            <h3>4.9/5</h3>
            <p>On Google</p>
          </div>
        </section>

        {/* New Section: Our Philosophy */}
        <section className="container my-5 our-philosophy">
          <div className="title-container">
            <h2>Our Philosophy</h2>
          </div>
          <p>
            Nazario is more than just an eyewear brand; it's a statement. We
            believe that glasses are a powerful form of self-expression. Our
            curated collections are designed for the modern individual who
            values elegance, quality, and technology. We are dedicated to
            providing an unparalleled shopping experience, from our meticulously
            crafted frames to our personalized, high-tech fitting solutions.
          </p>
        </section>

        {/* 3. Trending Offers */}
        <section className="my-5">
          <div className="title-container" style={{ marginBottom: "1rem" }}>
            <h2>Trending Offers 🔥</h2>
            <p className="subtitle">Don't miss out on our best deals!</p>
          </div>
          <div className="trending-offers-section">
            {trendingOffersImages.map((image, index) => (
              <div
                key={index}
                className={`trending-slide ${
                  currentTrendingIndex === index ? "active" : ""
                }`}
              >
                <img src={image} alt={`Trending Offer ${index + 1}`} />
              </div>
            ))}
            <div className="trending-controls">
              <button onClick={handlePrevTrending}>&#10094;</button>
              <button onClick={handleNextTrending}>&#10095;</button>
            </div>
            <div className="trending-indicators">
              {trendingOffersImages.map((_, index) => (
                <span
                  key={index}
                  className={`trending-indicator-dot ${
                    currentTrendingIndex === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentTrendingIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Our Bestsellers */}
        <section className="container my-5">
          <div className="bestsellers-main-container">
            <div className="bestsellers-header">
              <h2>Bestsellers</h2>
              <a href="#">View All &gt;</a>
            </div>
            <div className="bestsellers-carousel-container">
              <div
                className="bestsellers-carousel-wrapper"
                ref={bestsellerCarouselRef}
              >
                {bestsellerImages.map((image, index) => (
                  <div key={index} className="bestsellers-product-card">
                    <img src={image} alt={`Bestseller ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollBestsellers(-1)}
                className="bestsellers-nav-btn prev"
              >
                &#10094;
              </button>
              <button
                onClick={() => scrollBestsellers(1)}
                className="bestsellers-nav-btn next"
              >
                &#10095;
              </button>
            </div>
          </div>
        </section>

        {/* 5. Frames Provided */}
        <section className="container my-5 text-center">
          <div className="title-container">
            <h2>Frames Provided</h2>
            <p className="subtitle">Explore our signature shapes.</p>
          </div>
          <div className="frames-provided-row">
            {framesProvidedImages.map((frame, index) => (
              <div key={index} className="frames-provided-item">
                <img src={frame.url} alt={frame.name} />
                <p className="mt-2 text-center">{frame.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Virtual Try-On */}
        <section className="container my-5 virtual-try-on">
          <div className="image-col">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D12AQF_DSa71UoGxw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1695217095744?e=2147483647&v=beta&t=kKcr6nAA5wC6kDlB704ghhIYQS-ZFKclADUc8bFP-XM"
              alt="AI Virtual Try-On"
            />
          </div>
          <div className="text-col">
            <h2 className="mb-3 bold-inkwell">Not Sure What Looks Good?</h2>
            <p>
              Try our **Virtual Try-On** feature! Discover how our frames will
              look on your face using the power of AI. Find your perfect fit
              from the comfort of your home, and explore a wide range of styles
              to match your personality.
            </p>
          </div>
        </section>

        {/* 7. Our Services */}
        <section className="container my-5 our-services">
          <div className="title-container">
            <h2>Our Services</h2>
            <p className="subtitle">Your satisfaction is our priority.</p>
          </div>
          <div className="our-services-grid">
            <div className="service-item">
              <img
                src="https://www.shutterstock.com/image-vector/delivery-man-icon-courier-vector-600nw-2417525189.jpg"
                alt="Free Home Delivery"
                className="our-services-image"
              />
              <p>
                Enjoy free and reliable home delivery on all your orders, right
                to your doorstep.
              </p>
            </div>
            <div className="service-item">
              <img
                src="https://cdn-icons-png.flaticon.com/256/5464/5464047.png"
                alt="Service 2"
                className="our-services-image"
              />
              <p>
                We offer a hassle-free return policy. If you're not completely
                satisfied with your purchase, you can return it within 30 days
                for a full refund or exchange.
              </p>
            </div>
            <div className="service-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0sbraZVV08YYxIZUTzGtQkTeb-Tun7ozFg&s"
                alt="Free Exchange"
                className="our-services-image"
              />
              <p>
                Enjoy **free exchange** for all purchases. If you're not
                completely satisfied with your eyewear, you can easily exchange
                it for a new pair at no extra cost.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
