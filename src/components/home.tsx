import React from "react";
import HeroSection from "./HeroSection";
import CourseCards from "./CourseCards";
import BenefitsSection from "./BenefitsSection";
import LeadCaptureForm from "./LeadCaptureForm";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CourseCards />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <BenefitsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Ready to Prepare Your Child for the Future?
          </h2>
          <LeadCaptureForm />
        </div>
      </motion.div>

      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <h2 className="text-2xl font-bold text-blue-600">AI-Learn</h2>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center md:text-right text-gray-500">
                &copy; {new Date().getFullYear()} AI-Learn. All rights reserved.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-center text-gray-400 text-sm">
              Empowering the next generation with AI literacy and skills for the
              future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
