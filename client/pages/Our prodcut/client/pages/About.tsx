import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="w-full px-4 sm:px-8 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-poppins font-bold text-brand-purple mb-8">
            About Us
          </h1>
          <p className="text-lg font-mulish text-gray-700 leading-relaxed mb-8">
            At Vira, we're passionate about creating innovative solutions that empower visually impaired individuals 
            to live more independently and confidently.
          </p>
          <p className="text-base font-mulish text-gray-600 leading-relaxed">
            Continue prompting to add more content to this page.
          </p>
        </div>
      </main>
    </div>
  );
}
