import ProjectCard from "./ProjectCard"
const base = import.meta.env.BASE_URL

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Meu site pessoal feito com React",
    image: base + "/images/portfolio.png",
    link: "https://celliaraujo.github.io/portfolio"
  },
  {
    id: 2,
    title: "Game Pedagógico",
    description: "Jogo infantil para ensino de pensamento computacional.",
    image: base + "/images/progamix.png",
    link: "https://celliaraujo.github.io/game-pensamento-computacional/"
  },
  {
    id: 3,
    title: "Jogo da Forca",
    description: "Jogo criado para exercitar conceitos básicos de lógica de programação.",
    image: base + "/images/forca.png",
    link: "https://celliaraujo.github.io/forca/"
  },
  {
    id: 4,
    title: "Calculadora",
    description: "Projeto criado para exercitar lógica de programação e design responsivo.",
    image: base + "/images/calculadora.png",
    link: "https://celliaraujo.github.io/projeto-calculadora/"
  },
  {
    id: 5,
    title: "Game Pedagógico",
    description: "Jogo infantil para ensino de pensamento computacional.",
    image: base + "/images/comandinhos.png",
    link: "https://celliaraujo.github.io/projeto-game-js/"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 flex flex-col items-center justify-center text-center gap-4">
      <h2 className="text-4xl font-bold mb-6">Projetos</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}