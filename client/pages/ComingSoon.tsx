import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-black text-white pt-[80px] md:pt-[100px] flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FF] flex flex-wrap items-center justify-between px-6 md:px-8 lg:px-12 py-5 min-h-[80px] md:min-h-[100px] shadow-lg">
        <div className="flex items-center gap-1.5">
          <h1 className="text-[#2D2D2D] font-[Poppins] text-lg md:text-[21px] font-bold leading-[130%]">
            Trivew
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3 md:gap-6 lg:gap-12">
          <Link
            to="/about"
            className="inline-flex h-[50px] md:h-[60px] px-6 md:px-8 lg:px-12 justify-center items-center gap-2 rounded-[20px] bg-[#E2D9FF] font-[Poppins] text-sm md:text-base font-semibold text-[#6F3EFF]"
          >
            About Us
          </Link>
          <Link
            to="/product"
            className="inline-flex h-[50px] md:h-[60px] px-6 md:px-8 lg:px-12 justify-center items-center gap-2 rounded-[20px] bg-[#6F3EFF] font-[Poppins] text-sm md:text-base font-semibold text-white"
          >
            Our Prodcut
          </Link>
        </div>
      </nav>

      {/* Coming Soon Content */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-[Inter] text-6xl md:text-7xl lg:text-[96px] font-semibold leading-[95%] tracking-[-2.4px] bg-gradient-to-r from-[rgba(255,255,255,0.9)] via-white to-[rgba(255,255,255,0.25)] bg-clip-text text-transparent mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Coming Soon
          </motion.h1>

          <motion.p
            className="text-white font-[Inter] text-lg md:text-xl lg:text-2xl font-semibold leading-[150%] tracking-[0.5px] max-w-[657px] mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're working on something exciting. Stay tuned!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              to="/"
              className="inline-flex h-[60px] px-12 justify-center items-center gap-2 rounded-[20px] bg-[#6F3EFF] font-[Poppins] text-base font-semibold text-white hover:bg-[#5B2ECC] transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
