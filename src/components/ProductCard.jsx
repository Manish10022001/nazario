import React from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { Link } from "react-router-dom";
function ProductCard({ product, onToggleLike }) {
  const { id, name, price, oldPrice, rating, reviews, image, badges, liked } =
    product;
  const handleLike = () => onToggleLike?.(id);

  return (
    <div
      className="card border-0 d-flex flex-column h-100"
      style={{ minHeight: "450px" }}
    >
      {/* Image Section */}
      <div
        className="img-wrap card-prod position-relative"
        style={{ height: "300px", overflow: "hidden" }}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-100 h-100 d-block"
          style={{ objectFit: "cover" }} // 🔥 fills the wrapper
        />

        {/* Badges */}
        <div className="position-absolute top-0 start-0 p-2 d-flex flex-column gap-1">
          {badges?.map((b) => {
            const promo = /%|Sale/i.test(b);
            const style = {
              background: promo ? "var(--Inkwell)" : "var(--Au-Lait)",
            };
            return (
              <span key={b} className="badge-chip" style={style}>
                {b}
              </span>
            );
          })}
        </div>

        {/* Like Button */}
        <button
          className="btn p-0 position-absolute"
          style={{
            top: 8,
            right: 8,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "rgba(255,255,255,.7)",
          }}
          aria-label={liked ? "Unlike" : "Like"}
          onClick={handleLike}
        >
          {liked ? (
            <i className="bi bi-heart-fill text-danger" />
          ) : (
            <i className="bi bi-heart" style={{ color: "var(--Inkwell)" }} />
          )}
        </button>
      </div>

      {/* Card Body */}
      <div className="pt-2 pb-2 px-2 d-flex flex-column flex-grow-1">
        <h3
          className="fs-6 fw-semibold"
          title={name}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "40px", // 🔥 keeps all titles aligned
          }}
        >
          {name}
        </h3>

        {/* Price */}
        <div className="mt-1 d-flex align-items-baseline gap-2">
          <span className={`fw-bold ${oldPrice ? "text-warning" : ""}`}>
            {formatCurrency(price)}
          </span>
          {oldPrice && (
            <span className="text-decoration-line-through text-secondary small">
              {formatCurrency(oldPrice)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="d-flex align-items-center gap-1 mt-1">
          <div
            className="d-inline-flex"
            aria-label={`Rating ${rating} out of 5`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`bi bi-star-fill ${
                  i < rating ? "text-warning" : "text-secondary"
                }`}
              />
            ))}
          </div>
          <span className="text-secondary small">({reviews})</span>
        </div>

        {/* Size Help (Mobile Only) */}
        <div className="d-md-none mt-1 small text-secondary">
          <a href="#" className="link-secondary text-decoration-underline">
            Not sure about your size?
          </a>
        </div>

        {/* Buttons (always stick bottom) */}
        <div className="mt-auto pt-2 d-grid gap-2">
          <button className="btn btn-addtocart fw-bold">+ Add to Cart</button>
          <button
            className="btn btn-outline-secondary fw-bold"
            style={{
              borderColor: "rgba(32,54,57,.25)",
              color: "var(--Inkwell)",
            }}
          >
            + Try in 3D
          </button>
          <Link
            to={`/product/${product.id}`} // Pass product ID here
            className="text-center small text-secondary text-decoration-none"
          >
            View Details &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProductCard);
