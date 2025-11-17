import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeatureCard = ({
  title,
  description,
  image,
  gradient,
  showText = true,
}: {
  title: string;
  description: string;
  image?: React.ReactNode;
  gradient: "purple" | "black";
  showText?: boolean;
}) => {
  const gradientClasses = {
    purple: "bg-gradient-to-r from-black to-[#6F3EFF]",
    black: "bg-black",
  };

  return (
    <motion.div
      className={`flex flex-col justify-start p-8 sm:p-10 rounded-[20px] border border-[#6F3EFF] ${gradientClasses[gradient]} shadow-lg`}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(111, 62, 255, 0.3)" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {showText && (
        <motion.div className="mb-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="text-white font-poppins text-2xl sm:text-3xl font-semibold leading-tight tracking-tight mb-4">
            {title}
          </h3>
          <p className="text-white font-inter text-base leading-relaxed">{description}</p>
        </motion.div>
      )}

      {image && (
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {image}
        </motion.div>
      )}
    </motion.div>
  );
};

export default function Product() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white pt-[80px] md:pt-[100px]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FF] flex flex-wrap items-center justify-between px-6 md:px-8 lg:px-12 py-5 min-h-[80px] md:min-h-[100px] shadow-lg">
        <div className="flex items-center gap-1.5">
          <h1 className="text-[#2D2D2D] font-[Poppins] text-lg md:text-[21px] font-bold leading-[130%]">
            Trivew
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3 md:gap-6 lg:gap-12">
          <Link
            to="/"
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

      <main className="w-full">
        {/* Hero Section */}
        <motion.section
          className="w-full px-4 sm:px-8 lg:px-16 pt-12 sm:pt-20 pb-8 sm:pb-12 bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-center font-inter text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-[0.95] tracking-tight mb-8 sm:mb-12"
            style={{
              background: "linear-gradient(105deg, #19161C 31.77%, rgba(255, 255, 255, 0.25) 94.88%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Trivew
          </motion.h1>

          <motion.p
            className="text-center font-inter text-sm sm:text-base font-semibold leading-[2] tracking-wide text-black max-w-4xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Vira, we blend wearable technology, AI intelligence, and the power of Metrofis to provide smart, accessible solutions that
            help visually impaired individuals recognize, manage, and coordinate their clothing independently.
          </motion.p>
        </motion.section>

        {/* Features Grid */}
        <section className="w-full px-4 sm:px-8 lg:px-16 pb-16 sm:pb-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* First Row - Smart Glove */}
              <motion.div className="lg:col-span-5" variants={itemVariants}>
                <FeatureCard
                  title="Smart Glove"
                  description="Instant clothing recognition using advanced color, NIR, and tactile sensors."
                  gradient="black"
                  showText={false}
                  image={
                    <motion.img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/be578c9b1122e111a6844aa43a9188a2b5c44534?width=520"
                      alt="Smart Glove"
                      className="w-full max-w-[260px] h-auto object-contain"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  }
                />
              </motion.div>
              <motion.div className="lg:col-span-7" variants={itemVariants}>
                <FeatureCard
                  title="Smart Glove"
                  description="Instant clothing recognition using advanced color, NIR, and tactile sensors."
                  gradient="purple"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Second Row - AI Stylist */}
              <motion.div className="lg:col-span-5" variants={itemVariants}>
                <FeatureCard
                  title="AI Stylist"
                  description="MetroFis-powered recommendations that suggest matching outfits based on saved wardrobe items."
                  gradient="purple"
                  showText={false}
                  image={
                    <motion.img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c09090b8ae595e36d0f165cba523c14974647d3a?width=282"
                      alt="AI Stylist App"
                      className="w-full max-w-[220px] h-auto object-contain rounded-[15px] shadow-lg"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  }
                />
              </motion.div>
              <motion.div className="lg:col-span-7" variants={itemVariants}>
                <FeatureCard
                  title="AI Stylist"
                  description="MetroFis-powered recommendations that suggest matching outfits based on saved wardrobe items."
                  gradient="black"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Third Row - Dual Audio Experience */}
              <motion.div className="lg:col-span-5" variants={itemVariants}>
                <FeatureCard
                  title="Dual Audio Experience"
                  description="Fast glove feedback plus detailed TTS guidance through the mobile app."
                  gradient="black"
                  showText={false}
                  image={
                    <motion.svg
                      className="w-full max-w-[236px] h-auto"
                      viewBox="0 0 236 285"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <g clipPath="url(#clip0_208_536)">
                        <path
                          d="M88.0525 0H148.814C151.421 0 154.002 0.507349 156.411 1.49308C158.819 2.47881 161.008 3.92362 162.851 5.74501C164.694 7.56641 166.157 9.72871 167.154 12.1085C168.152 14.4882 168.665 17.0389 168.665 19.6147V187.881C168.665 189.905 168.262 191.908 167.478 193.777C166.695 195.647 165.546 197.345 164.098 198.776C162.65 200.207 160.931 201.342 159.04 202.116C157.148 202.89 155.12 203.289 153.072 203.289H89.2102C84.7115 203.289 80.3972 201.523 77.2161 198.38C74.0351 195.237 72.248 190.974 72.248 186.529V15.6162C72.248 11.4745 73.9132 7.50247 76.8771 4.57387C79.841 1.64527 83.8609 0 88.0525 0Z"
                          fill="white"
                        />
                        <path
                          d="M120.467 198.196C124.631 198.196 128.006 194.861 128.006 190.746C128.006 186.632 124.631 183.296 120.467 183.296C116.302 183.296 112.927 186.632 112.927 190.746C112.927 194.861 116.302 198.196 120.467 198.196Z"
                          fill="#F2F3F4"
                        />
                        <path
                          d="M128.933 12.9406H111.991C111.296 12.9406 110.732 13.4972 110.732 14.1839V14.1938C110.732 14.8805 111.296 15.4371 111.991 15.4371H128.933C129.628 15.4371 130.191 14.8805 130.191 14.1938V14.1839C130.191 13.4972 129.628 12.9406 128.933 12.9406Z"
                          fill="#F2F3F4"
                        />
                        <path d="M164.527 23.5735H76.3945V179.258H164.527V23.5735Z" fill="url(#paint0_linear_208_536)" />
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_208_536" x1="76.3945" y1="101.416" x2="164.527" y2="101.416" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#6F3EFF" />
                          <stop offset="1" stopColor="#00BFFA" />
                        </linearGradient>
                        <clipPath id="clip0_208_536">
                          <rect width="236" height="285" fill="white" />
                        </clipPath>
                      </defs>
                    </motion.svg>
                  }
                />
              </motion.div>
              <motion.div className="lg:col-span-7" variants={itemVariants}>
                <FeatureCard
                  title="Dual Audio Experience"
                  description="Fast glove feedback plus detailed TTS guidance through the mobile app."
                  gradient="purple"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
