import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  image?: ReactNode;
  gradient: "purple" | "black" | "purple-black";
  className?: string;
  showText?: boolean;
}

export default function FeatureCard({
  title,
  description,
  image,
  gradient,
  className = "",
  showText = true
}: FeatureCardProps) {
  const gradientClasses = {
    purple: "bg-gradient-to-r from-black to-brand-purple",
    black: "bg-black",
    "purple-black": "bg-gradient-to-r from-black to-brand-purple"
  };

  return (
    <div
      className={`flex flex-col justify-start p-8 sm:p-10 rounded-[20px] border border-brand-purple ${gradientClasses[gradient]} shadow-lg ${className}`}
    >
      {showText && (
        <div className="mb-8">
          <h3 className="text-white font-poppins text-2xl sm:text-3xl font-semibold leading-tight tracking-tight mb-4">
            {title}
          </h3>
          <p className="text-white font-mulish text-base leading-relaxed">
            {description}
          </p>
        </div>
      )}

      {image && (
        <div className="flex justify-center items-center">
          {image}
        </div>
      )}
    </div>
  );
}
