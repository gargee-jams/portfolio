// components/JewelryPortfolio.js
const jewelryProjects = [
    {
      title: 'Custom Necklace Design',
      description: 'A unique design combining gold and diamonds for an elegant necklace.',
      imageUrl: '/images/jewelry1.jpg'
    },
    {
      title: 'Ring Collection',
      description: 'A series of hand-crafted rings in various styles and finishes.',
      imageUrl: '/images/jewelry2.jpg'
    },
    // Add more jewelry projects here
  ];
  
  const JewelryPortfolio = () => {
    return (
      <section className="jewelry-making py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Jewelry Making</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {jewelryProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default JewelryPortfolio;
  