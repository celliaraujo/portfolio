export default function ProjectCard({ project }) {
  return (
    <div className="w-[300px] rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl hover:-translate-y-2 transition duration-300">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3">
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4A1580] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#6E3F9E] transition duration-300"
        >
          Ver projeto
        </a>
      </div>
    </div>
  )
}