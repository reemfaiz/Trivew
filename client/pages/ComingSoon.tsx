import { motion } from "framer-motion";import { motion } from "framer-motion";

import { Link } from "react-router-dom";import { Link } from "react-router-dom";



export default function ComingSoon() {export default function ComingSoon() {

  return (  return (

    <div className="min-h-screen bg-black text-white pt-[80px] md:pt-[100px] flex flex-col">    <div className="min-h-screen bg-black text-white pt-[80px] md:pt-[100px] flex flex-col">

      {/* Navbar */}      {/* Navbar */}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FF] flex flex-wrap items-center justify-between px-6 md:px-8 lg:px-12 py-5 min-h-[80px] md:min-h-[100px] shadow-lg">      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FF] flex flex-wrap items-center justify-between px-6 md:px-8 lg:px-12 py-5 min-h-[80px] md:min-h-[100px] shadow-lg">

        <div className="flex items-center gap-1.5">        <div className="flex items-center gap-1.5">

          <h1 className="text-[#2D2D2D] font-[Poppins] text-lg md:text-[21px] font-bold leading-[130%]">          <h1 className="text-[#2D2D2D] font-[Poppins] text-lg md:text-[21px] font-bold leading-[130%]">

            Trivew            Trivew

          </h1>          </h1>

        </div>        </div>

        <div className="flex flex-wrap items-center gap-3 md:gap-6 lg:gap-12">        <div className="flex flex-wrap items-center gap-3 md:gap-6 lg:gap-12">

          <Link          <Link

            to="/"            to="/about"

            className="inline-flex h-[50px] md:h-[60px] px-6 md:px-8 lg:px-12 justify-center items-center gap-2 rounded-[20px] bg-[#E2D9FF] font-[Poppins] text-sm md:text-base font-semibold text-[#6F3EFF]"            className="inline-flex h-[50px] md:h-[60px] px-6 md:px-8 lg:px-12 justify-center items-center gap-2 rounded-[20px] bg-[#E2D9FF] font-[Poppins] text-sm md:text-base font-semibold text-[#6F3EFF]"

          >          >

            Home            About Us

          </Link>          </Link>

          <Link          <Link

            to="/about"            to="/product"

            className="inline-flex h-[50px] md:h-[60px] px-6 md:px-8 lg:px-12 justify-center items-center gap-2 rounded-[20px] bg-[#E2D9FF] font-[Poppins] text-sm md:text-base font-semibold text-[#6F3EFF]"            className="inline-flex h-[50px] md:h-[60px] px-6 md:px-8 lg:px-12 justify-center items-center gap-2 rounded-[20px] bg-[#6F3EFF] font-[Poppins] text-sm md:text-base font-semibold text-white"

          >          >

            About Us            Our Prodcut

          </Link>          </Link>

          <Link        </div>

            to="/product"      </nav>

            className="inline-flex h-[50px] md:h-[60px] px-6 md:px-8 lg:px-12 justify-center items-center gap-2 rounded-[20px] bg-[#6F3EFF] font-[Poppins] text-sm md:text-base font-semibold text-white"

          >      {/* Coming Soon Content */}

            Our Product      <section className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-20">

          </Link>        <motion.div

        </div>          className="text-center"

      </nav>          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

      {/* Coming Soon Content */}          transition={{ duration: 0.8 }}

      <section className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-20">        >

        <motion.div          <motion.h1

          className="text-center max-w-2xl mx-auto"            className="font-[Inter] text-6xl md:text-7xl lg:text-[96px] font-semibold leading-[95%] tracking-[-2.4px] bg-gradient-to-r from-[rgba(255,255,255,0.9)] via-white to-[rgba(255,255,255,0.25)] bg-clip-text text-transparent mb-8 md:mb-12"

          initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}            animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}            transition={{ duration: 0.8, delay: 0.1 }}

        >          >

          {/* Animated Number */}            Coming Soon

          <motion.div          </motion.h1>

            className="mb-8 md:mb-12"

            initial={{ opacity: 0, scale: 0.8 }}          <motion.p

            animate={{ opacity: 1, scale: 1 }}            className="text-white font-[Inter] text-lg md:text-xl lg:text-2xl font-semibold leading-[150%] tracking-[0.5px] max-w-[657px] mx-auto mb-12"

            transition={{ duration: 0.8, delay: 0.2 }}            initial={{ opacity: 0, y: 20 }}

          >            animate={{ opacity: 1, y: 0 }}

            <span className="text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-[#6F3EFF] via-purple-400 to-pink-400 bg-clip-text text-transparent">            transition={{ duration: 0.8, delay: 0.2 }}

              Coming          >

            </span>            We're working on something exciting. Stay tuned!

          </motion.div>          </motion.p>



          {/* Main Heading */}          <motion.div

          <motion.h1            initial={{ opacity: 0, y: 20 }}

            className="font-[Inter] text-5xl md:text-6xl lg:text-7xl font-semibold leading-[95%] tracking-[-2.4px] bg-gradient-to-r from-[rgba(255,255,255,0.9)] via-white to-[rgba(255,255,255,0.25)] bg-clip-text text-transparent mb-6 md:mb-8"            animate={{ opacity: 1, y: 0 }}

            initial={{ opacity: 0, y: 20 }}            transition={{ duration: 0.8, delay: 0.3 }}

            animate={{ opacity: 1, y: 0 }}          >

            transition={{ duration: 0.8, delay: 0.3 }}            <Link

          >              to="/"

            Soon              className="inline-flex h-[60px] px-12 justify-center items-center gap-2 rounded-[20px] bg-[#6F3EFF] font-[Poppins] text-base font-semibold text-white hover:bg-[#5B2ECC] transition-colors"

          </motion.h1>            >

              Back to Home

          {/* Description */}            </Link>

          <motion.p          </motion.div>

            className="text-lg md:text-xl text-gray-300 font-[Poppins] leading-relaxed mb-8 md:mb-12"        </motion.div>

            initial={{ opacity: 0, y: 20 }}      </section>

            animate={{ opacity: 1, y: 0 }}    </div>

            transition={{ duration: 0.8, delay: 0.4 }}  );

          >}

            We're working hard to bring you something amazing. Stay tuned for exciting updates!
          </motion.p>

          {/* Email Signup */}
          <motion.form
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 md:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 font-[Poppins] focus:outline-none focus:border-[#6F3EFF] transition-colors w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-8 py-3 md:py-4 rounded-lg bg-[#6F3EFF] text-white font-[Poppins] font-semibold hover:bg-[#5A2ECC] transition-colors w-full sm:w-auto"
            >
              Notify Me
            </button>
          </motion.form>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex h-[50px] md:h-[60px] px-8 md:px-12 justify-center items-center gap-2 rounded-[20px] border-2 border-white text-white font-[Poppins] font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#6F3EFF]/20 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-purple-600/10 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
