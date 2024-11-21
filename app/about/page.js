import Image from 'next/image';
import Header from '/components/header'

const About = () => {
  const photos = [
    '/images/about/gallery5.jpg',
    '/images/about/gallery3.jpg',
    '/images/about/gallery7.jpg',
    '/images/about/gallery4.jpg',
    '/images/about/gallery6.jpg'
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-6 space-y-10">
      <Header></Header>
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4 text-759EB8">About Me</h1>
        <p className="text-lg text-B3C5D7">Get to know me and the work that I do!</p>
      </div>

      {/* Main Photo */}
      <div className="flex justify-center">
        <Image
          src="/images/about/headshot.jpg" 
          alt="Gargee Jamadagni Headshot"
          width={300}
          height={300}
          className="rounded-md shadow-xl"
        />
      </div>

      {/* Paragraph with some information */}
      <section className="text-center space-y-4">
        <p className="text-xl text-7392B7">
          <b>Hello!</b> I&#39;m Gargee, a creative individual passionate about blending art and technology. With a background in design, marketing, art, and software development, I thrive on turning ideas into visually captivating realities. From designing digital experiences to crafting intricate jewelry pieces, I bring an artistic touch to everything I do.
        </p>
        <p className="text-xl text-7392B7">
          I&#39;m also an experienced developer, building interactive tools and applications like UGArden Herbs 2024, where technology meets sustainability. My work reflects a deep appreciation for detail, functionality, and user-focused design.
        </p>
        <p className="text-xl text-7392B7">
          When I&#39;m not designing or coding, I&#39;m exploring new creative mediums or attending live music events, and I&#39;m excited to keep growing as a multifaceted creator and problem-solver.
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-C5D5EA p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-7392B7">Quick Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-759EB8">Graduation Year</h3>
            <p className="text-lg text-7392B7">2025</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-759EB8">Degree</h3>
            <p className="text-lg text-7392B7">Computer Science</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-759EB8">Minor</h3>
            <p className="text-lg text-7392B7">Studio Art</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-759EB8">Certificate</h3>
            <p className="text-lg text-7392B7">New Media</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="p-2 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-w-1 aspect-h-1">
              <Image
                src={photo}
                alt={`Gallery Image ${index + 1}`}
                objectFit="cover"
                width={300}
                height={300}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
