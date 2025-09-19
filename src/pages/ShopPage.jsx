// import React, { useMemo, useState, useCallback } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ProductCard from "../components/ProductCard";

// import FilterPanel from "../components/FilterPanel";
// import productsData from "../utils/productData";

// function ShopPage() {
//   const [products, setProducts] = useState(productsData);
//   const [filterOpen, setFilterOpen] = useState(false);
//   const [filters, setFilters] = useState({
//     type: [],
//     priceRanges: [],
//     priceMin: "",
//     priceMax: "",
//     brands: [],
//   });

//   const toggleLike = useCallback((id) => {
//     setProducts((prev) =>
//       prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p))
//     );
//   }, []);

//   const filtered = useMemo(() => {
//     const min = filters.priceMin ? Number(filters.priceMin) : -Infinity;
//     const max = filters.priceMax ? Number(filters.priceMax) : Infinity;
//     return products.filter((p) => p.price >= min && p.price <= max);
//   }, [products, filters.priceMin, filters.priceMax]);

//   const handleApplyFilters = () => setFilterOpen(false);
//   const handleClearFilters = () =>
//     setFilters({
//       type: [],
//       priceRanges: [],
//       priceMin: "",
//       priceMax: "",
//       brands: [],
//     });

//   const handleTryVR = async () => {
//     await new Promise((r) => setTimeout(r, 900));
//   };
//   const handleBuyNow = async () => {
//     await new Promise((r) => setTimeout(r, 1000));
//   };

//   return (
//     <>
//       <Navbar brand="Nazario" />
//       <div className="bg-transparent py-2 mb-2">
//         {" "}
//         {/* subheader no longer needs sticky since navbar is fixed */}
//         <div className="container d-flex flex-wrap align-items-center justify-content-between gap-2">
//           <h1
//             className="m-0 fw-bold"
//             style={{ fontSize: "clamp(22px,2.6vw,28px)" }}
//           >
//             Shop All
//           </h1>
//           <div className="d-flex align-items-center gap-2">
//             <button
//               className="btn btn-light border rounded-pill d-flex align-items-center gap-2 px-3"
//               onClick={() => setFilterOpen(true)}
//             >
//               <i className="bi bi-sliders2" />
//               <span>Filters</span>
//             </button>
//             <div className="dropdown">
//               <button
//                 className="btn btn-light border rounded-pill d-flex align-items-center gap-2 px-3 dropdown-toggle"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Sort By
//               </button>
//               <ul className="dropdown-menu">
//                 <li>
//                   <button className="dropdown-item">Popularity</button>
//                 </li>
//                 <li>
//                   <button className="dropdown-item">Price: Low to High</button>
//                 </li>
//                 <li>
//                   <button className="dropdown-item">Price: High to Low</button>
//                 </li>
//                 <li>
//                   <button className="dropdown-item">Newest</button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="pb-5">
//         <div className="container">
//           <div className="row products g-2 g-md-3 g-lg-3">
//             {filtered.map((p) => (
//               <div
//                 key={p.id}
//                 className="col-6 col-md-4 col-lg-3 xl-col-5 product-col"
//               >
//                 <ProductCard product={p} onToggleLike={toggleLike} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <FilterPanel
//         open={filterOpen}
//         onClose={() => setFilterOpen(false)}
//         onApply={handleApplyFilters}
//         onClear={handleClearFilters}
//         filters={filters}
//         setFilters={setFilters}
//       />
//       <Footer />
//     </>
//   );
// }

// export default ShopPage;
import React, { useMemo, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/FilterPanel";
import productsData from "../utils/productData.js";
import { Link } from "react-router-dom";
function ShopPage() {
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    type: [],
    priceRanges: [], // none selected → no filtering
    priceMin: "", // empty → no filtering
    priceMax: "",
    brands: [],
    shape: [],
    colors: [],
    size: [],
    material: [],
    weight: [],
    rxType: [],
    powers: [],
    widthMin: "",
    widthMax: "",
    prodType: [],
    collection: [],
  });

  const toggleLike = useCallback((id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p))
    );
  }, []);

  // ---------------- FILTER LOGIC ----------------
  const filtered = useMemo(() => {
    let result = [...products];

    // FRAME TYPE
    if (filters.type.length) {
      result = result.filter((p) => filters.type.includes(p.type));
    }

    // PRICE CHIP (only one active at a time)
    if (filters.priceRanges.length) {
      const priceLabel = filters.priceRanges[0];
      result = result.filter((p) => {
        if (priceLabel === "Under ₹999") return p.price < 999;
        if (priceLabel === "₹1000–1999")
          return p.price >= 1000 && p.price <= 1999;
        if (priceLabel === "₹2000–2999")
          return p.price >= 2000 && p.price <= 2999;
        if (priceLabel === "₹3000–4999")
          return p.price >= 3000 && p.price <= 4999;
        if (priceLabel === "₹5000+") return p.price >= 5000;
        return true;
      });
    }

    // PRICE INPUTS (only apply if user entered values)
    const min =
      filters.priceMin && !isNaN(filters.priceMin)
        ? Number(filters.priceMin)
        : -Infinity;
    const max =
      filters.priceMax && !isNaN(filters.priceMax)
        ? Number(filters.priceMax)
        : Infinity;
    result = result.filter((p) => p.price >= min && p.price <= max);

    // BRANDS
    if (filters.brands.length) {
      result = result.filter((p) => filters.brands.includes(p.brand));
    }

    // SHAPE
    if (filters.shape.length) {
      result = result.filter((p) => filters.shape.includes(p.shape));
    }

    // COLORS
    if (filters.colors.length) {
      result = result.filter((p) =>
        filters.colors.some((c) => p.colors.includes(c))
      );
    }

    // SIZE
    if (filters.size.length) {
      result = result.filter((p) => filters.size.includes(p.size));
    }

    // MATERIAL
    if (filters.material.length) {
      result = result.filter((p) => filters.material.includes(p.material));
    }

    // WEIGHT
    if (filters.weight.length) {
      result = result.filter((p) => filters.weight.includes(p.weight));
    }

    // RX TYPE
    if (filters.rxType.length) {
      result = result.filter((p) => filters.rxType.includes(p.rxType));
    }

    // POWERS
    if (filters.powers.length) {
      result = result.filter((p) => filters.powers.includes(p.powers));
    }

    // WIDTH (only apply if user entered values)
    const widthMin =
      filters.widthMin && !isNaN(filters.widthMin)
        ? Number(filters.widthMin)
        : -Infinity;
    const widthMax =
      filters.widthMax && !isNaN(filters.widthMax)
        ? Number(filters.widthMax)
        : Infinity;
    result = result.filter((p) => p.width >= widthMin && p.width <= widthMax);

    // PRODUCT TYPE
    if (filters.prodType.length) {
      result = result.filter((p) => filters.prodType.includes(p.prodType));
    }

    // COLLECTION
    if (filters.collection.length) {
      result = result.filter((p) => filters.collection.includes(p.collection));
    }

    return result;
  }, [products, filters]);

  // ---------------- SORTING ----------------
  const [sortOption, setSortOption] = useState("");
  const sorted = useMemo(() => {
    let res = [...filtered];
    if (sortOption === "low") res.sort((a, b) => a.price - b.price);
    else if (sortOption === "high") res.sort((a, b) => b.price - a.price);
    else if (sortOption === "newest") res.sort((a, b) => b.id - a.id); // assuming higher ID = newer
    return res;
  }, [filtered, sortOption]);

  // ---------------- FILTER PANEL HANDLERS ----------------
  const handleApplyFilters = () => setFilterOpen(false);
  const handleClearFilters = () =>
    setFilters({
      type: [],
      priceRanges: [],
      priceMin: "",
      priceMax: "",
      brands: [],
      shape: [],
      colors: [],
      size: [],
      material: [],
      weight: [],
      rxType: [],
      powers: [],
      widthMin: "",
      widthMax: "",
      prodType: [],
      collection: [],
    });

  return (
    <>
      <Navbar brand="Nazario" onSearch={setSearchTerm} />

      {/* Header Section */}
      <div className="bg-transparent py-2 mb-2">
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-2">
          <h1
            className="m-0 fw-bold"
            style={{ fontSize: "clamp(22px,2.6vw,28px)" }}
          >
            Shop All
          </h1>

          <div className="d-flex align-items-center gap-2">
            {/* Filter Button */}
            <button
              className="btn btn-light border rounded-pill d-flex align-items-center gap-2 px-3"
              onClick={() => setFilterOpen(true)}
            >
              <i className="bi bi-sliders2" />
              <span>Filters</span>
            </button>

            {/* Sort Dropdown */}
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
                  <button
                    className="dropdown-item"
                    onClick={() => setSortOption("low")}
                  >
                    Price: Low to High
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setSortOption("high")}
                  >
                    Price: High to Low
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setSortOption("newest")}
                  >
                    Newest
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <main className="pb-5">
        <div className="container">
          <div className="row products g-2 g-md-3 g-lg-3">
            {sorted.length ? (
              sorted.map((p) => (
                <div
                  key={p.id}
                  className="col-6 col-md-4 col-lg-3 xl-col-5 product-col"
                >
                  <ProductCard product={p} onToggleLike={toggleLike} />
                </div>
              ))
            ) : (
              <p className="text-center w-100 py-5">No products found</p>
            )}
          </div>
        </div>
      </main>

      {/* Filter Panel */}
      <FilterPanel
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={handleApplyFilters}
        onClear={handleClearFilters}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  );
}

export default ShopPage;
