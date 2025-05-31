import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Prepare Your Child for the Future with AI Education",
  subtitle = "In today's rapidly evolving digital landscape, AI literacy is becoming as essential as reading and writing. Give your child the competitive edge they need to thrive in tomorrow's world.",
  ctaText = "Discover Our Classes",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-display">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl font-sans">
            {subtitle}
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {ctaText}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200 rounded-full opacity-60 z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200 rounded-full opacity-60 z-0"></div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80&auto=format"
                alt="Children learning AI concepts"
                className="rounded-2xl shadow-2xl relative z-10 w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&q=80&auto=format";
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80&auto=format"
                alt="Child with technology"
                className="rounded-2xl shadow-2xl relative z-10 w-full h-auto mt-8"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?w=800&q=80&auto=format";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
