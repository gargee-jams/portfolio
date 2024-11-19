
import Image from 'next/image';
//import { useState } from 'react';

const About = () => {
  // Dummy data for photos
  const photos = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg'
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-6 space-y-10">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">About Me</h1>
        <p className="text-lg text-gray-600">A little bit about who I am and what I do.</p>
      </div>

      {/* Main Photo */}
      <div className="flex justify-center">
        <Image
          src="/images/main-photo.jpg" // Replace with your image file path
          alt="Main photo"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Paragraph with some information */}
      <section className="text-center space-y-4">
        <p className="text-xl text-gray-700">
          Hi there! I&#39m a passionate developer and designer with a love for creating unique and functional web applications.
          I graduated with a degree in Computer Science and have worked on various creative projects, ranging from web development to graphic design.
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Quick Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-bold text-gray-700">Graduation Year</h3>
            <p className="text-lg text-gray-500">2023</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-700">Degree</h3>
            <p className="text-lg text-gray-500">Computer Science</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-700">Experience</h3>
            <p className="text-lg text-gray-500">3+ years</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">picture of me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-w-1 aspect-h-1">
              <Image
                src={photo}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
