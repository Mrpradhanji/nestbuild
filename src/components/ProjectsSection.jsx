import React from "react";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Palm Jumeirah Villa",
    desc: "Luxury beachfront property with stunning views and top-tier amenities."
  },
  {
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
    title: "Downtown Apartment",
    desc: "Modern apartment in the heart of Dubai, perfect for business travelers."
  },
  {
    img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80",
    title: "Marina Penthouse",
    desc: "Spacious penthouse with panoramic marina views and luxury interiors."
  }
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Featured Properties</h2>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover some of our top-performing short-term rental properties in Dubai.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {projects.map((project, idx) => (
          <div key={idx} className="flex-1 bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
            <p className="text-gray-600">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
