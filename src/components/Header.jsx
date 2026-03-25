export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-[#100120] shadow-sm">
      <nav className="flex gap-6">
        <a href="#about" className="text-[#C7B5DB] hover:text-[#6E3F9E] transition">Sobre</a>
        <a href="#projects" className="text-[#C7B5DB] hover:text-[#6E3F9E] transition">Projetos</a>
        <a href="#contact" className="text-[#C7B5DB] hover:text-[#6E3F9E] transition">Contato</a>
      </nav>
    </header>
  )
}