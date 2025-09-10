import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import FaqPage from "./pages/FaqPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
// import NewArrivals from "./pages/NewArrivals";
// import Men from "./pages/Men";
// import Women from "./pages/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/faq" element={<FAQ />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Footer />
//     </BrowserRouter>
//   );
// }
