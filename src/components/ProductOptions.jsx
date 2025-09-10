import { useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { BsDash, BsPlus } from "react-icons/bs";

const FrameColors = [
  { label: "Black", value: "black", hex: "#000000" },
  { label: "Tortoise", value: "tortoise", hex: "#A9746E" },
  { label: "Silver", value: "silver", hex: "#C0C0C0" },
  { label: "Rose Gold", value: "rose-gold", hex: "#B76E79" },
];

const Sizes = ["XS", "S", "M", "L", "XL"];

const ProductOptions = () => {
  const [frameColor, setFrameColor] = useState(FrameColors[0].value);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => {
      const newQty = prev + delta;
      return newQty < 1 ? 1 : newQty;
    });
  };

  const handleKeyDown = (e, value) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFrameColor(value);
    }
  };

  return (
    <div className="mb-4">
      {/* Frame Color Swatches */}
      <fieldset className="mb-4 border-0 p-0">
        <legend className="form-label fw-semibold mb-2">Frame Color</legend>
        <div
          className="d-flex gap-3"
          role="radiogroup"
          aria-label="Frame color options"
        >
          {FrameColors.map(({ label, value, hex }) => (
            <button
              key={value}
              type="button"
              onClick={() => setFrameColor(value)}
              onKeyDown={(e) => handleKeyDown(e, value)}
              className="btn p-0 border rounded-circle d-flex align-items-center justify-content-center"
              aria-label={label}
              aria-pressed={frameColor === value}
              title={label}
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: hex,
                borderColor: frameColor === value ? "#0d6efd" : "#ccc",
                boxShadow:
                  frameColor === value
                    ? "0 0 8px 2px rgba(13,110,253,0.6)"
                    : "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                outline: "none",
              }}
            >
              {frameColor === value && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.793l7.146-7.147a.5.5 0 0 1 .708 0z" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Size Buttons */}
      <fieldset className="mb-4 border-0 p-0">
        <legend className="form-label fw-semibold mb-2">Size</legend>
        <ButtonGroup>
          {Sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "primary" : "outline-secondary"}
              onClick={() => setSelectedSize(size)}
              aria-pressed={selectedSize === size}
              style={{ width: "45px", textAlign: "center" }}
            >
              {size}
            </Button>
          ))}
        </ButtonGroup>
      </fieldset>

      {/* Quantity Selector with + / - */}
      <fieldset className="mb-4 border-0 p-0">
        <legend className="form-label fw-semibold mb-2">Quantity</legend>
        <div className="d-flex align-items-center">
          <Button
            variant="outline-secondary"
            onClick={() => handleQuantityChange(-1)}
            style={{ width: "40px", height: "40px" }}
          >
            <BsDash />
          </Button>
          <div
            className="px-3 fw-bold"
            style={{ minWidth: "40px", textAlign: "center" }}
          >
            {quantity}
          </div>
          <Button
            variant="outline-secondary"
            onClick={() => handleQuantityChange(1)}
            style={{ width: "40px", height: "40px" }}
          >
            <BsPlus />
          </Button>
        </div>
      </fieldset>
    </div>
  );
};

export default ProductOptions;
