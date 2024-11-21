import React from "react";
import Link from "next/link";
import HeroSection from "./HeroSection"; // Adjust the path if necessary

const HomeScreen = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Other sections of your home screen */}
      <Link href="/about">
        <section id="about" className="py-16">
          <h2 className="text-3xl text-center">About Me</h2>
          <p className="text-center ">
          Hey there! I&#39;m Gargee, a senior at the University of Georgia, and I&#39;d love to share some of my work with you!</p>
        </section>
      </Link>

      {/* More sections */}
    </div>
  );
};

export default HomeScreen;
