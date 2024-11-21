const HeroSection = () => {
    return (
      <div className="relative w-full h-[500px]">
        {/* Shifting Pastel Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 animate-gradient-background"></div>
  
        {/* Hero Section */}
        <section className="relative h-full flex items-center justify-center bg-cover bg-center">
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
  
          {/* Content */}
          <div className="relative z-10 text-center px-6 md:px-12">
            <h1 className="font-trench text-4xl md:text-6xl font-bold text-white mb-4">
              Hi! I&#39;m Gargee. A designer and developer.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6">
             { /*ADD TAGLINE HERE*/}
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
  