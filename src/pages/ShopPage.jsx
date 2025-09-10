import React, { useMemo, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import FilterPanel from "../components/FilterPanel";
import productsData from "../utils/productData";

function ShopPage() {
  const [products, setProducts] = useState(productsData);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: [],
    priceRanges: [],
    priceMin: "",
    priceMax: "",
    brands: [],
  });

  const toggleLike = useCallback((id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p))
    );
  }, []);

  const filtered = useMemo(() => {
    const min = filters.priceMin ? Number(filters.priceMin) : -Infinity;
    const max = filters.priceMax ? Number(filters.priceMax) : Infinity;
    return products.filter((p) => p.price >= min && p.price <= max);
  }, [products, filters.priceMin, filters.priceMax]);

  const handleApplyFilters = () => setFilterOpen(false);
  const handleClearFilters = () =>
    setFilters({
      type: [],
      priceRanges: [],
      priceMin: "",
      priceMax: "",
      brands: [],
    });

  const handleTryVR = async () => {
    await new Promise((r) => setTimeout(r, 900));
  };
  const handleBuyNow = async () => {
    await new Promise((r) => setTimeout(r, 1000));
  };

  return (
    <>
      <Navbar brand="Nazario" />
      <div className="bg-transparent py-2 mb-2">
        {" "}
        {/* subheader no longer needs sticky since navbar is fixed */}
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-2">
          <h1
            className="m-0 fw-bold"
            style={{ fontSize: "clamp(22px,2.6vw,28px)" }}
          >
            Shop All
          </h1>
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-light border rounded-pill d-flex align-items-center gap-2 px-3"
              onClick={() => setFilterOpen(true)}
            >
              <i className="bi bi-sliders2" />
              <span>Filters</span>
            </button>
            <div className="dropdown">
              <button
                className="btn btn-light border rounded-pill d-flex align-items-center gap-2 px-3 dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">Popularity</button>
                </li>
                <li>
                  <button className="dropdown-item">Price: Low to High</button>
                </li>
                <li>
                  <button className="dropdown-item">Price: High to Low</button>
                </li>
                <li>
                  <button className="dropdown-item">Newest</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main className="pb-5">
        <div className="container">
          <div className="row products g-2 g-md-3 g-lg-3">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="col-6 col-md-4 col-lg-3 xl-col-5 product-col"
              >
                <ProductCard product={p} onToggleLike={toggleLike} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <FilterPanel
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={handleApplyFilters}
        onClear={handleClearFilters}
        filters={filters}
        setFilters={setFilters}
      />
      <Footer />
    </>
  );
}

export default ShopPage;
