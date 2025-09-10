import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Recommendation = ({
  recommendations,
  scrollContainerRef,
  scrollLeft,
  scrollRight,
  showLeftArrow,
  showRightArrow,
}) => {
  return (
    <div className="mt-5">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="h3 fw-bold mb-0" style={{ color: "#203639" }}>
          You May Also Like
        </h2>
        <div className="d-flex gap-2">
          {showLeftArrow && (
            <button
              className="btn theme-btn-outline rounded-circle p-2"
              onClick={scrollLeft}
              style={{ width: "40px", height: "40px" }}
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {showRightArrow && (
            <button
              className="btn theme-btn-outline rounded-circle p-2"
              onClick={scrollRight}
              style={{ width: "40px", height: "40px" }}
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="position-relative">
        <div
          ref={scrollContainerRef}
          className="d-flex gap-3 overflow-auto pb-2 scroll-container"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth",
          }}
        >
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{ width: "280px" }}
            >
              <div className="card h-100 theme-card">
                <div className="ratio ratio-1x1 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top object-fit-cover"
                    style={{
                      transition: "transform 0.3s ease",
                      borderRadius: "16px 16px 0 0",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5
                    className="card-title fw-semibold mb-2"
                    style={{ fontSize: "1.1rem", color: "#203639" }}
                  >
                    {item.name}
                  </h5>
                  <div className="mt-auto">
                    <div className="d-flex align-items-center mb-3">
                      <span
                        className="h6 fw-bold me-2 mb-0"
                        style={{ color: "#203639" }}
                      >
                        ₹{item.price.toLocaleString()}
                      </span>
                      <span
                        className="small text-decoration-line-through"
                        style={{ color: "rgba(32, 54, 57, 0.5)" }}
                      >
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <button className="recommendation-view-button btn btn-sm w-100 fw-semibold">
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
