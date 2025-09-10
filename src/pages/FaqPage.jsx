import "../styles/faq.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
const faqs = [
  {
    q: "What types of lenses do you offer?",
    a: (
      <>
        We offer a wide range of lenses including{" "}
        <b>single‑vision, progressive, and bifocal</b> options. You can also add
        coatings like{" "}
        <b>blue‑light filtering, anti‑reflective, and UV protection</b>.
      </>
    ),
  },
  {
    q: "How do I find the right frame style for my face?",
    a: (
      <>
        Use our <b>Virtual Try‑On</b> feature or visit our{" "}
        <a href="#" rel="noreferrer">
          Frame Fit Guide
        </a>
        .
      </>
    ),
  },
  {
    q: "What is your return and exchange policy?",
    a: (
      <>
        We offer a <b>30‑day, no‑questions‑asked return policy</b> on all
        frames. Prescription lenses are final sale but can be remade if
        defective.
      </>
    ),
  },
  {
    q: "Do you offer a warranty on your eyewear?",
    a: (
      <>
        Yes, our frames come with a <b>one‑year warranty</b> for manufacturing
        defects.
      </>
    ),
  },
  {
    q: "How long does it take to receive my glasses?",
    a: (
      <>
        Non‑prescription orders ship in <b>1–2 business days</b>, prescription
        ones in <b>5–7 business days</b>.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar brand="Nazario" />
      <div className="faq-body">
        <main className="faq-main">
          <section className="faq-section">
            <div className="container">
              <div className="faq-title">
                <h2>Frequently Asked Questions</h2>
              </div>

              {faqs.map((item, idx) => (
                <details className="faq-details" key={idx} open={idx === 0}>
                  <summary className="faq-summary">{item.q}</summary>
                  <div className="faq-answer">{item.a}</div>
                </details>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
