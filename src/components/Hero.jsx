import { FaReact, FaJava, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiSpring, SiMysql, SiPostgresql } from "react-icons/si";

export default function Hero() {
  return (
    <section className="py-20 px-6 flex flex-col items-center justify-center text-center gap-4">
      
      <h1 className="text-6xl font-bold">
        Marcelli Araujo
      </h1>

      <p className="text-2xl text-[#C7B5DB]">
        Desenvolvedora Full Stack
      </p>
      
      
        <div className="flex animate-pulse gap-10 text-4xl mt-10">
          <FaJava className="hover:scale-120 transition duration-300" />
          <SiSpring className="hover:scale-120 transition duration-300" />
          <SiMysql className="hover:scale-120 transition duration-300" />
          <SiPostgresql className="hover:scale-120 transition duration-300" />
          <FaReact className="hover:scale-120 transition duration-300" />
          <FaJs className="hover:scale-120 transition duration-300" />
          <FaHtml5 className="hover:scale-120 transition duration-300" />
          <FaCss3Alt className="hover:scale-120 transition duration-300" />
          <FaNodeJs className="hover:scale-120 transition duration-300" />
        </div>
     

      <a href="#projects" className="bg-[#4A1580] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#6E3F9E] transition duration-300 mt-10">Ver projetos</a>

    </section>
  )
}