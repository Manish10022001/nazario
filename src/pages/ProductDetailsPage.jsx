import React, { useState, useRef, useEffect } from "react";
import StarRating from "../components/StarRating";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/product_details.css";
import { useNavigate, Link } from "react-router-dom";
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
  User,
  ThumbsUp,
  Calendar,
  MessageSquare,
  TrendingUp,
  Filter,
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
  return colorMap[colorName.toLowerCase()] || "#6c757d";
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

// Initial sample reviews for demonstration
const sampleReviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    review:
      "Excellent quality frames! The blue light filtering really works. No more eye strain during long work sessions.",
    date: "2024-01-15",
    verified: true,
    helpful: 12,
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 4,
    review:
      "Very comfortable and stylish. Good build quality, though the case could be better.",
    date: "2024-01-10",
    verified: true,
    helpful: 8,
  },
  {
    id: 3,
    name: "Amit Patel",
    rating: 5,
    review: "Worth every penny! Great customer service and fast delivery.",
    date: "2024-01-05",
    verified: false,
    helpful: 5,
  },
];

const ProductDetailsPage = () => {
  // Basic product state
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  // Review system state
  const [reviews, setReviews] = useState(sampleReviews);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [userName, setUserName] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewFilter, setReviewFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [submitMessage, setSubmitMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const REVIEWS_PER_PAGE = 5;

  const sizes = ["Small", "Medium", "Large"];

  // Load reviews from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("product-reviews-" + product.id);
    if (saved) {
      const savedReviews = JSON.parse(saved);
      setReviews([...sampleReviews, ...savedReviews]);
    }
  }, []);

  // Save reviews to localStorage when reviews change
  useEffect(() => {
    const userReviews = reviews.filter(
      (r) => !sampleReviews.find((s) => s.id === r.id)
    );
    localStorage.setItem(
      "product-reviews-" + product.id,
      JSON.stringify(userReviews)
    );
  }, [reviews]);

  // Calculate average rating and rating distribution
  const calculateRatingStats = () => {
    if (reviews.length === 0)
      return { average: product.rating, distribution: {} };

    const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
    const average = (totalRating / reviews.length).toFixed(1);

    const distribution = {};
    for (let i = 1; i <= 5; i++) {
      distribution[i] = reviews.filter((r) => r.rating === i).length;
    }

    return { average: parseFloat(average), distribution };
  };

  const { average: avgRating, distribution } = calculateRatingStats();

  // Filter and sort reviews
  const getFilteredReviews = () => {
    let filtered = [...reviews];
    if (reviewFilter !== "all") {
      filtered = filtered.filter((r) => r.rating === parseInt(reviewFilter));
    }
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "highest":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "lowest":
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      case "helpful":
        filtered.sort((a, b) => b.helpful - a.helpful);
        break;
      default:
        break;
    }
    return filtered;
  };

  // Pagination logic
  const filteredReviews = getFilteredReviews();
  const totalPages = Math.ceil(filteredReviews.length / REVIEWS_PER_PAGE);
  // Show only one page at a time, no 'showAll' mode
  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE
  );

  // Show More button logic: advances to next page
  const handleShowMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!userRating) {
      setSubmitMessage("Please select a rating");
      return;
    }
    if (!userName.trim()) {
      setSubmitMessage("Please enter your name");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: userName.trim(),
      rating: userRating,
      review: userReview.trim(),
      date: new Date().toISOString().split("T")[0],
      verified: false,
      helpful: 0,
    };

    setReviews([newReview, ...reviews]);
    setUserRating(0);
    setUserReview("");
    setUserName("");
    setShowReviewForm(false);
    setSubmitMessage(
      "Thank you for your review! It has been submitted successfully."
    );

    setTimeout(() => setSubmitMessage(""), 5000);
  };

  // Handle rating-only submission
  const handleRatingOnly = () => {
    if (!userRating || !userName.trim()) {
      setSubmitMessage("Please enter your name and select a rating");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: userName.trim(),
      rating: userRating,
      review: "",
      date: new Date().toISOString().split("T")[0],
      verified: false,
      helpful: 0,
    };

    setReviews([newReview, ...reviews]);
    setUserRating(0);
    setUserName("");
    setSubmitMessage("Thank you for rating this product!");

    setTimeout(() => setSubmitMessage(""), 5000);
  };

  // Scroll functionality
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
  ];

  const discount = Math.round(
    100 - (product.price / product.originalPrice) * 100
  );
  const navigate = useNavigate();

  const renderStars = (rating, size = 16) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          className="text-warning"
          size={size}
          fill="currentColor"
        />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="text-warning"
          size={size}
          fill="currentColor"
        />
      );
    }
    return stars;
  };

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
                  onClick={() => navigate(-1)}
                >
                  <ArrowLeft size={16} className="me-1" />
                  Back to Shop
                </button>
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
        <div className="row g-4">
          {/* Product Images */}
          <div className="col-lg-6 shadow-sm">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="mb-3">
                <div className="product-main-image-container bg-white rounded-3 border overflow-hidden shadow-sm ratio ratio-1x1">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="product-main-image"
                  />
                </div>
              </div>
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
            <div className="h-100 rounded-3 p-4">
              <div className="mb-4">
                <h1 className="display-6 fw-bold text-dark mb-3">
                  {product.name}
                </h1>

                {/* Dynamic Rating Display */}
                <div className="d-flex align-items-center mb-4">
                  <div className="me-2">{renderStars(avgRating)}</div>
                  <span className="text-muted ms-2">
                    {avgRating} ({reviews.length.toLocaleString()} reviews)
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

              {/* Size */}
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

        {/* Recommendations */}
        <Recommendation
          recommendations={recommendations}
          scrollContainerRef={scrollContainerRef}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
          showLeftArrow={showLeftArrow}
          showRightArrow={showRightArrow}
        />

        {/* Reviews Section */}
        <div className="row g-4 mt-5">
          <div className="col-12">
            <div className="bg-white rounded-3 p-4 shadow-lg">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="h3 fw-bold mb-0">Customer Reviews</h2>
                <button
                  className="btn btn-primary"
                  onClick={() => setShowReviewForm(!showReviewForm)}
                >
                  <MessageSquare size={16} className="me-1" />
                  Write Review
                </button>
              </div>

              {/* Success Message */}
              {submitMessage && (
                <div className="alert alert-success d-flex align-items-center mb-4">
                  <ThumbsUp size={16} className="me-2" />
                  {submitMessage}
                </div>
              )}

              {/* Rating Overview */}
              <div className="row mb-4">
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="display-4 fw-bold text-primary">
                      {avgRating}
                    </div>
                    <div className="d-flex justify-content-center mb-2">
                      {renderStars(avgRating, 20)}
                    </div>
                    <p className="text-muted">
                      Based on {reviews.length} reviews
                    </p>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="rating-breakdown">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div
                        key={rating}
                        className="d-flex align-items-center mb-2"
                      >
                        <span className="me-2">{rating}</span>
                        <Star
                          size={14}
                          className="text-warning me-2"
                          fill="currentColor"
                        />
                        <div
                          className="progress flex-grow-1 me-2"
                          style={{ height: "8px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            style={{
                              width: `${
                                reviews.length > 0
                                  ? (distribution[rating] / reviews.length) *
                                    100
                                  : 0
                              }%`,
                            }}
                          ></div>
                        </div>
                        <small className="text-muted">
                          {distribution[rating] || 0}
                        </small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Form */}
              {showReviewForm && (
                <div className="border rounded-3 p-4 mb-4 bg-light">
                  <h5 className="fw-bold mb-3">Write a Review</h5>
                  <form onSubmit={handleReviewSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Rating</label>
                        <div className="mt-1">
                          <StarRating
                            maxRating={5}
                            color="#ffc107"
                            size={32}
                            onSetRating={setUserRating}
                            defaultRating={userRating}
                            messages={[
                              "Poor",
                              "Fair",
                              "Good",
                              "Very Good",
                              "Excellent",
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label fw-semibold">
                        Review (Optional)
                      </label>
                      <textarea
                        className="form-control"
                        rows="4"
                        value={userReview}
                        onChange={(e) => setUserReview(e.target.value)}
                        placeholder="Share your experience with this product..."
                      />
                    </div>
                    <div className="d-flex gap-2 mt-3">
                      <button type="submit" className="btn btn-primary">
                        Submit Review
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={handleRatingOnly}
                      >
                        Rate Only
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowReviewForm(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Filters and Sort */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <Filter size={16} className="me-2" />
                    <select
                      className="form-select"
                      value={reviewFilter}
                      onChange={(e) => setReviewFilter(e.target.value)}
                    >
                      <option value="all">All Ratings</option>
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <TrendingUp size={16} className="me-2" />
                    <select
                      className="form-select"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="highest">Highest Rating</option>
                      <option value="lowest">Lowest Rating</option>
                      <option value="helpful">Most Helpful</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              <div className="reviews-list">
                {paginatedReviews.map((review) => (
                  <div key={review.id} className="border-bottom pb-4 mb-4">
                    <div className="d-flex align-items-start">
                      <div
                        className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <User size={20} className="text-primary" />
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div>
                            <h6 className="fw-bold mb-1">
                              {review.name}
                              {review.verified && (
                                <span className="badge bg-success ms-2">
                                  Verified
                                </span>
                              )}
                            </h6>
                            <div className="d-flex align-items-center mb-2">
                              <div className="me-2">
                                {renderStars(review.rating, 16)}
                              </div>
                              <small className="text-muted">
                                <Calendar size={12} className="me-1" />
                                {new Date(review.date).toLocaleDateString()}
                              </small>
                            </div>
                          </div>
                        </div>
                        {review.review && (
                          <p className="mb-2 text-muted">{review.review}</p>
                        )}
                        <div className="d-flex align-items-center">
                          <button className="btn btn-sm btn-outline-secondary">
                            <ThumbsUp size={12} className="me-1" />
                            Helpful ({review.helpful})
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Show More button: advances to next page */}
                {currentPage < totalPages && (
                  <div className="text-center mb-3">
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleShowMore}
                    >
                      Show More Reviews
                    </button>
                  </div>
                )}

                {/* Pagination controls with Prev/Next */}
                {filteredReviews.length > 0 && totalPages > 1 && (
                  <nav className="d-flex justify-content-center mt-3">
                    <ul className="pagination">
                      <li
                        className={`page-item${
                          currentPage === 1 ? " disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() =>
                            currentPage > 1 && setCurrentPage(currentPage - 1)
                          }
                          disabled={currentPage === 1}
                        >
                          Prev
                        </button>
                      </li>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <li
                            key={page}
                            className={`page-item ${
                              currentPage === page ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </button>
                          </li>
                        )
                      )}
                      <li
                        className={`page-item${
                          currentPage === totalPages ? " disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() =>
                            currentPage < totalPages &&
                            setCurrentPage(currentPage + 1)
                          }
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                )}

                {filteredReviews.length === 0 && (
                  <div className="text-center py-4">
                    <MessageSquare size={48} className="text-muted mb-3" />
                    <p className="text-muted">
                      No reviews match your current filter.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
