import { useState, useEffect } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "sonner";

// Layout
import Navbar from "./components/nav";
import Footer from "./components/footer";

// Pages
import Services from "./components/services";
import LocalMoves from "./components/local";
import InternationalMoves from "./components/international";
import Storage from "./components/storage";
import Packing from "./components/packing";
import PackingInsurance from "./components/insurance";
import BiddulphsFreight from "./components/freight";
import DeliveryNetwork from "./components/delivery";
import About from "./components/about";
import FAQ from "./components/faq";
import News from "./components/news";
import Contact from "./components/contact";
import GetQuote from "./components/quote";
import Home from "./components/home";
import BusinessMoves from "./components/business";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen gellix-font">
        <style jsx>{`
          @font-face {
            font-family: "Gravesend Sans";
            src: url("./fonts/fonnts.com-Gravesend_Sans_Light.otf")
              format("opentype");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gravesend Sans";
            src: url("./fonts/fonnts.com-Gravesend_Sans_Medium.otf")
              format("opentype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gravesend Sans";
            src: url("./fonts/fonnts.com-Gravesend_Sans_Bold.otf")
              format("opentype");
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }

          /* Century Gothic Font Face */
          @font-face {
            font-family: "Century Gothic Custom";
            src: url("./fonts/weezerfont.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gellix";
            src: url("./fonts/Gellix-Light.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Gellix";
            src: url("./fonts/Gellix-Regular.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          /* Font utility classes */
          .gravesend-sans {
            font-family: "Gravesend Sans", "Inter", "Segoe UI", Tahoma, Geneva,
              Verdana, sans-serif;
          }

          .roboto-font {
            font-family: "Roboto", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
              sans-serif;
          }

          .gellix-font {
            font-family: "Gellix", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
              sans-serif;
          }

          body {
            overflow-x: hidden;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/local-moves" element={<LocalMoves />} />
            <Route
              path="/services/international-moves"
              element={<InternationalMoves />}
            />
            <Route
              path="/services/business-moves"
              element={<BusinessMoves />}
            />
            <Route path="/services/storage" element={<Storage />} />
            <Route path="/services/packing" element={<Packing />} />
            <Route path="/services/insurance" element={<PackingInsurance />} />
            <Route path="/services/freight" element={<BiddulphsFreight />} />
            <Route path="/delivery-network" element={<DeliveryNetwork />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<GetQuote />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}

export default App;
