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
      <section className="min-h-screen relative flex md:flex-row flex-col items-center gap-16 justify-center py-16 flex-wrap">
      <ProjectCard 
      name="TapWise" 
      subtitle="Lorem ipsum dolor sit amet" 
      src="./tapWiseIcon.svg"
      id="1" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Facilisi etiam dignissim diam quis enim lobortis. Accumsan sit amet nulla facilisi morbi."/>
      <ProjectCard 
      name="Otro" 
      subtitle="Lorem ipsum dolor sit amet" 
      id="2" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Facilisi etiam dignissim diam quis enim lobortis. Accumsan sit amet nulla facilisi morbi."/>
      </section>
    </main>
  );
}
