import { useState, useEffect } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
import { Package, Truck } from "lucide-react";

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

// Loading Screen Component with Biddulphs Branding
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative inline-block"
        >
          {/* Logo Container */}
          <div className="relative flex items-center justify-center mb-6">
            {/* Animated Truck Icon */}
            <motion.div
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-20 text-yellow-400"
            >
              <Truck size={40} strokeWidth={1.5} />
            </motion.div>

            {/* Animated Package Icon */}
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute -right-20 text-yellow-400"
            >
              <Package size={36} strokeWidth={1.5} />
            </motion.div>

            {/* Company Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="px-12"
            >
              <img 
                src="/logo.svg" 
                alt="Biddulphs Logo" 
                className="h-24 w-auto filter drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Glow effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -z-10 blur-3xl"
          >
            <div className="w-full h-full bg-gradient-to-r from-emerald-500 via-green-500 to-yellow-500 opacity-40 rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          {/* Loading dots */}
          <div className="flex items-center justify-center space-x-2">
            {[0, 0.2, 0.4].map((delay, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
                className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg"
              />
            ))}
          </div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-gray-300 text-sm mt-6 font-medium tracking-wider"
          >
            Loading your moving solution...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Page Wrapper for transitions
const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

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
        <PageWrapper>
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
        </PageWrapper>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}

export default App;