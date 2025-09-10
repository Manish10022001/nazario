import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/product_details.css";
import { useNavigate, Link } from "react-router-dom"; //for breadcrumbs
import Recommendation from "../components/Recommendation";
import {
  ArrowLeft,
  Star,
  StarHalf,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  RotateCcw,
  Shield,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const colorMap = {
  black: "#000000",
  tortoise: "#8B6D5C",
  silver: "#C0C0C0",
  "rose gold": "#B76E79",
  gold: "#FFD700",
  blue: "#007BFF",
  green: "#28A745",
  white: "#FFFFFF",
};
const getColorCode = (colorName) => {
  return colorMap[colorName.toLowerCase()] || "#6c757d"; // fallback gray
};
const ProductDetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const scrollContainerRef = useRef(null);
  const [selectedSize, setSelectedSize] = useState("Medium");

  const sizes = ["Small", "Medium", "Large"];
  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft + container.offsetWidth < container.scrollWidth
    );
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300;
    }
  };

  const productImages = [
    "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
  ];

  const product = {
    id: "1",
    name: "Blue Light Guardian",
    price: 2999,
    originalPrice: 4999,
    rating: 4.8,
    reviews: 1247,
    images: productImages,
    description: [
      "Perfect fusion of style and technology with advanced blue light filtering.",
      "Premium lightweight titanium frames with anti-reflective lenses.",
      "Sleek design with premium case, cloth, and 2-year warranty.",
    ],
    specifications: {
      "Frame Material": "Premium Titanium Alloy",
      "Lens Type": "Anti-Blue Light + Anti-Glare",
      "Frame Width": "140mm",
      "Lens Width": "52mm",
      "Bridge Width": "18mm",
      "Temple Length": "145mm",
      Weight: "22g (Ultra-lightweight)",
      "Color Options": "Black, Tortoise, Silver, Rose Gold",
      Warranty: "2 Years Full Coverage",
    },
    colors: ["Black", "Tortoise", "Silver", "Rose Gold"],
  };

  const recommendations = [
    {
      id: "2",
      name: "Classic Aviator Pro",
      price: 2499,
      originalPrice: 3999,
      image: productImages[1],
      colors: ["Black", "Gold", "Silver"],
    },
    {
      id: "3",
      name: "Modern Square Frame",
      price: 1999,
      originalPrice: 2999,
      image: productImages[2],
      colors: ["Black", "Blue"],
    },
    {
      id: "4",
      name: "Vintage Round Style",
      price: 2299,
      originalPrice: 3499,
      image: productImages[3],
      colors: ["Tortoise", "Rose Gold", "Silver"],
    },
    {
      id: "5",
      name: "Sport Performance",
      price: 3299,
      originalPrice: 4499,
      image: productImages[0],
      colors: ["Black", "Green", "White"],
    },
    {
      id: "2",
      name: "Classic Aviator Pro",
      price: 2499,
      originalPrice: 3999,
      image: productImages[1],
      colors: ["Black", "Gold", "Silver"],
    },
    {
      id: "2",
      name: "Classic Aviator Pro",
      price: 2499,
      originalPrice: 3999,
      image: productImages[1],
      colors: ["Black", "Gold", "Silver"],
    },
  ];
  const discount = Math.round(
    100 - (product.price / product.originalPrice) * 100
  );

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="text-warning" size={16} fill="currentColor" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="text-warning"
          size={16}
          fill="currentColor"
        />
      );
    }

    return stars;
  };
  const navigate = useNavigate(); //for breadcrumb
  return (
    <div>
      <Navbar brand="Nazario" />
      {/* Breadcrumb */}
      <div className="border-bottom">
        <div className="container py-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <button
                  className="btn btn-link p-0 text-decoration-none d-flex align-items-center"
                  onClick={() => navigate(-1)} // goes back in history
                >
                  <ArrowLeft size={16} className="me-1" />
                  Back to Shop
                </button>
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/eyewear">Eyewear</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-4">
        <div className="row g-4 ">
          {/* Product Images */}
          <div className="col-lg-6 shadow-sm">
            <div className="position-sticky" style={{ top: "2rem" }}>
              {/* Main Image */}
              <div className="mb-3">
                <div className="product-main-image-container bg-white rounded-3 border overflow-hidden shadow-sm ratio ratio-1x1">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="product-main-image"
                  />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="row g-2 justify-content-center">
                {product.images.map((image, index) => (
                  <div key={index} className="col-3">
                    <button
                      onClick={() => setSelectedImage(index)}
                      className={`btn p-0 w-100 rounded-2 overflow-hidden ${
                        selectedImage === index
                          ? "border border-primary border-2 shadow"
                          : "border border-light-subtle"
                      } thumb-button`}
                    >
                      <img
                        src={image}
                        alt={`Thumb ${index + 1}`}
                        className="w-100 h-100 object-fit-cover"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="col-lg-6 shadow-lg bg-white rounded-3">
            <div className="h-100 rounded-3">
              <div className="mb-4">
                <h1 className="display-6 fw-bold text-dark mb-3">
                  {product.name}
                </h1>
                <div className="d-flex align-items-center mb-4">
                  <div className="me-2">{renderStars(product.rating)}</div>
                  <span className="text-muted ms-2">
                    {product.rating} ({product.reviews.toLocaleString()}{" "}
                    reviews)
                  </span>
                </div>
                <div className="mb-4">
                  <div className="d-flex align-items-baseline mb-2">
                    <span className="h2 fw-bold text-dark me-3">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="h5 text-muted text-decoration-line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="badge bg-success ms-2">
                      {discount}% OFF
                    </span>
                  </div>
                  <p className="text-success mb-0">
                    <small>
                      You save ₹
                      {(product.originalPrice - product.price).toLocaleString()}
                    </small>
                  </p>
                </div>
              </div>

              {/* Color Picker */}
              <div className="mb-4">
                <h6 className="fw-semibold mb-3">
                  Color: <span className="fw-normal">{selectedColor}</span>
                </h6>
                <div className="d-flex gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`color-picker ${
                        selectedColor === color ? "selected" : "unselected"
                      }`}
                      style={{ backgroundColor: getColorCode(color) }}
                      title={color}
                      type="button"
                    />
                  ))}
                </div>
              </div>

              {/*Size */}
              <div className="mb-4">
                <h6 className="fw-semibold mb-3">
                  Size: <span className="fw-normal">{selectedSize}</span>
                </h6>
                <div className="d-flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`size-button btn rounded-circle d-flex align-items-center justify-content-center fw-semibold ${
                        selectedSize === size
                          ? "btn-dark text-white"
                          : "btn-outline-secondary"
                      }`}
                    >
                      {size.charAt(0)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-4">
                <h6 className="fw-semibold mb-3">Quantity</h6>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="mx-3 fw-semibold">{quantity}</span>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mb-4">
                <div className="d-grid gap-2 d-md-block">
                  <button className="btn btn-addtocart btn-lg me-2 px-4">
                    <ShoppingCart size={20} className="me-2" /> Add to Cart
                  </button>

                  <button className="btn btn-buynow btn-lg px-4">
                    Buy Now
                  </button>
                </div>
                <div className="d-flex gap-3 mt-3">
                  <button className="btn btn-outline-secondary d-flex align-items-center">
                    <Heart size={16} className="me-1" /> Wishlist
                  </button>
                  <button className="btn btn-outline-secondary d-flex align-items-center">
                    <Share2 size={16} className="me-1" /> Share
                  </button>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <div className="row g-3">
                  <div className="col-12 d-flex align-items-center text-success">
                    <Truck size={20} className="me-2" /> Free shipping across
                    India
                  </div>
                  <div className="col-12 d-flex align-items-center text-success">
                    <RotateCcw size={20} className="me-2" /> Easy 30-day returns
                  </div>
                  <div className="col-12 d-flex align-items-center text-success">
                    <Shield size={20} className="me-2" /> 2 years warranty
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="row g-4 mt-5">
          <div className="col-12">
            <h2 className="h3 fw-bold mb-4">Product Details</h2>
          </div>
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="bg-white rounded-3 p-4 h-100 shadow-lg">
              <h3 className="h5 fw-bold mb-3">Description</h3>
              <ul className="list-unstyled">
                {product.description.map((item, index) => (
                  <li key={index} className="mb-2 text-muted">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="bg-white rounded-3 p-4 h-100 shadow-lg">
              <h3 className="h5 fw-bold mb-3">Specifications</h3>
              <div className="table-responsive">
                <table className="table table-borderless mb-0">
                  <tbody>
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <tr key={key}>
                          <td
                            className="fw-semibold text-muted"
                            style={{ width: "45%" }}
                          >
                            {key}
                          </td>
                          <td className="fw-medium text-success">{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <Recommendation
          recommendations={recommendations}
          scrollContainerRef={scrollContainerRef}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
          showLeftArrow={showLeftArrow}
          showRightArrow={showRightArrow}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
