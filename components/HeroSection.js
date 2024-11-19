const HeroSection = () => {
    return (
      <div className="relative w-full h-[500px]">
        {/* Shifting Pastel Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 animate-gradient-background"></div>
  
        {/* Hero Section */}
        <section className="relative h-full flex items-center justify-center bg-cover bg-center">
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
  
          {/* Content */}
          <div className="relative z-10 text-center px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to My Creative Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6">
              "Your Tagline Here"
            </p>
            <a href="#about" className="bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-600">
              Learn More
            </a>
          </div>
        </section>
      </div>
    );
  };
  
  export default HeroSection;
  