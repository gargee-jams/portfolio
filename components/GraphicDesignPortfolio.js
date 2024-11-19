// components/GraphicDesignPortfolio.js
const graphicDesignProjects = [
    {
      title: 'UGAHacks 8: Create your own adventure',
      description: 'Marketing assets for UGAHacks 8',
      imageUrl: '/images/graphic1.jpg'
    },
    {
      title: 'UGAHacks 9: Be the hero of your own story',
      description: 'A comprehensive branding package including logo design, typography, and color palette.',
      imageUrl: '/images/graphic2.jpg'
    }, {
        title: 'Slab Dream Labs Internship',
        description: 'Promotion strategy, UI/UX reviews, and content creation for a small business'
      }
  ];
  
  const GraphicDesignPortfolio = () => {
    return (
      <section className="graphic-design py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Graphic Design</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {graphicDesignProjects.map((project, index) => (
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
  
  export default GraphicDesignPortfolio;
  