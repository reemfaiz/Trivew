import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  descriptionSize?: string;
}

function TeamCard({ name, title, description, descriptionSize = "text-base" }: TeamCardProps) {
  return (
    <motion.div
      className="w-full min-h-[275px] rounded-[15px] border border-white p-6 md:p-8 lg:p-10 flex flex-col"
      style={{
        background: "linear-gradient(90deg, #6F3EFF 0%, #000 100%)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="font-[Inter] text-2xl md:text-3xl lg:text-[40px] font-semibold leading-[95%] tracking-[-2.4px] bg-gradient-to-r from-[rgba(255,255,255,0.9)] via-white to-[rgba(255,255,255,0.25)] bg-clip-text text-transparent">
        {name}
      </h3>
      <p className="text-[#A099FF] font-[Inter] text-lg md:text-xl lg:text-2xl font-semibold tracking-[0.5px] mt-3 md:mt-4 lg:mt-5">
        {title}
      </p>
      <p className={`text-white font-[Inter] text-sm md:${descriptionSize} font-light leading-[150%] tracking-[0.5px] mt-3 md:mt-4 lg:mt-5`}>
        {description}
      </p>
    </motion.div>
  );
}

export default function About() {
  const teamSectionRef = useRef<HTMLDivElement>(null);

  const scrollToTeam = () => {
    teamSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white pt-[80px] md:pt-[100px]">
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

      {/* Hero Section */}
      <motion.section
        className="relative px-6 md:px-12 lg:px-[72px] pt-24 md:pt-32 lg:pt-[175px] pb-20 md:pb-28 lg:pb-[140px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="font-[Inter] text-5xl md:text-7xl lg:text-[96px] font-semibold leading-[95%] tracking-[-2.4px] bg-gradient-to-r from-[rgba(255,255,255,0.9)] via-white to-[rgba(255,255,255,0.25)] bg-clip-text text-transparent max-w-[624px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="mt-6 md:mt-8 text-white font-[Inter] text-xs md:text-sm font-semibold leading-[200%] tracking-[1px] max-w-[657px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are a passionate team dedicated to creating smart, human-centered technology that empowers visually impaired individuals.
          <br />
          At Vira, we focus on building simple, reliable, and accessible solutions that make everyday tasks like identifying and
          <br />
          coordinating clothing ,easier and more independent.
          <br />
          Our work combines wearable devices, AI-powered intelligence, and thoughtful design to turn real challenges
          <br />
          into meaningful solutions.As a multidisciplinary team in innovation, engineering, design, marketing, and
          <br />
          quality, we collaborate to transform ideas into practical products that truly make a difference.
          <br />
          Vira isn't just a tool it's a step toward a more inclusive world where technology supports people in ways that matter most.
        </motion.p>

        {/* Phone Images */}
        <motion.img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fa062e33bc8e722aa22dd77064c87992f24b1f0e?width=540"
          alt="Phone mockup 1"
          className="hidden lg:block absolute top-[252px] right-[54px] w-[333px] h-[513px] rounded-[34px] shadow-[-30px_60px_90px_0_rgba(111,62,255,0.55)]"
          style={{ transform: "rotate(-0.245deg)" }}
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* CTA Buttons */}
        <motion.div
          className="mt-16 md:mt-20 lg:mt-[107px] flex flex-col sm:flex-row items-center gap-4 md:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/coming-soon" className="inline-flex h-[60px] px-12 justify-center items-center gap-2 rounded-[20px] border border-white bg-transparent relative hover:bg-white/10 transition-colors">
            <svg
              className="w-5 h-5 flex-shrink-0 absolute left-[28px]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.35156 14.4219C6.46094 17.0703 2.92969 17.0703 2.92969 17.0703C2.92969 17.0703 2.92969 13.5391 5.57813 12.6484"
                stroke="#F8F9FF"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.3047 8.2344L10 13.5391L6.46094 10L11.7656 4.69534C13.7734 2.68753 15.7813 2.71097 16.6406 2.83597C16.7732 2.85366 16.8963 2.9145 16.9909 3.0091C17.0855 3.1037 17.1464 3.2268 17.1641 3.3594C17.2891 4.21878 17.3125 6.22659 15.3047 8.2344Z"
                stroke="#F8F9FF"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.4219 9.11719V14.1641C14.4195 14.3289 14.3521 14.4862 14.2344 14.6016L11.7109 17.1328C11.6309 17.2128 11.5306 17.2695 11.4208 17.297C11.3111 17.3244 11.1959 17.3215 11.0876 17.2886C10.9794 17.2558 10.882 17.1941 10.8061 17.1102C10.7301 17.0264 10.6783 16.9235 10.6562 16.8125L10 13.5391"
                stroke="#F8F9FF"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.883 5.57812H5.83612C5.67127 5.58047 5.51402 5.64787 5.39862 5.76563L2.86737 8.28906C2.78741 8.36912 2.73068 8.46939 2.70323 8.57916C2.67579 8.68894 2.67866 8.8041 2.71154 8.91237C2.74442 9.02064 2.80608 9.11796 2.88994 9.19393C2.9738 9.2699 3.07671 9.32168 3.18769 9.34375L6.46112 10"
                stroke="#F8F9FF"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-white text-center font-[Poppins] text-base font-semibold leading-[150%] pl-6">
              Get Started
            </span>
          </Link>
        </motion.div>

        {/* Get Know our team button with gradient */}
        <motion.button
          onClick={scrollToTeam}
          className="mt-8 md:mt-10 lg:mt-[51px] flex w-full sm:w-[424px] h-[60px] px-12 justify-center items-center gap-2 rounded-[20px] border border-white font-[Poppins] text-base font-semibold text-white hover:border-[#6F3EFF] transition-colors"
          style={{
            background: "linear-gradient(90deg, #000 0%, #6F3EFF 100%)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Know our team
        </motion.button>

        {/* Down arrow */}
        <motion.svg
          className="mt-4 mx-auto sm:ml-[374px]"
          width="19"
          height="12"
          viewBox="0 0 19 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <path
            d="M8.49625 11.5905L0.418725 3.69119C-0.139575 3.14521 -0.139575 2.26234 0.418725 1.72217L1.76102 0.409487C2.31932 -0.136496 3.2221 -0.136496 3.77446 0.409487L9.5 6.00871L15.2255 0.409487C15.7838 -0.136496 16.6866 -0.136496 17.239 0.409487L18.5813 1.72217C19.1396 2.26815 19.1396 3.15102 18.5813 3.69119L10.5038 11.5905C9.95733 12.1365 9.05455 12.1365 8.49625 11.5905Z"
            fill="white"
          />
        </motion.svg>
      </motion.section>

      {/* White divider section with heading */}
      <motion.div
        className="bg-white border-4 md:border-[5px] border-[#6F3EFF] py-12 md:py-16 lg:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-center font-[Inter] text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[95%] tracking-[-2.4px]">
          <span className="text-black">who are behind </span>
          <span className="text-[#6F3EFF]">the project?</span>
        </h2>
      </motion.div>

      {/* Team Section */}
      <motion.section
        ref={teamSectionRef}
        className="px-6 md:px-12 py-12 md:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Team Cards */}
        <div className="max-w-[889px] mx-auto space-y-6 md:space-y-8 lg:space-y-10">
          <motion.div variants={itemVariants}>
            <TeamCard
              name="Batool Alhur"
              title="Marketing Lead | Computer Science"
              description="A Computer Science graduate with a strong passion for storytelling, branding, and connecting technology with people. As Marketing Lead at Aseer, Batool crafts compelling narratives that reflect the company's vision, communicate its purpose, and build deep trust with users. She believes that great technology becomes powerful only when people can understand it, feel it, and connect with it."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <TeamCard
              name="Reem Faiz"
              title="Co-Founder & CTO | Software Engineer"
              description="Software Engineer driven by a deep passion for building intelligent, human-centered technology. As the Co-Founder & CTO at Aseer, Reem leads the development of advanced systems that combine creativity with engineering precision to deliver meaningful digital solutions. Her vision goes far beyond writing code — she aims to shape a future where technology serves people, enhances accessibility, and empowers the next generation of innovators."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <TeamCard
              name="Asaeel Lardi"
              title="Co-Founder & CEO | Software Engineer"
              description="Software Engineer with a strategic mindset and a relentless drive for innovation. As the Co-Founder & CEO of Aseer, Asayel guides the company with clarity, ambition, and a passion for transforming ideas into real-world impact. Her leadership is rooted in empowering teams, building scalable solutions, and creating a future where technology drives positive change across communities."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <TeamCard
              name="Ghala Alqahtani"
              title="Quality Lead | Information Technology"
              description="An IT specialist committed to excellence and precision. As Quality Lead at Vira, Ghaida ensures every product meets high standards by focusing on performance, reliability, and user satisfaction. Her attention to detail helps deliver solutions that are stable, dependable, and ready for real use."
              descriptionSize="text-xl"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <TeamCard
              name="Ghaieda Alotaibi"
              title="Innovation Lead | Software Engineer"
              description="A Software Engineer inspired by creativity and the pursuit of new possibilities. As Innovation Lead at Aseer, Ghala explores emerging technologies and transforms bold ideas into practical, groundbreaking solutions that push boundaries and elevate user experiences. Her mission is to build a world where innovation is accessible, meaningful, and inspires people to think differently."
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Footer with social icons */}
      <motion.footer
        className="pb-12 md:pb-16 lg:pb-20 flex justify-center gap-4 md:gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="#"
          className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/triviewprodect/about/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://x.com/triviewproudect?s=21"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              fill="currentColor"
            />
          </svg>
        </a>
      </motion.footer>
    </div>
  );
}
