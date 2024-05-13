import Image from "next/image";
import { Button } from "../components/Button/Button";
import { Landing } from "../components/Landing/Landing";
import { ProjectCard } from "../components/Projects/ProjectCard";

export default function Page() {
  return (
    <main className="min-h-screen text-center">
      <Landing
        h2="Nuestros proyectos"
        description="En TDM.ar hacemos los proyectos de la mejor manera posible, diseñamos y comercializamos fantásticos productos digitales" />
      <section className="min-h-screen relative flex md:flex-row flex-col items-center gap-16 justify-center py-16 flex-wrap bg-white">
      <ProjectCard />
  
      </section>
    </main>
  );
}
