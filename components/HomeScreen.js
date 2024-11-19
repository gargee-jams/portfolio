import React from "react";
import HeroSection from "./HeroSection"; // Adjust the path if necessary

const HomeScreen = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Other sections of your home screen */}
      <section id="about" className="py-16">
        <h2 className="text-3xl text-center">About Me</h2>
        {/* About content goes here */}
      </section>

      {/* More sections */}
    </div>
  );
};

export default HomeScreen;
