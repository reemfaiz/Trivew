import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full px-6 sm:px-12 py-5 flex justify-between items-center bg-gradient-to-r from-brand-purple to-black">
      <Link to="/" className="flex items-center gap-1.5">
        <h1 className="text-white text-xl sm:text-2xl font-poppins font-bold tracking-tight">
          TriView
        </h1>
      </Link>
      
      <div className="flex items-end gap-4 sm:gap-5">
        <Link 
          to="/about" 
          className="px-8 sm:px-12 py-3 sm:py-4 bg-brand-purple-light rounded-[20px] text-brand-purple text-sm sm:text-base font-poppins font-semibold hover:opacity-90 transition-opacity"
        >
          About Us
        </Link>
        <Link 
          to="/" 
          className="px-8 sm:px-12 py-3 sm:py-4 bg-brand-purple rounded-[20px] text-white text-sm sm:text-base font-poppins font-semibold hover:opacity-90 transition-opacity"
        >
          Our Prodcut
        </Link>
      </div>
    </nav>
  );
}
